import React from 'react'

function Roadmap() {
  return (
    <div id='roadmap' className=' bg-black opacity-90 w-[100%] h-[100%] justify-center items-center flex'>
        <div className=' w-[90%] flex flex-col gap-5 justify-center items-center text-white'>
          <span className=' text-5xl font-bold'>ROADMAPS</span>
          <p className=' w-[40%] text-gray-400 text-center'>A strategic plan that goals, and milestones for an NFT project before introducing it to the marketplace</p>
          <div className='w-[70%] flex justify-between mt-16'>
            <div className=' w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#1E1F28]'>
                <span >1.</span>
            </div>
            <div className=' w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#1E1F28]'>
                <span >2.</span>
            </div>
            <div className='w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#3D25FE]'>
                <span >3.</span>
            </div>
            <div className=' w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#1E1F28]'>
                <span >4.</span>
            </div>
          </div>
          <div className=' w-[90%] flex gap-2 justify-between'>
               <div className='w-[25%] px-3 py-5 rounded-xl flex flex-col gap-5 justify-center items-center bg-[#1E1F28]'>
                 <span className=' font-semibold text-lg'>Membership Launch</span>
                 <div className=' flex flex-col gap-2 w-[90%] text-sm text-gray-300 rounded-xl p-5'>
                   <div className='flex gap-2'>
                        <div className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Many thing the benefits of membership.</p>
                   </div>
                   <div className=' flex gap-2'>
                        <div  className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Communicate the details of the membership program.</p>
                   </div>
                   <div className=' flex gap-2'>
                        <div className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Many Discount tp get special deals.</p>
                   </div>
                 </div>
               </div>
               <div className='w-[25%] px-3 py-5 rounded-xl flex flex-col gap-5 justify-center items-center bg-[#1E1F28]'>
                 <span className=' font-semibold text-lg'>Adventure Launch</span>
                 <div className=' flex flex-col gap-2 w-[90%] text-sm text-gray-300 rounded-xl p-5'>
                   <div className='flex gap-2'>
                        <div className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Launch of NFT lottery promotion for Citizens.</p>
                   </div>
                   <div className=' flex gap-2'>
                        <div  className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Promotion with advertising to reach the right Citizens.</p>
                   </div>
                   <div className=' flex gap-2'>
                        <div className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Many Discount tp get special deals.</p>
                   </div>
                 </div>
               </div>
               <div className='w-[25%] px-3 py-5 rounded-xl flex flex-col gap-5 justify-center items-center bg-[#3D25FE]'>
                 <span className=' font-semibold text-lg'>Land Launch</span>
                 <div className=' flex flex-col gap-2 w-[90%] text-sm text-gray-300 rounded-xl p-5'>
                   <div className='flex gap-2'>
                        <div className='px-1 rounded-full bg-[#1E1F28]'></div>
                        <p> Expanding the Land system and user experience.</p>
                   </div>
                   <div className=' flex gap-2'>
                        <div  className='px-1 rounded-full bg-[#1E1F28]'></div>
                        <p> Expanding market reach with the community.</p>
                   </div>
                   <div className=' flex gap-2'>
                        <div className='px-1 rounded-full bg-[#1E1F28]'></div>
                        <p> Enhance the user experience with many benefits.</p>
                   </div>
                 </div>
               </div>
               <div className='w-[25%] px-3 py-5 rounded-xl flex flex-col gap-5 justify-center items-center bg-[#1E1F28]'>
                 <span className=' font-semibold text-lg'>Expansion to Citizen World</span>
                 <div className=' flex flex-col gap-2 w-[90%] text-sm text-gray-300 rounded-xl p-5'>
                   <div className='flex gap-2'>
                        <div className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Expand Citizen services with 3rd parties.</p>
                   </div>
                   <div className=' flex gap-2'>
                        <div  className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Introduce the affiliate system.</p>
                   </div>
                   <div className=' flex gap-2'>
                        <div className='px-1 rounded-full bg-[#3D25FE]'></div>
                        <p> Expanding services with many advantages.</p>
                   </div>
                 </div>
               </div>
           </div>
         </div>
     </div>
  )
}

export default Roadmap