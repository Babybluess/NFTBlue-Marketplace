'use client'

// part 3
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../component/Layout'
import { SignerProvider } from '@/src/utils/ConnectWallet'
import { Provider } from 'react-redux'
import myStore from '@/scripts/stores/store' 

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SignerProvider>
      <Provider store={myStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SignerProvider>
  )
}

export default MyApp