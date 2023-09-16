import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-[95%] flex justify-between text-white items-center'>
        <span className=' font-bold text-xl'>NFT&#39;Blue</span>
        <div className=' flex gap-5 font-thin'>
            <Link href={""}>OurCourse</Link>
            <Link href={""}>Marketplace</Link>
            <Link href={""}>Roadmaps</Link>
            <Link href={""}>Transaction</Link>
            <Link href={""}>Interviews</Link>
        </div>
        <div className=' bg-white text-black rounded-2xl p-3 font-semibold hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-[#75e94b]'>
            <button>Connect the wallet</button>
        </div>
    </div>
  )
}

export default Navbar