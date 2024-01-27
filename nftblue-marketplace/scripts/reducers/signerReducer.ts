import React from "react";

const initialState = {
    signerList: new Map(),
    accountImage: '-',
    backgroundImage: '-'
}

const signerReducer = (state=initialState, action:any) => {
    switch (action.type) {
        case "UPDATESIGNER":
            return {
                ...state,
                signerList: state.signerList.set(action.signerAddress, action.signerInfo)
            }
        case "UPLOADACCOUNTIMG":
            return {
                ...state,
                accountImage: action.accountImg
            }
        case "UPLOADBACKGROUNDIMG":
            return {
                ...state,
                backgroundImage: action.backgroundImg
            }
        default: 
          return state
    }
} 

export default signerReducer