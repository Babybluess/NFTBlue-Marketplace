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
import { BigNumber } from "ethers";

type SignerContextType = {
  signer?: JsonRpcSigner;
  address?: string;
  loading: boolean;
  connectWallet: () => Promise<void>;
};

const SignerContext = createContext<SignerContextType>({} as any);

const useSigner = () => useContext(SignerContext);

export const SignerProvider = ({ children }: { children: ReactNode }) => {
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [address, setAddress] = useState<string>();
  const [loading, setLoading] = useState(false);

 //const dispatch = useDispatch();

  useEffect(() => {
    const web3modal = new Web3Modal();
    if (web3modal.cachedProvider) connectWallet();
    window.ethereum.on("accountsChanged", connectWallet);
  }, []);


  const connectWallet = async () => {
      setLoading(true);
      // dispatch({
      //   type: types.orderTypes.UPDATED_LOADING,
      //   data:{
      //     isLoading: true
      //   }
      // })
      try {
          const web3modal = new Web3Modal({ cacheProvider: true });
          const instance = await web3modal.connect();
          const provider = new Web3Provider(instance);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const balance = await signer.getBalance();
          const balanceToEth = BigNumber.from(balance)
          console.log("balaccetoEth", balanceToEth)
          
          setSigner(signer);
          setAddress(address);
          // dispatch ({
          //   type: types.userTypes.UPDATED_USER_DATA,
          //   data: {
          //     address: address,
          //     balance: balanceToEth,
          //     isConnect: true
          //   }
          // })
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    //     dispatch({
    //       type: types.orderTypes.UPDATED_LOADING,
    //       data:{
    //         isLoading: false
    //       }
    //     })
    };

    const contextValue = { signer, address, loading, connectWallet };

  return (
    <SignerContext.Provider value={contextValue}>
      {children}
    </SignerContext.Provider>
  );
};



export default useSigner;