
import React, {useContext, useEffect, useState} from 'react'
import Link  from 'next/link'
import { AbstractNFT } from '../../component/constants/NFT';
import 'ethers'
import Layout from '../../component/Layout'
import UpdateImage from '@/src/component/UpdateImage';
import useSigner from '@/src/utils/ConnectWallet';
import { useSelector } from 'react-redux';
import { NFTList } from './Create_NFT/NFTModal';
import { useDispatch } from 'react-redux';
import { updateListNFT } from '@/scripts/actions/UpdateListNFT';
import CircularProgress from '@mui/material-next/CircularProgress';
import MyNFTList from './components/MyNFTList';
import { useRouter } from 'next/router';
import { NFTInfor } from '@/src/utils/NFTModal';


function MyCollection() {

  const [nft, setNFTs] = useState([null])
  const nftList = useSelector((state) => state.nftListReducer.myNFT)
  const router = useRouter()

    const { address, myNFT, NFTMarketplace} = useSigner()
    const signerAddress = `${address?.substring(0,8)}...${address?.substring(35)}`

    console.log('router', typeof nftList)
    
    console.log('nftList', NFTMarketplace)

  const backClick = () =>{
    router.back()
	}  


  return (
      <div className=' w-[99vw] h-[900px] gap-20 flex flex-col bg-white'>
        <p onClick={() => backClick()} className=' absolute left-5 top-5 hover:-translate-x-2  w-[40px] h-[40px] bg-[#E2EAB0] rounded-xl flex justify-center items-center'>&#8592;</p>
        <div className=' w-full h-[500px] bg-white' >
            <UpdateImage name='bg'/>
            <div className=' flex w-full h-[250px] max-sm:pt-10 gap-2 items-end px-[10%] -translate-y-40'>
              <UpdateImage name=''/>
              <div className=' h-[50px] flex justify-center items-center rounded-xl bg-gradient-to-br from-[#E55D87] to-[#5FC3E4]'>
                  <span className=' text-black font-bold text-3xl max-sm:text-sm px-[10px] flex items-end'>{signerAddress}</span>
              </div>
            </div>
        </div>
        <div className='w-full px-[5%] py-[8%] flex flex-col gap-20 justify-center items-center bg-white'>
          <div className=' text-black font-semibold w-[100%] justify-between flex items-center'>
            <span className='text-3xl' >My Collection</span>
            <Link href='/My_Collection/Create_NFT' className='p-3 border-2 rounded-md hover:bg-gradient-to-r hover:from-[#ddd6f3] hover:to-[#faaca8]'>Create NFT</Link>
          </div>
          <div className='w-[100%] flex flex-wrap gap-[50px]'>
                <MyNFTList nftList={nftList} nftMarketplace={NFTMarketplace} myNFT={myNFT} signerAddress={signerAddress} address={address}/>
          </div>
        </div>
      </div>
  )
}

export default MyCollection