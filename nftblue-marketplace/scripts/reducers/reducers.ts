import { combineReducers } from "@reduxjs/toolkit";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    userReducer,
    orderReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;