
import React, {useContext, useEffect, useState} from 'react'
import Link  from 'next/link'
import { AbstractNFT } from '../../component/constants/NFT';
import 'ethers'
import Layout from '../../component/Layout'
import UpdateImage from '@/src/component/UpdateImage';
import useSigner from '@/src/utils/ConnectWallet';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MyNFTList from './components/MyNFTList';
import { useRouter } from 'next/router';
import { UpdateSigner } from '@/scripts/actions/UpdateSigner';

function MyCollection() {
  const signerData = useSelector((state) => state.signerReducer.signerList)
  const accountImg = useSelector((state) => state.signerReducer.accountImage)
  const backgroundImg = useSelector((state) => state.signerReducer.backgroundImage)
  const nftList = useSelector((state) => state.nftListReducer.myNFT)
  const router = useRouter()
  const dispatch = useDispatch()

    const { address, myNFT, NFTMarketplace} = useSigner()
    const signerAddress = `${address?.substring(0,8)}...${address?.substring(35)}`

    console.log('router', typeof nftList)
    
    console.log('nftList', NFTMarketplace)

  if(accountImg !== '' && backgroundImg !== '') {
    const data = {accountImg, backgroundImg}
    dispatch(UpdateSigner( data, address))
  }

  console.log('account', accountImg)
  console.log('background', backgroundImg)
  console.log('signerData', signerData)

  const backClick = () =>{
    router.back()
	}  


  return (
      <div className=' w-[99vw] h-[900px] gap-20 flex flex-col bg-white'>
        <p onClick={() => backClick()} className=' absolute left-5 top-5 hover:-translate-x-2  w-[40px] h-[40px] bg-[#E2EAB0] rounded-xl flex justify-center items-center'>&#8592;</p>
        <div className=' w-full h-[500px] bg-white' >
            <UpdateImage name='background' isUpLoad={true}/>
            <div className=' flex w-full h-[250px] max-sm:pt-10 gap-2 items-end px-[10%] -translate-y-40'>
              <UpdateImage name='' isUpLoad={true}/>
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