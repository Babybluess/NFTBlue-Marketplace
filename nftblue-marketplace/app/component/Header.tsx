'use client'
import React, {useState} from 'react'
import Img from 'next/image'

function Header() {
  return (
    <div className='h-[90%] w-[95%] flex flex-col justify-center items-center'>
      <div className=' flex '>
        <div className=' animate-wiggle w-[450px] h-[400px]'>
          <Img src={"/images/The_Future_of_Vinyl_Toys_____SET_HEAD__NFT_from_The_Given.png"} alt='' fill></Img>
        </div>
        <div className=' h-[100%] w-[45%] flex flex-col justify-center items-center'>
          <div className='text-white flex flex-col gap-8 text-center justify-center items-center'>
            <span className='font-bold text-5xl'>DISCOVERY AMAZING NFT COLLECTION</span>
            <p className=' text-[#AAAAAA] w-[70%]'>We provide digital assets that represent ownership of goods or unique assets stored on the blockchain, which is a distributed ledger technology that allows</p>
            <div id="input-container" className='text-black animate-bounce'>
              <input type="text" name="text" id="input" placeholder="Search something..."/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" id="icon"><g stroke-width="4" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect fill="white" height="24" width="24"></rect> <path fill="" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
            </div>
          </div>
        </div>
        <div className=' animate-wiggle w-[450px] h-[450px]'>
         <Img src={"/images/Embacy_NFT_Collection__3.png"} alt='' fill></Img>
        </div>
      </div>
      <div className=' w-[30%] flex text-white items-center'>
           <p className=' flex border-r-2 border-white w-[40%]'>CREATIVE BY</p>
           <div className=' flex gap-2 justify-end w-[50%] items-center'>
              <div className=' w-12 h-12'>
                <img src="/images/Shark-logo.png" alt="" />
              </div>
              <span>TEAM 22BLUESC</span>
           </div>
      </div>
  </div>
  )
}

export default Header