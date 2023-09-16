import React from 'react'
import Img from 'next/image'

function Brand() {
  return (
    <div className=' bg-black opacity-80 w-[100%] h-[100%] justify-center items-center flex'>
        <div className=' w-[90%] grid grid-cols-5 justify-center items-center'>
          <div className=' gap-1 flex justify-center items-center'>
            <div className=' w-[30px] h-[30px]'>
               <svg viewBox="0 0 226.8 226.8" xmlns="http://www.w3.org/2000/svg"><path fill="#ABB1B6" d="m113.3 53.2 43 43 24.7-24.8s-68.4-67.3-68.4-67.7l-67 67 25.1 25.1zm0 120.6-43-43-24.7 24.7s68.4 67.3 68.4 67.7l67-67-25.1-25.1zm-109.98-60.124 24.89-24.89 24.89 24.89-24.89 24.89z"/><path fill="#ABB1B6" d="m88.522 113.682 24.89-24.89 24.89 24.89-24.89 24.89zm85.198-.001 24.89-24.89 24.89 24.89-24.89 24.89z"/></svg>
            </div>
            <span className=' text-[#ABB1B6] text-2xl font-bold'>BINANCE</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className=' w-[30px] h-[30px]'>
              <svg  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#ABB1B6" d="m31.516 19.869c-2.136 8.579-10.819 13.787-19.385 11.652-8.568-2.12-13.787-10.824-11.647-19.381 2.131-8.577 10.819-13.796 19.38-11.661 8.573 2.141 13.792 10.819 11.652 19.396zm-8.464-6.15c.317-2.12-1.303-3.265-3.521-4.036l.72-2.871-1.756-.443-.697 2.813c-.459-.12-.937-.224-1.417-.333l.699-2.839-1.761-.437-.719 2.885c-.38-.089-.749-.177-1.12-.265l-2.416-.605-.469 1.881s1.303.296 1.271.312c.715.183.844.645.824 1.021l-1.969 7.895c-.099.22-.323.543-.817.417.016.025-1.281-.317-1.281-.317l-.88 2.009 2.281.568 1.239.323-.724 2.923 1.761.432.724-2.891c.479.136.937.255 1.395.365l-.676 2.869 1.76.443.724-2.921c2.989.567 5.24.343 6.188-2.365.76-2.183-.043-3.437-1.62-4.26 1.135-.261 2-1.016 2.239-2.573zm-4.016 5.63c-.536 2.187-4.208 1-5.4.703l.963-3.864c1.193.307 5.005.895 4.437 3.161zm.548-5.656c-.496 1.989-3.548.984-4.543.733l.876-3.52c.989.239 4.181.697 3.667 2.781z"/></svg>
            </div>
            <span className=' text-[#ABB1B6] text-2xl font-bold italic'>bitcoin</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className=' w-[30px] h-[30px]'>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#ABB1B6" d="m20.55 14.65c-.846-.486-1.805-.632-2.752-.666-.79-.023-1.974-.541-1.974-1.985 0-1.072.868-1.94 1.985-1.985.947-.034 1.906-.18 2.752-.666a5.018 5.018 0 0 0 1.839-6.846 5.04 5.04 0 0 0 -6.87-1.828 4.993 4.993 0 0 0 -2.504 4.343c0 .97.35 1.861.79 2.696.372.699.553 1.996-.71 2.73-.948.54-2.132.202-2.719-.745-.496-.801-1.094-1.545-1.94-2.03a5.01 5.01 0 0 0 -6.847 1.827 5.018 5.018 0 0 0 1.84 6.845 5.025 5.025 0 0 0 5.008 0c.846-.485 1.444-1.23 1.94-2.03.406-.654 1.433-1.489 2.718-.744.948.541 1.241 1.737.711 2.73-.44.823-.79 1.725-.79 2.695a5.011 5.011 0 0 0 5.007 5.009 5.011 5.011 0 0 0 5.008-5.008 4.982 4.982 0 0 0 -2.492-4.343z"/></svg>
            </div>
            <span className=' text-[#ABB1B6] text-2xl font-semibold'>ripple</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className=' w-[30px] h-[30px]'>
              <svg enable-background="new 0 0 1024 1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" fill="#ABB1B6" r="512"/><path d="m559.2 672c26.2 0 52.4-5.8 75.6-14.5l49.4 75.6c-43.6 23.3-90.2 34.9-139.6 34.9-148.3 0-258.9-98.9-258.9-256 2.9-157.1 116.4-256 261.8-256 52.4 0 90.2 11.6 130.9 32l-46.5 78.5c-23.3-8.7-49.4-14.5-75.6-14.5-87.3 0-157.1 55.3-157.1 160 0 98.9 66.9 160 160 160z" fill="#fff"/></svg>
            </div>
            <span className=' text-[#ABB1B6] text-2xl font-bold'>coinbase</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className=' w-[30px] h-[30px] justify-center items-center flex'>
              <svg enable-background="new 0 0 2217.4 1176.5" viewBox="0 0 2217.4 1176.5" xmlns="http://www.w3.org/2000/svg"><path d="m1597.5 1167.9c-695.8 87.8-1016.2-526.5-959.4-586.4 37.5-39.6 95.9-41.9 146.4-43.3 232.6-6.3 562 266 628.7 264.7 129.4-2.7 323.9-208.8 451.4-378.7 53.4-71.1 386.8-178.2 349.8 8.6-119.8 605.6-528.2 723.9-616.9 735.1zm-977.6-1159.3c695.8-87.9 1016.2 526.4 959.3 586.4-37.5 39.6-95.8 41.9-146.4 43.3-232.6 6.3-561.9-266.1-628.7-264.7-129.3 2.7-323.9 208.8-451.5 378.7-53.3 71.1-386.7 178.2-349.8-8.5 119.9-605.7 528.4-724 617.1-735.2z" fill="#ABB1B6"/></svg>
            </div>
            <span className=' text-[#ABB1B6] text-2xl'>BANANO</span>
          </div>
        </div>
    </div>
  )
}

export default Brand