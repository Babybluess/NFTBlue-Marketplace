import * as types from '../types/types'

const initialState = {
    NFTMarketplace: [],
    transactionList: [],
    isLoadingMarketplace: false
}

export const nftMarketplaceReducer = (state = initialState, action: any) =>{
    switch (action.type) {
        case 'UPDATELISTMARKETPLACE':
            return {
                ...state,
                NFTMarketplace: action.NFTMarketplace
            }
        case 'UPDATETRANSACTIONLIST':
            return {
                ...state,
                transactionList: action.transaction
            }
        case "ISLOADINGMARKETPACE": 
            return {
                ...state,
                isLoadingMarketplace: action.isLoading
            }
            default: 
                return state;
    }
}