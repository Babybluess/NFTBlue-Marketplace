import { Brand, Footer, Header, Interviews, NFT_Marketplace, NavBar, Roadmap, Transaction} from '../../component'
import { useDispatch, useSelector } from 'react-redux';
import { MarketplaceList } from '@/src/pages/My_Collection/Create_NFT/NFTModal';
import { useEffect, useState } from 'react';
import useSigner from '@/src/utils/ConnectWallet';
import { UpdateListMarketplace } from '@/scripts/actions/UpdateListMarketplace';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { isLoadingMarketplace } from '@/scripts/actions/UpdateListMarketplace';

const HomePage = () => {

  return (
      <div className=' min-h-screen w-full bg-black'>
        <div className=' h-[100px] border-b-2 border-gray-500 flex justify-center items-center'>
          <NavBar/>
        </div>
        <div className=' h-[650px] flex justify-center items-center'>
          <Header/>
        </div>
        <div id='brand-container' className=' h-[200px] flex justify-center items-center'>
          <Brand/>
        </div>
        <div className=' min-h-[850px] py-10 flex justify-center items-center'>
          <NFT_Marketplace/>
        </div>
        <div id='brand-container' className=' h-[650px] flex justify-center items-center'>
          <Roadmap/>
        </div>
        <div className=' min-h-[300px] flex justify-center items-center'>
          <Transaction/>
        </div>
        <div className=' h-[650px] flex justify-center items-center'>
          <Interviews></Interviews>
        </div>
        <div className=' h-[250px] border-t-2 border-white justify-center items-center flex'>
          <Footer></Footer>
        </div>
      </div>
  )
}

export default HomePage;