// import { configureStore } from '@reduxjs/toolkit'
// import { Interface } from 'ethers/lib/utils';
// import { useState, FC } from 'react';
// // ...

// export interface Signers {
//   addressWallet: string;
//   isloading: boolean;
//   balance: number;
// };

// export const currentSigner:Signers = {
//   addressWallet: '',
//   isloading: false,
//   balance: 0
// }

// export const addresswl = ''


// export const store = configureStore({
//   reducer: {
//     // posts: postsReducer,
//     // comments: commentsReducer,
//     // users: usersReducer
//   }
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch


//   type detailSigner = {
//     address: string, 
//     isloading: boolean,
//     Balance: number
//   };

// export interface signerProps {
//     signer: detailSigner,
//   }


//   export const [state, setstate] = useState('')
//   // export const UserProfile: FC<signerProps > = ({ signer }): JSX.Element => {
//   //   return (
//   //    signer.address
//   //   )
//   // };

// import { createWrapper } from 'next-redux-wrapper';
// import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import rootReducer from '../reducers/index';
// import rootSaga from '../sagas/index';

// const sagaMiddleware = createSagaMiddleware();

// const makeStore = () => {
// 	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// 	sagaMiddleware.run(rootSaga);

// 	return store;
// };

// export const wrapper = createWrapper(makeStore, { debug: false });


//import { applyMiddleware, legacy_createStore as createStore } from 'redux';


// 'use client'
// import { createStore } from 'redux'
// import {reducers} from "../reducers/reducers"

// const store = createStore( reducers)
// console.log("store", store)

// export default store;

import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/reducers';
import rootSaga from '../redux-saga/saga';

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);

	return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });