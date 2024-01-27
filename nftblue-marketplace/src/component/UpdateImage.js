import React, {useState} from 'react'
import { handleUpload } from '../utils/Pinata'
import useSigner from '../utils/ConnectWallet'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateAccountImg, UpdateBackgroundImg } from '@/scripts/actions/UpdateSigner'


const UpdateImage = ({name, isUpLoad}) => {
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()

    const updateURL = async(e) => {
        const hashImage = await handleUpload(address, e.target.files[0])
        const linkImage = `https://${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${hashImage}`
        console.log('link', linkImage)
        if(name === 'background') {
          dispatch(UpdateBackgroundImg(linkImage))
        } else {
          dispatch(UpdateAccountImg(linkImage))
        }
        setUrl(URL.createObjectURL(e.target.files[0]))
    }

    console.log('isUpLoad', isUpLoad)

  return (
    <>
     {
        isUpLoad == false && isUpLoad == undefined ?
           <div className={` ${name == 'background' ? 'w-full h-full' : 'rounded-lg border-[5px] border-[#2FAEAC] w-[20%] max-lg:w-[25%] max-md:w-[35%] max-sm:w-[50%] h-full'} flex flex-col gap-2 bg-gray-800  justify-center items-center`}>
                          <div className=' w-full justify-center flex items-center'>
                            <input onChange={(e) => updateURL(e)} type="file" className={` ${name == 'background' ? 'w-[10%]' : 'w-[80%]' } text-white`} ></input>
                          </div>
                          <svg height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className=' text-white fill-white' d="m20 6.52897986v12.97202254c0 1.3807119-1.1192881 2.5-2.5 2.5h-11c-1.38071187 0-2.5-1.1192881-2.5-2.5v-15.00000002c0-1.38071188 1.11928813-2.5 2.5-2.5h8.9720225c.1327463-.00841947.2709238.03583949.3815309.14644661l4 4c.1106071.11060712.1548661.24878464.1464466.38153087zm-5-3.52797748h-8.5c-.82842712 0-1.5.67157287-1.5 1.5v15.00000002c0 .8284271.67157288 1.5 1.5 1.5h11c.8284271 0 1.5-.6715729 1.5-1.5v-12.50000002h-3.5c-.2761424 0-.5-.22385763-.5-.5zm1 .70710678v2.29289322h2.2928932zm-4 6.99899764v6.7928932c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5v-6.7928932l-2.14644661 2.1464466c-.19526215.1952621-.51184463.1952621-.70710678 0-.19526215-.1952622-.19526215-.5118446 0-.7071068l2.99999999-2.99999999c.1952622-.19526215.5118446-.19526215.7071068 0l3 2.99999999c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0z"/></svg>            
          </div>
          
          :
          <>
            {
              name == "background"
              ?
              <img src={'/images/monkey-nft-v7.jpg'} alt="" className= 'w-full h-full bg-no-repeat bg-center object-cover' />
              :
              <div className='w-[20%] max-lg:w-[30%] max-md:w-[40%] max-sm:w-[50%] h-full rounded-lg border-[5px] border-[#2FAEAC]'>
                <img src={'/images/desktop-wallpaper-nft-monkey.jpg'} alt="" className={`${name == 'background' ? 'w-full h-full bg-no-repeat bg-center object-cover' : 'object-cover h-full w-full rounded-sm' }`} />
              </div>
            }
          </>
     }
    </>    
  )
}

export default UpdateImage