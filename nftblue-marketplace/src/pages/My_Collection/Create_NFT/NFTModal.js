import axios from 'axios';
import { utils } from 'web3';
import { Alchemy, Network } from "alchemy-sdk";

export const NFTList = async(myNFT) => {

    const data = []
    if(myNFT !== undefined) {
        const nft = await myNFT.getTokensOwnedByMe()
        nft.forEach(async(element) => {
            const link = await myNFT.tokenURI(utils.hexToNumberString(element._hex))
                if(link !== '') {
                    const nftData = await axios.get(`https://${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${link}`)
                    const nft = {
                        id: utils.hexToNumberString(element._hex),
                        data: nftData.data
                    }
                    data.push(nft)
                 }})
            }
    return data
  }
export const MarketplaceList = async(NFTMarketplace) => {

    const data = []
    if(NFTMarketplace !== undefined) {
        const nft = await NFTMarketplace.fetchAvailableMarketItems() 
        nft.forEach(async(element) => {
                if(element.name !== '') {
                    const nftData = await axios.get(`https://${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${element.name}`)
                    const priceWei = utils.hexToNumberString(element.price._hex)
                    const priceEther = utils.fromWei(priceWei, 'ether');
                    const nft = {
                        id: utils.hexToNumberString(element.marketItemId._hex),
                        name: element.name,
                        data: nftData.data,
                        seller: element.seller,
                        price: priceEther
                    }
                    data.push(nft)
                }
            }
        )
    }
    return data
}


const config = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);


export const listAccountDetail = (listAccount, myNFT) => {
    const data = [];
    if(listAccount !== undefined && myNFT !== undefined) {
            listAccount.forEach(async(element) => {
                if(process.env.NEXT_PUBLIC_NFT_MARKETPLACE_ADDRESS !== undefined) {
                    // const response = await alchemy.nft.getNftsForOwner(element)
                    const responseContract = await alchemy.nft.getMintedNfts(element)
                    responseContract.nfts.forEach(async(item) => {
                        if(item.name !== '' && item.tokenUri !== undefined) {
                            const owner = await myNFT.ownerOf(item.tokenId)
                            const dataModal = {
                                owner: owner,
                                minted: item.to,
                                data: item.raw.metadata
                            }
                            data.push(dataModal)
                        }

                    })
                }
            })
    }
    return data;
}
