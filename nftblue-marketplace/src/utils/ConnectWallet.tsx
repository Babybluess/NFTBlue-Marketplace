'use client'
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Web3Modal from "web3modal";
import { useDispatch, useSelector } from "react-redux";
import * as types from '../../scripts/types/types'
import { BigNumber, ethers } from "ethers";
import NFT from '../../artifacts/NFT.sol/NFT.json'
import Markeplace from '../../artifacts/NFT-Marketplace.sol/Marketplace.json'
import 'dotenv/config'
require('dotenv').config()

type SignerContextType = {
  signer?: JsonRpcSigner;
  address?: string;
  balance?:string;
  network?:string;
  loading: boolean;
  myNFT?: object;
  NFTMarketplace?: object;
  connectWallet: () => Promise<void>;
};

const SignerContext = createContext<SignerContextType>({} as any);

const useSigner = () => useContext(SignerContext);


export const SignerProvider = ({ children }: { children: ReactNode }) => {
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [address, setAddress] = useState<string>();
  const [balance, setBalance] = useState<string>();
  const [network, setNetWork] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [myNFT, setMyNFT] = useState<object>();
  const [NFTMarketplace, setNFTMarketplace] = useState<object>();


  useEffect(() => {
    const web3modal = new Web3Modal();
    if (web3modal.cachedProvider) connectWallet();
    window.ethereum.on("accountsChanged", connectWallet);
  }, []);


  const connectWallet = async () => {
      setLoading(true);
      try {
          const web3modal = new Web3Modal({ cacheProvider: true });
          const instance = await web3modal.connect();
          const provider = new Web3Provider(instance);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const balance = await signer.getBalance();
          const balanceToEth = ethers.utils.formatEther(balance)
          const balanceFormat = balanceToEth.substring(0, 4)
          const networkType = provider.network.name;
          const mynft = new ethers.Contract('0x7B7767E656f66d220121F80180EA9C51f4FFe4da', NFT.abi, signer)
          const nftMarketplace = new ethers.Contract('0xC48B1a6DBE41972BDfc111Ea584aA80f01EDB683', Markeplace.abi, signer)
          console.log("balaccetoEth", balanceFormat)
          console.log("Network Type", networkType)
          console.log("myNFT", mynft)
          console.log("NFT Marketplce", nftMarketplace)
          
          setSigner(signer);
          setAddress(address);
          setBalance(balanceFormat);
          setNetWork(networkType);
          setMyNFT(mynft)
          setNFTMarketplace(nftMarketplace)
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const contextValue = { signer, address, balance, network, loading, myNFT, NFTMarketplace, connectWallet };

  return (
    <SignerContext.Provider value={contextValue}>
      {children}
    </SignerContext.Provider>
  );
};



export default useSigner;