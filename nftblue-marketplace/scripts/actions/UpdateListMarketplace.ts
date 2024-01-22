import * as types from '../types/types'

export const UpdateListMarketplace = (nft: string) => ({
    type: 'UPDATELISTMARKETPLACE',
    NFTMarketplace: nft
})

export const isLoadingMarketplace = (e: boolean) => ({
    type: 'ISLOADING',
    isLoading: e
})