'use client'
// import { Brand, Footer, Header, Interviews, NFT_Marketplace, NavBar, Roadmap, Transaction} from './component'
// import { SignerProvider } from '@/utils/connectWallet'

// import layout from './layout'

// export default function Home() {
//   return (
//     <div className=' min-h-screen w-full bg-black'>
//       <div className=' h-[100px] border-b-2 border-gray-500 flex justify-center items-center'>
//         <NavBar/>
//       </div>
//       <div className=' h-[650px] flex justify-center items-center'>
//         <Header/>
//       </div>
//       <div id='brand-container' className=' h-[200px] flex justify-center items-center'>
//         <Brand/>
//       </div>
//       <div className=' h-[1400px] flex justify-center items-center'>
//         <NFT_Marketplace/>
//       </div>
//       <div id='brand-container' className=' h-[650px] flex justify-center items-center'>
//         <Roadmap/>
//       </div>
//       <div className=' min-h-[300px] flex justify-center items-center'>
//         <Transaction/>
//       </div>
//       <div className=' h-[650px] flex justify-center items-center'>
//         <Interviews></Interviews>
//       </div>
//       <div className=' h-[250px] border-t-2 border-white justify-center items-center flex'>
//         <Footer></Footer>
//       </div>
//     </div>
//   )
// }



///part 2

// import { wrapper } from '@/scripts/stores/store'
// import { NextPage } from 'next';
// import { AppProps } from 'next/app';
// //import Home from './component/index'
// import { useRouter } from 'next/navigation'
// import useSigner, { SignerProvider } from '@/utils/connectWallet';
// import page from './My_Collection/Create_NFT/page';
// import Layout from '../component/Layout';
// import RootLayout from './layout';
// import HomePage from '../modules/Homepage';

// export default function MyApp({Component, pageProps}: AppProps) {
//   // const router = useRouter()
//  // const Wrapper = wrapper.useWrappedStore()

//   return (
//       // <button type='button' onClick={() => router.push('') }>
//           // <Home/>
//       // </button>
//       // <Component {...Home}></Component>
//         // <Layout>
//         //   <SignerProvider>
//         // <div>
//           // <Component {...pageProps}/>

//         // </div>
//         //   {/* </SignerProvider>
//         // </Layout> */}
//         <div>
//           <HomePage/>
//         </div>
//   );
// }



// part 3
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../component/Layout'
import { SignerProvider } from '@/src/utils/ConnectWallet'
 
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SignerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SignerProvider>
  )
}

export default MyApp