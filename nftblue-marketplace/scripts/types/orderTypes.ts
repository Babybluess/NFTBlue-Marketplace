export const UPDATED_LOADING = 'UPDATAED_LOADING'

export interface orderLoading {
    isLoading: boolean
}

export interface UpdatedLoading {
    type: typeof UPDATED_LOADING,
    data: Record<string, unknown>
}

export type loadingAction = UpdatedLoading;