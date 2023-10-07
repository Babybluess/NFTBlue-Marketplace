import * as types from '../types/types'

export function updatedOrderData (data: types.orderTypes.UpdatedLoading) {
    return {
        type: types.orderTypes.UPDATED_LOADING,
        data: data
    };
}