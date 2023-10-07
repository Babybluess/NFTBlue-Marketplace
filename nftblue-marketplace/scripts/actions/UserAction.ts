import * as types from '../types/types'

export function updatedUserData (data: types.userTypes.UpdatedUserData) {
    return {
        type: types.userTypes.UPDATED_USER_DATA,
        data: data
    };
}