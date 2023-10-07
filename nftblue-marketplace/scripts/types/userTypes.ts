export const UPDATED_USER_DATA = 'USER_DATA'
export const UPDATED_USER_DATA_SUCCESS =  'USER_DATA_SUCCESS'

export interface UserData {
    addressWallet: string,
    balance: number,
    isConnect: boolean
}

export interface UpdatedUserData {
    type: typeof UPDATED_USER_DATA,
    data: Record<string, unknown>
}

export type userDataAction = UpdatedUserData;