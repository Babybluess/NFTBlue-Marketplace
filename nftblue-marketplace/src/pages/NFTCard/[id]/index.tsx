'use client'
import React from 'react'
import { AbstractNFT } from '@/src/component/constants/NFT'

function NFT_Card() {
  const backClick = () =>{
		window.location.href ='/'
	}

  return (
    <div className=' px-5 w-full h-[100vh] flex-col bg-white justify-center flex'>
      <p onClick={() => backClick()} className=' hover:-translate-x-2  w-[40px] h-[40px] bg-[#E2EAB0] rounded-xl flex justify-center items-center'>&#8592;</p>
      <div className=' w-[95%] h-[90%] flex gap-10 justify-center items-center'>
        <div className=' w-[35%] h-[80%] flex shadow-xl shadow-violet-500 rounded-xl'>
          <img src="/images/abstractNFT/BlueBoy.jpg" className=' object-fill rounded-xl' alt="" />
        </div>
        <div className=' w-[60%] gap-5 flex flex-col'>
          <div className=' flex flex-col gap-1'>
            <span className=' text-5xl text-black font-semibold'>Blue Boi</span>
            <span className=' text-gray-400'>Owned by <a className=' no-underline text-blue-500' href="">Babybluesc</a></span>
          </div>
          <div className=' w-full h-[300px] bg-[#FDFDFD] rounded-xl border-[1px] border-gray-400'>
              <div className=' border-b-[1px] gap-44 border-gray-400 h-[50%] flex items-center mx-5'>
                <span className=' text-gray-600'>BALANCE: 22.0 ETH</span>
                <div className=' text-gray-600 gap-2'>
                  <span>Current price:</span>
                  <span className=' text-black text-xl font-semibold px-2'>2.0 ETH</span>
                </div>
              </div>
              <div className=' flex items-center h-[50%]'>
                <div className=' w-[50%] h-[40%] flex mx-5 bg-blue-500 rounded-xl cursor-pointer'>
                  <div className='w-[80%] border-r-[1px] h-full border-white justify-center items-center flex'>
                    <span className=' font-bold text-white'> Buy Now</span>
                  </div>
                  <div className=' w-[20%] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill='white' d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFT_Card