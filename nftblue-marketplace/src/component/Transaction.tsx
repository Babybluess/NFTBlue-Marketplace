import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Transaction() {
  const NFTList = useSelector((state:any) => state.nftMarketplaceReducer.transactionList)

  console.log('list', NFTList)

  return (
    <div id='transaction' className=' w-[90%] flex flex-col justify-center gap-10 text-white'>
        <table className="table-auto border-white ">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">NFT Image</th>
              <th scope="col" className="px-6 py-4">NFT Name</th>
              <th scope="col" className="px-6 py-4">NFT RaraLevel</th>
              <th scope="col" className="px-6 py-4">NFT Type</th>
              <th scope="col" className="px-6 py-4">Owner</th>
              <th scope="col" className="px-6 py-4">Minter</th>
            </tr>
          </thead>
          <tbody className=' rounded-xl '>
            {
              NFTList.map((item:any, index: number) => (
                    <tr key={index} className="border-[1px] border-white bg-[#D6FAE4] justify-center text-neutral-800">
                      <td className="whitespace-nowrap px-6 py-4 flex flex-col items-center"><img className=' w-14 h-16 rounded-md' src={item.data.imgUrl}/></td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">{item.data.name}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">{item.data.rareLevel}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">{item.data.type}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">{item.owner?.substring(0,8)}...{item.owner?.substring(35)}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">{item.minted?.substring(0,8)}...{item.minted?.substring(35)}</td>
                    </tr>
                  ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default Transaction