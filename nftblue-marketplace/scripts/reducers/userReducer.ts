import * as types from '../types/types'

const initialUserData : types.userTypes.UserData = {
    addressWallet: '',
    balance: 0,
    isConnect: false
}

export default function userReducer (state = initialUserData, action: types.userTypes.userDataAction ):types.userTypes.UserData {
    switch (action.type) {
        case types.userTypes.UPDATED_USER_DATA: 
          return {
            ...state,
            ...action.data
          };
          default:
            return state;
    }
}