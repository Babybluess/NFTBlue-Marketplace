'use client'
import React, {useState} from 'react'
import Select, { SingleValue } from 'react-select'
import Link from 'next/link'
import Layout from '@/src/component/Layout'

function page() {
  const backClick = () =>{
		window.location.href ='/My_Collection'
	}

  const NFTTypeoptions = [
    {value : 'artNFT' ,  label: 'ArtNFT'},
    {value : 'abstractNFT' ,  label: 'AbstractNFT'},
    {value : 'gorillaNFT' ,  label: 'GorillaNFT'},
    {value : 'monkeyNFT' ,  label: 'MonkeyNFT'}
  ]

  const rareLevels = [
    {value: 'Limited', label:'Limited' },
    {value: 'Rare', label:'Rare'},
    {value: 'Common', label:'Common'}
  ]

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [selected, setSelected] = useState('')

  const updateURL = (e:any) => {
    setUrl(URL.createObjectURL(e.target.files[0]))
  }

  const updateName = (e:any) => {
    setName(e.target.value);
  }
  console.log(name);

  const rareSelected = (e:any) => {
    setSelected(e);
  }

  return (
    <Layout>

      <div className='w-[100vw] min-h-[1200px] flex flex-col justify-center items-center gap-16 bg-black'>
          <div className=' flex justify-start items-center gap-5 w-[90%]'>
            <p onClick={() => backClick()} className=' hover:-translate-x-2  w-[40px] h-[40px] bg-[#E2EAB0] rounded-xl flex justify-center items-center'>&#8592;</p>
            <span className=' text-white font-bold text-3xl'>Create NFT Item</span>
          </div>
          <div className=' w-[90%] flex gap-44'>
            <section className=' flex flex-col gap-10'>
              <div className=' text-white flex flex-col gap-5'>
                <span className='text-xl font-semibold'>Upload your NFT</span>
                <div className=' w-[350px] h-[350px]  rounded-lg border-2 border-dotted border-gray-400 bg-gray-800 flex flex-col justify-center items-center'>
                    <input onChange={(e) => updateURL(e)} type="file" className=' w-[70%]' ></input>
                    <svg height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className=' text-white' d="m20 6.52897986v12.97202254c0 1.3807119-1.1192881 2.5-2.5 2.5h-11c-1.38071187 0-2.5-1.1192881-2.5-2.5v-15.00000002c0-1.38071188 1.11928813-2.5 2.5-2.5h8.9720225c.1327463-.00841947.2709238.03583949.3815309.14644661l4 4c.1106071.11060712.1548661.24878464.1464466.38153087zm-5-3.52797748h-8.5c-.82842712 0-1.5.67157287-1.5 1.5v15.00000002c0 .8284271.67157288 1.5 1.5 1.5h11c.8284271 0 1.5-.6715729 1.5-1.5v-12.50000002h-3.5c-.2761424 0-.5-.22385763-.5-.5zm1 .70710678v2.29289322h2.2928932zm-4 6.99899764v6.7928932c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5v-6.7928932l-2.14644661 2.1464466c-.19526215.1952621-.51184463.1952621-.70710678 0-.19526215-.1952622-.19526215-.5118446 0-.7071068l2.99999999-2.99999999c.1952622-.19526215.5118446-.19526215.7071068 0l3 2.99999999c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0z"/></svg>
                    <span className='text-gray-500'>PNG, GIF, WEBP, MP4 or MP3. Max 1GB</span>
                    <span className='text-gray-500'>Drop your NFT here or <a className=' text-gray-200'>Browse</a></span>              
                </div>
              </div>
              <div className=' flex flex-col gap-10'>
                  <div className=' flex gap-5'>
                    <div className=' flex flex-col gap-2' >
                      <label htmlFor="" className=' text-gray-300 text-xl'>Category</label>
                      <p className='text-gray-600 text-sm'>Select the category of your NFT</p>
                      <Select options={NFTTypeoptions} placeholder='Choose NFT Type' styles={{control: (base, state) => ({
                        ...base,
                        borderColor: state.isFocused ? 'grey' : 'gray',
                      })}} className='w-[350px]'/>
                    </div>
                    <div className=' flex flex-col gap-2' >
                      <label htmlFor="" className=' text-gray-300 text-xl'>Rare Level</label>
                      <p className='text-gray-600 text-sm'>Select the category of your NFT</p>
                      <Select onChange={(e) => rareSelected(e?.value)} options={rareLevels} placeholder='Choose Rare NFT Level' styles={{control: (base, state) => ({
                        ...base,
                        borderColor: state.isFocused ? 'grey' : 'gray',
                      })}} className='w-[350px]'/>
                    </div>
                  </div>
                  <div className=' flex flex-col gap-2'>
                    <label htmlFor="" className=' text-gray-300 text-xl'>Name</label>
                    <p className='text-gray-600 text-sm'>Enter the name of your NFT</p>
                    <input onChange={(e) => updateName(e)} type="text" placeholder='Enter the name of your NFT' className=' text-white bg-transparent border-[1px] px-2 h-[50px] w-[350px] valid:border-[#1a73e8] rounded-md' />
                  </div>
                  <div className=' flex flex-col gap-2'>
                    <label htmlFor="" className=' text-gray-300 text-xl'>Description</label>
                    <p className='text-gray-600 text-sm'>The description will be included on the Item's detail page.</p>
                    <div id="input-group">
                        <input required type='text' id="inputCreate"/>
                        <label id="user-label">Enter details about the product</label>
                      </div>
                  </div>
              </div>
            </section>
            <section className=' w-[550px] h-[500px] rounded-md flex justify-center items-center shadow-inner shadow-indigo-300'>
            <div className=' w-[300px] gap-4 h-[450px] bg-[#1E1F28] rounded-lg justify-center items-center flex flex-col text-white shadow-inner shadow-indigo-600'>
                      <div className=' w-[90%] h-[65%]'>
                          <img src={url} alt="" className='shadow-xl shadow-indigo-500/50 w-[100%] h-[100%] rounded-lg object-cover' />
                      </div>
                      <div className=' w-[90%] flex flex-col gap-2 '>
                          <span className=' text-xl font-medium'>{name}</span>
                          <div className=' flex justify-between w-[100%]'>
                              {
                                  selected === "Limited"
                                  && <span className=' p-1 bg-yellow-500 rounded-xl'>{selected}</span>
                              }
                              {
                                  selected === "Rare"
                                  && <span className=' p-1 bg-violet-700 rounded-xl'>{selected}</span>
                              }
                              {
                                  selected === "Common"
                                  && <span className=' p-1 bg-gray-500 rounded-xl'>{selected}</span>
                              }
                              {
                                  selected === ""
                                  && <span className=' p-1 rounded-3xl'></span>
                              }
                              <div className=' flex gap-1'>
                                  <svg height="25" preserveAspectRatio="xMidYMid" viewBox="0 0 256 417" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m127.9611 0-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fill="#343434"/><path d="m127.962 0-127.962 212.32 127.962 75.639v-133.801z" fill="#8c8c8c"/><path d="m127.9611 312.1866-1.575 1.92v98.199l1.575 4.601 128.038-180.32z" fill="#3c3c3b"/><path d="m127.962 416.9052v-104.72l-127.962-75.6z" fill="#8c8c8c"/><path d="m127.9611 287.9577 127.96-75.637-127.96-58.162z" fill="#141414"/><path d="m.0009 212.3208 127.96 75.637v-133.799z" fill="#393939"/></svg>
                                  <span id='' className=' text-lg font-medium'>0 ETH</span>
                              </div>
                          </div>
                          <div className=' flex justify-between items-center w-[100%]'>
                              <div className=' flex gap-2 justify-center items-center'>
                                  <img className=' rounded-3xl w-[30px] h-[30px] object-cover' src={'/images/desktop-wallpaper-nft-monkey.jpg'} alt="" />
                                  <span>You</span>
                              </div>
                              <Link href={''} className=' p-2 bg-blue-600 rounded-xl'>Sell</Link>
                          </div>
                      </div>
                  </div>
            </section>
          </div>
      </div>
    </Layout>
  )
}

export default page