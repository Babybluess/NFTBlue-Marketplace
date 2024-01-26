import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import CircularProgress from '@mui/material-next/CircularProgress';
import Link from 'next/link';

function MarketList({NFTdata}) {
     const defaultImg = "data:image/jpeg;base64,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"

  return (
    <>
        <InfiniteScroll
            dataLength={NFTdata.length}
             loader={<CircularProgress color="tertiary" />}
             className=' w-[100%] flex flex-wrap gap-[50px]'
            >
                { 
                    NFTdata.map((item)=> (
                        <div className=' w-[300px] gap-4 h-[450px] bg-[#1E1F28] rounded-lg justify-center items-center flex flex-col text-white shadow-inner shadow-indigo-300'>
                            <div className=' w-[90%] h-[65%]'>
                                <img src={item.data.imgUrl} alt="" className='shadow-xl shadow-indigo-500/50 w-[100%] h-[100%] rounded-lg object-cover' />
                            </div>
                            <div className=' w-[90%] flex flex-col gap-2 '>
                                <span className=' text-xl font-medium'>{item.data.name}</span>
                                <div className=' flex justify-between w-[100%]'>
                                            {
                                                item.data.rareLevel === "Limited"
                                                && 
                                                <div className=' flex'>
                                                    <span className=' p-1 bg-yellow-500 rounded-xl'>{item.data.rareLevel}</span>
                                                </div>
                                            }
                                            {
                                                item.data.rareLevel === "Rare"
                                                && <span className=' p-1 bg-violet-700 rounded-xl'>{item.data.rareLevel}</span>
                                            }
                                            {
                                                item.data.rareLevel === "Common"
                                                && <span className=' p-1 bg-gray-500 rounded-xl'>{item.data.rareLevel}</span>
                                            }
                                            {
                                                item.data.rareLevel === ""
                                                && <span className=' p-1 rounded-3xl'></span>
                                            }
                                    <div className=' flex gap-1'>
                                        <svg height="25" preserveAspectRatio="xMidYMid" viewBox="0 0 256 417" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m127.9611 0-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fill="#343434"/><path d="m127.962 0-127.962 212.32 127.962 75.639v-133.801z" fill="#8c8c8c"/><path d="m127.9611 312.1866-1.575 1.92v98.199l1.575 4.601 128.038-180.32z" fill="#3c3c3b"/><path d="m127.962 416.9052v-104.72l-127.962-75.6z" fill="#8c8c8c"/><path d="m127.9611 287.9577 127.96-75.637-127.96-58.162z" fill="#141414"/><path d="m.0009 212.3208 127.96 75.637v-133.799z" fill="#393939"/></svg>
                                        <span id='' className=' text-white text-lg font-medium'>{item.price} ETH</span>
                                    </div>
                                </div>
                                <div className=' flex justify-between items-center w-[100%]'>
                                    <div className=' flex gap-2 justify-center items-center'>
                                        <img className=' rounded-full w-[30px]' src={defaultImg} alt="" />
                                        <span className=' text-sm'>{item.seller}</span>
                                    </div>
                                    <Link href={`/NFTCard/${item.id}`} className=' p-3 bg-blue-600 rounded-full'>Place a bid</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
         </InfiniteScroll>
    </>
  )
}

export default MarketList