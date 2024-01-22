import React from "react";

const initialState = {
    myNFT: [],
    isLoadingNFT: true
}

const nftListReducer = (state=initialState, action:any) => {
    switch (action.type) {
        case "UPDATELISTNFT":
            return {
                ...state,
                myNFT: action.NFT
            }
        case "ISLOADINGNFT": 
            return {
                ...state,
                isLoadingNFT: action.isLoading
            }
        default: 
          return state
    }
} 

export default nftListReducer