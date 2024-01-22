'use client'
import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-scroll'
import Links from 'next/link'
import ConnectMatamask from '../utils/ConnectMatamask'
import 'ethers'
import 'web3'
import useSigner from '@/src/utils/ConnectWallet'
import * as types from '../../scripts/types/types'
import ConnectButton from './ConnectButton'
import { NFTList } from '../pages/My_Collection/Create_NFT/NFTModal'
import { useDispatch } from 'react-redux'
import { updateListNFT } from '@/scripts/actions/UpdateListNFT'
import { useRouter } from 'next/router'


function Navbar() {
  const {address, myNFT} = useSigner()
  const [nft, setNFTs] = useState([null])
  const dispatch = useDispatch()
  const router = useRouter()
  
  async function getNFTList() {
    const nfts = await NFTList(myNFT)
    dispatch(updateListNFT(nfts))
    setNFTs(nfts)
  }

  const handleClick = () => {
    router.push("/My_Collection")
  }

  useEffect(() => {
    getNFTList()
  },[address])

  console.log('check', nft)

  return (
    <div className='w-[95%] flex justify-between text-white items-center'>
        <span className=' font-bold text-xl'>NFT&#39;Blue</span>
        <div className=' flex gap-5 font-thin'>
            <Link to='header' smooth={true} duration={1000} className=' cursor-pointer'>OurCourse</Link>
            <Link to='nft_marketplace' smooth={true} duration={1000} className=' cursor-pointer'>Marketplace</Link>
            <Link to='roadmap' smooth={true} duration={1000} className=' cursor-pointer'>Roadmaps</Link>
            <Link to='transaction' smooth={true} duration={1000} className=' cursor-pointer'>Transaction</Link>
            <Link to='interviews' smooth={true} duration={1000} className=' cursor-pointer'>Interviews</Link>
            {
              address != undefined 
              ?
              <button onClick={() => handleClick()} className=' cursor-pointer'>Our Collection</button>
              : 
              ''
            }
        </div>
        <div className=' bg-white text-black rounded-2xl p-3 font-semibold hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-[#75e94b]'>
          <ConnectButton/>
          {/* <ConnectMatamask/> */}
        </div>
    </div>
  )
}

export default Navbar