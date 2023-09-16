'use client';
import { GorillaNFT, MonkeyNFT, ArtNFT, AbstractNFT } from '@/app/component/constants/NFT';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Link from 'next/link';

function NFT_Marketplace() {
const [NFTdata,setData] = useState(AbstractNFT)
const [loading, isloading] = useState(false)

useEffect(() => {
    setTimeout(() => {
        isloading(false)
        
      }, 1000);
},NFTdata)

const changeNFT = (index:number) => {
    if(index == 1) {
        const data = [...AbstractNFT]
        setData(data)
    } else if (index == 2) {
         const data = [...ArtNFT]
        setData(data)
    } else if (index == 3) {
        const data = [...AbstractNFT]
        setData(data)
    } else if (index == 4) {
        const data = [...GorillaNFT]
        setData(data)
    } else if(index == 5) {
        const data = [...MonkeyNFT]
        setData(data)
    }
}

  return (
    <div className=' w-[90%] flex flex-col gap-10 justify-center items-center text-white'>
        <div className=' w-[100%] flex justify-between'>
            <div className='flex w-[32%] justify-center items-center'>
                <p className=' text-3xl font-bold'>POPULAR COLLECTION NFT DIGITAL ART</p>
                <div className=' w-[150px] h-[100px] justify-start flex items-start animate-pulse'>
                    <img src='/images/Uranus_Crypto_Card_-_Rarible___OpenSea-removebg-preview.png' alt='' className=' object-cover'/>
                </div>
            </div>
            <div className=' w-[30%]'>
                <p className=' py-5 text-gray-400'>We have some of the most popular digital assets that can be recommended for you, which you also get for your new collection.</p>
                <button className=' text-violet-300'>See detail &#8594;</button>
            </div>
        </div>
        <div className=' justify-start flex w-[100%]'> 
            <div className=' flex gap-5'>
                <button onClick={() => changeNFT(1)} className=' p-2 border-2 border-[#AAA1B6] rounded-xl'>All</button>
                <button onClick={() => changeNFT(2)} className=' p-2 border-2 border-[#AAA1B6] rounded-xl'>Art</button>
                <button onClick={() => changeNFT(3)} className=' p-2 border-2 border-[#AAA1B6] rounded-xl'>Abstract</button>
                <button onClick={() => changeNFT(4)} className=' p-2 border-2 border-[#AAA1B6] rounded-xl'>Gorilla</button>
                <button onClick={() => changeNFT(5)} className=' p-2 border-2 border-[#AAA1B6] rounded-xl'>Monkey</button>
            </div>
        </div>
        <div className=' w-[100%] flex flex-wrap gap-[50px]'>
        { 
            NFTdata.map((item)=> (
                <div className=' w-[300px] gap-4 h-[450px] bg-[#1E1F28] rounded-lg justify-center items-center flex flex-col text-white'>
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
                            <Link href={`/NFTCard/${item.id}`} className=' p-3 bg-blue-600 rounded-full'>Place a bid</Link>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default NFT_Marketplace