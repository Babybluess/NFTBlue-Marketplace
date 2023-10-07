import React from 'react'
import { AbstractNFT } from './constants/NFT'

function Interviews() {
  const data = AbstractNFT
  
  return (
    <div id='interviews' className=' w-[90%] flex flex-col gap-10 justify-center items-center text-white'>
        <span className=' text-5xl font-bold'>INTERVIEWS</span>
        <p className=' text-sm text-gray-400 w-[40%]'>Get in-depth information your favorite artists, personalities, and leaders in the blockchain space, and you can watch and learn demo videos from artists.</p>
        <div className=' w-[100%] flex justify-center items-center gap-16'>
            <div className=' w-[50%] h-[40%] flex justify-center items-center'>
              <video controls className=" rounded-lg">
                <source
                  src="/video/Introducing NFTify_ The Leading No-Code NFT Marketplace Solution.mp4"
                  type="video/mp4"
                />
					    </video>
            </div>
            <div className=' w-[40%] grid grid-cols-2 gap-8 justify-center items-center'>
              {
                data.map((item) => (
                  <div className=' flex gap-2 justify-end items-center w-[80%]'>
                      <div className=' flex justify-center items-center border-2 rounded-full border-white'>
                        <img className=' rounded-full w-[50px]' src={item.authorImg} alt="" />
                      </div>
                      <div className=' flex flex-col justify-between'>
                        <span className=''>{item.author}</span>
                        <p className=' text-[8px]'>Collection of 28 items</p>
                      </div>
                  </div>
                ))
              }
              <div className=' flex justify-end items-end w-[500px]'>
                <button className=' text-violet-300'>See detail &#8594;</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Interviews