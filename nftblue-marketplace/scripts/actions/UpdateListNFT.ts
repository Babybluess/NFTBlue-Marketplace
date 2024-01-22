import { NFTInfor } from "@/src/utils/NFTModal"

export const updateListNFT = (nft: any) => ({
    type: 'UPDATELISTNFT',
    NFT: nft
})

export const isLoadingNFT = (e: boolean) => ({
    type: 'ISLOADINGNFT',
    isLoading: e
})

