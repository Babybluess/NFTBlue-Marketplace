// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../stores/store'

// // Define a type for the slice state
// interface CounterState {
//   addressWallet: string,
//   loading: boolean
// }

// // Define the initial state using that type
// export const initialState: CounterState = {
//   addressWallet: '',
//   loading: false
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
   
//   }
// })


// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer


import * as UserAction from './UserAction'
import * as OrderAction from './OrderAction'

export {UserAction, OrderAction}