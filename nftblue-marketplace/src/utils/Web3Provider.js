// import { useContext } from "react"
// import useSigner, { SignerProvider } from "./ConnectWallet"


// export const createnft = async (_addressCFTContract, _name, _price, _type, myNFT) => {
//     try {
//         const nameNFT = await mintToken(_name);
//         const tokenID = await getTokensCreatedByMe()
//         const approveAddress = await myNFT.getApproved(tokenID)
//         const nftCreate = await createMarketItem(
//             _addressCFTContract,
//             tokenID,
//             _price,
//             _type
//         )
//         await nftCreate.wait()
//         console.log('Name', nameNFT, 'tokenID', tokenID, 'createNFT', nftCreate, 'approved', approveAddress)
//     } catch (err) {
//         console.log(err)
//     }
// }


// export const cancelMarketItem = async (
//     _nftContractAddress,
//     _marketItemId
// ) => {
//     try {
//         const cancelItem = await cancelMarketItem(_nftContractAddress, _marketItemId) 
//         console.log('cancel', cancelItem)
//     } catch (err) {
//         console.log(err)
//     }

// }

// export const buyNFT = async (
//     _nftContractAddress,
//     _marketItemId
// )  => {
//     try {
//         const cancelItem = await createMarketSale(_nftContractAddress, _marketItemId) 
//         console.log('cancel', cancelItem)
//     } catch (err) {
//         console.log(err)
//     }
// }

// export const fetchMarketItemType = async (_type) => {
//     const fetchType = await fetchMarketItemsByType(_type);
//     return fetchType
// }

// export const fetchAvailableMarketItems = async () => {
//     const fetchAva = await fetchAvailableMarketItems();
//     return fetchAva;
// }


import axios from 'axios'
import { ethers } from 'ethers'

export async function getTokenMetadataByTokenId (nftContract, tokenId) {
  try {
    const tokenUri = await nftContract.tokenURI(tokenId)
    const { data: metadata } = await axios.get(tokenUri)
    return metadata
  } catch (error) {
    console.log(error)
  }
}

export function mapAvailableMarketItems (nftContract) {
  return async (marketItem) => {
    const metadata = await getTokenMetadataByTokenId(nftContract, marketItem.tokenId)
    return mapMarketItem(marketItem, metadata)
  }
}

export function mapCreatedAndOwnedTokenIdsAsMarketItems (marketplaceContract, nftContract, account, tokenId) {
  return async () => {
    const metadata = await getTokenMetadataByTokenId(nftContract, tokenId)
    const approveAddress = await nftContract.getApproved(tokenId)
    const hasMarketApproval = approveAddress === marketplaceContract.address
    const [foundMarketItem, hasFound] = await marketplaceContract.getLatestMarketItemByTokenId(tokenId)
    const marketItem = hasFound ? foundMarketItem : {}
    return mapMarketItem(marketItem, metadata, tokenId, account, hasMarketApproval)
  }
}

export function mapMarketItem (marketItem, metadata, tokenId, account, hasMarketApproval) {
  return {
    price: marketItem.price ? ethers.utils.formatUnits(marketItem.price, 'ether') : undefined,
    tokenId: marketItem.tokenId || tokenId,
    marketItemId: marketItem.marketItemId || undefined,
    creator: marketItem.creator || account,
    seller: marketItem.seller || undefined,
    owner: marketItem.owner || account,
    sold: marketItem.sold || false,
    canceled: marketItem.canceled || false,
    image: metadata.image,
    name: metadata.name,
    description: metadata.description,
    hasMarketApproval: hasMarketApproval || false
  }
}

export async function getUniqueOwnedAndCreatedTokenIds (nftContract) {
  const nftIdsCreatedByMe = await nftContract.getTokensCreatedByMe()
  const nftIdsOwnedByMe = await nftContract.getTokensOwnedByMe()
  const myNftIds = [...nftIdsCreatedByMe, ...nftIdsOwnedByMe]
  return [...new Map(myNftIds.map((item) => [item._hex, item])).values()]
}