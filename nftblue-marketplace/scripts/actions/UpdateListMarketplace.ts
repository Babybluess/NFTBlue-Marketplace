import * as types from '../types/types'

export const UpdateListMarketplace = (nft: any[]) => ({
    type: 'UPDATELISTMARKETPLACE',
    NFTMarketplace: nft
}
)
export const UpdateTransactionList = (nft: any[]) => ({
    type: 'UPDATETRANSACTIONLIST',
    transaction: nft
})

export const isLoadingMarketplace = (e: boolean) => ({
    type: 'ISLOADING',
    isLoading: e
})


