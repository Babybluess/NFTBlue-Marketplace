import { combineReducers } from "@reduxjs/toolkit";
import nftListReducer from "./myNFTReducer";
import { nftMarketplaceReducer } from "./nftMarketplaceReducer";

const rootReducer = combineReducers({
    nftMarketplaceReducer,
    nftListReducer    
});

export default rootReducer;