import * as types from '../types/types'

const initialState = {
    NFTMarketplace: [],
    isLoadingMarketplace: false
}

export const nftMarketplaceReducer = (state = initialState, action: any) =>{
    switch (action.type) {
        case 'UPDATELISTMARKETPLACE':
            return {
                ...state,
                NFTMarketplace: action.NFTMarketplace
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