import { combineReducers } from "@reduxjs/toolkit";
import nftListReducer from "./myNFTReducer";
import { nftMarketplaceReducer } from "./nftMarketplaceReducer";
import signerReducer from "./signerReducer";

const rootReducer = combineReducers({
    nftMarketplaceReducer,
    nftListReducer,
    signerReducer    
});

export default rootReducer;