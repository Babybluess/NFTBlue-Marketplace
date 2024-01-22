import axios from 'axios';
import { utils } from 'web3';

export const NFTList = async(myNFT) => {

    const data = []
    if(myNFT !== undefined) {
        const nft = await myNFT.getTokensOwnedByMe() 
        nft.forEach(async(element) => {
                const link = await myNFT.tokenURI(utils.hexToNumberString(element._hex))
                if(link !== '') {
                    const nftData = await axios.get(`https://${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${link}`)
                    data.push(nftData.data)
                 }})
            }
    return data
  }