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
import { BigNumber, ethers, Contract } from "ethers";
import NFT from '../../artifacts/NFT.sol/NFT.json'
import Markeplace from '../../artifacts/NFT-Marketplace.sol/Marketplace.json'
import 'dotenv/config'
require('dotenv').config()
import Web3 from "web3";


type SignerContextType = {
  signer?: JsonRpcSigner;
  address?: string;
  balance?:string;
  network?:string;
  loading: boolean;
  myNFT?: ethers.Contract;
  NFTMarketplace?: ethers.Contract;
  connectWallet: () => Promise<void>;
};

const initialNFT = {
  name: '',
  prize: 0,
  type: '',
  rareLevel: '',
  description: '',
  imgUrl: ''
}


const SignerContext = createContext<SignerContextType>({} as any);

const useSigner = () => useContext(SignerContext);


export const SignerProvider = ({ children }: { children: ReactNode }) => {
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [address, setAddress] = useState<string>();
  const [balance, setBalance] = useState<string>();
  const [network, setNetWork] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [myNFT, setMyNFT] = useState<ethers.Contract>();
  const [NFTMarketplace, setNFTMarketplace] = useState<ethers.Contract>();



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
          if( process.env.NEXT_PUBLIC_MY_NFT_ADDRESS !== undefined && process.env.NEXT_PUBLIC_NFT_MARKETPLACE_ADDRESS !== undefined) { 
            const mynft = new Contract(process.env.NEXT_PUBLIC_MY_NFT_ADDRESS, NFT.abi, signer )
            const nftMarketplace = new Contract(process.env.NEXT_PUBLIC_NFT_MARKETPLACE_ADDRESS, Markeplace.abi, signer)
            setMyNFT(mynft)
            setNFTMarketplace(nftMarketplace)           
            }
            
          
            
            setSigner(signer);
            console.log('signer', signer)
          setAddress(address);
          setBalance(balanceFormat);
          setNetWork(networkType);
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