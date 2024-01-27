
export const UpdateSigner = (data: [], address: string) => ({
    type: "UPDATESIGNER",
    signerInfo: data,
    signerAddress: address
})

export const UpdateAccountImg = (image: string) => ({
    type: "UPLOADACCOUNTIMG",
    accountImg: image
})

export const UpdateBackgroundImg = (image: string) => ({
    type: "UPLOADBACKGROUNDIMG",
    backgroundImg: image
})