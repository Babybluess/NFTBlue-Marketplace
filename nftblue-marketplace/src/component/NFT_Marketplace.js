'use client';
import { GorillaNFT, MonkeyNFT, ArtNFT, AbstractNFT } from './constants/NFT';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MarketList from './MarketList'
import useSigner from '../utils/ConnectWallet';

function NFT_Marketplace() {
const marketplaceList = useSelector((state) => state.nftMarketplaceReducer.NFTMarketplace)
const [NFTdata,setData] = useState(marketplaceList)
const [loading, isloading] = useState(false)

const { address, myNFT, NFTMarketplace} = useSigner()

useEffect(() => {
    setTimeout(() => {
        isloading(false)
        
      }, 1000);
},NFTdata)

const changeNFT = (index) => {
    if(index == 1) {
        setData(marketplaceList)
    } else if(index == 2) {
        setData(
            marketplaceList.filter((item) => {
                return item.data.type === 'artNFT'
                } 
            )
        )
    } else if (index == 3) {
        setData(
            marketplaceList.filter((item) => {
                return item.data.type === 'abstractNFT'
                } 
            )
        )
    } else if (index == 4) {
        setData(
            marketplaceList.filter((item) => {
                return item.data.type === 'gorillaNFT'
                } 
            )
        )
    } else if(index == 5) {
        setData(
            marketplaceList.filter((item) => {
                return item.data.type === 'monkeyNFT'
                } 
            )
        )
    }
}

console.log('update data', NFTdata)
console.log(' data', marketplaceList)

  return (
    <div id='nft_marketplace' className=' w-[90%] flex flex-col gap-10 justify-center items-center text-white'>
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
            <MarketList NFTdata={NFTdata}/>
        </div>
    </div>
  )
}

export default NFT_Marketplace