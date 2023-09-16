import React from 'react'

function Transaction() {
  return (
    <div className=' w-[90%] flex flex-col gap-10 text-white'>
        <span className=' font-bold text-5xl'>Transaction</span>
        <div className=' h-[150px] w-full bg-green-800 z-50 rounded-md justify-center items-center flex flex-col'>
            <div className='w-[95%] h-[30px] bg-white rounded-xl text-[#db2777] flex justify-between items-center px-5'>
                <p >0x3ffe6d612fb05b99362d5dc4ea0da1902e3da9f220790070e8c794dfa0d9a7e1</p>
                <p>0xcdc54fBF11F9c28E55410af0227298098719D176</p>
                <p>Blue Boy</p>
                <p>2.0 ETH</p>
            </div>
        </div>
    </div>
  )
}

export default Transaction