import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { NFTList } from '../Create_NFT/NFTModal'
import { NFTInfor } from '@/src/utils/NFTModal'
import useSigner from '@/src/utils/ConnectWallet'
 

export const getServerSideProps = (async () => {
    const {myNFT, NFTMarketplace, signer} = useSigner()
    const nfts : NFTInfor[] = await NFTList(myNFT)
    console.log('mam', nfts)
  // Pass data to the page via props
  return { props: { nfts } }
}) satisfies GetServerSideProps<{ nfts : NFTInfor[] }>