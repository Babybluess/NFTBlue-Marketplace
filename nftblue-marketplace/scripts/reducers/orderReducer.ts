import * as types from '../types/types'

const initialLoading: types.orderTypes.orderLoading = {
    isLoading: false
}

export default function orderReducer (state = initialLoading, action: types.orderTypes.loadingAction): types.orderTypes.orderLoading {
    switch (action.type) {
        case types.orderTypes.UPDATED_LOADING:
            return {
                ...state,
                ...action.data
            }
            default: 
                return state;
    }
}