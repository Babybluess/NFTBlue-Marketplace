'use client'
import React, {useContext} from 'react'
import Link  from 'next/link'
import { AbstractNFT } from '../../component/constants/NFT';
import Web3 from 'web3';
import 'ethers'
import Layout from '../../component/Layout'


const MyCollection = () => {
  const backClick = () =>{
		window.location.href ='/'
	}
  return (
      <div className=' w-[99vw] h-[900px] flex flex-col bg-white'>
        <p onClick={() => backClick()} className=' absolute left-5 top-5 hover:-translate-x-2  w-[40px] h-[40px] bg-[#E2EAB0] rounded-xl flex justify-center items-center'>&#8592;</p>
        <div className=' w-full h-[500px] bg-white' >
            <img src="/images/monkey-nft-v7.jpg" className=' w-full h-full bg-no-repeat bg-center object-cover' alt="" />
            <div className=' flex w-[200px] h-[200px] rounded-lg translate-x-32 -translate-y-32 border-[5px] border-[#2FAEAC]'>
              <img className=' object-cover h-full rounded-sm' src="/images/desktop-wallpaper-nft-monkey.jpg" alt="" />
              <span className=' text-black font-bold text-5xl px-[20px] flex items-end'></span>
            </div>
        </div>
        <div className='w-full px-[5%] py-[8%] flex flex-col gap-20 justify-center items-center bg-white'>
          <div className=' text-black font-semibold w-[100%] justify-between flex items-center'>
            <span className='text-3xl' >My Collection</span>
            <Link href='/My_Collection/Create_NFT' className='p-3 border-2 rounded-md hover:bg-gradient-to-r hover:from-[#ddd6f3] hover:to-[#faaca8]'>Create NFT</Link>
          </div>
          <div className=' w-[100%] flex flex-wrap gap-[50px]'>
          { 
              AbstractNFT.map((item)=> (
                  <div className=' w-[300px] gap-4 h-[450px] bg-[#1E1F28] rounded-lg justify-center items-center flex flex-col text-white shadow-inner shadow-indigo-300'>
                      <div className=' w-[90%] h-[65%]'>
                          <img src={item.avatar} alt="" className='shadow-xl shadow-indigo-500/50 w-[100%] h-[100%] rounded-lg object-cover' />
                      </div>
                      <div className=' w-[90%] flex flex-col gap-2 '>
                          <span className=' text-xl font-medium'>{item.name}</span>
                          <div className=' flex justify-between w-[100%]'>
                              {
                                  item.id == 27 
                                  ? <span className=' p-1 bg-yellow-500 rounded-3xl'>Limited</span>
                                  :<span className=' text-gray-500'>Current bid</span>
                              }
                              <div className=' flex gap-1'>
                                  <svg height="25" preserveAspectRatio="xMidYMid" viewBox="0 0 256 417" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m127.9611 0-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fill="#343434"/><path d="m127.962 0-127.962 212.32 127.962 75.639v-133.801z" fill="#8c8c8c"/><path d="m127.9611 312.1866-1.575 1.92v98.199l1.575 4.601 128.038-180.32z" fill="#3c3c3b"/><path d="m127.962 416.9052v-104.72l-127.962-75.6z" fill="#8c8c8c"/><path d="m127.9611 287.9577 127.96-75.637-127.96-58.162z" fill="#141414"/><path d="m.0009 212.3208 127.96 75.637v-133.799z" fill="#393939"/></svg>
                                  <span id='' className=' text-lg font-medium'>{item.cost} ETH</span>
                              </div>
                          </div>
                          <div className=' flex justify-between items-center w-[100%]'>
                              <div className=' flex gap-2 justify-center items-center'>
                                  <img className=' rounded-full w-[30px]' src={item.authorImg} alt="" />
                                  <span>{item.author}</span>
                              </div>
                              <Link href={`/NFTCard/${item.id}`} className=' p-3 bg-blue-600 rounded-full'>Sell</Link>
                          </div>
                      </div>
                  </div>
              ))
          }
          </div>
        </div>
      </div>
  )
}

export default MyCollection;