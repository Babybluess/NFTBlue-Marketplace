import {pinDataNFT, pinDataNFTSale} from './Pinata'
import React, {useState} from 'react'
import { NFTInfor } from './NFTModal'
import { TransactionResponse } from "@ethersproject/abstract-provider";
import useSigner from './ConnectWallet';


const intialNFT = [
            

]

export const AbstractNFTL: NFTInfor[] = []
export const ArtNF: NFTInfor[] = []
export const GorrillaNFT: NFTInfor[] = []
export const MonkeyNFT: NFTInfor[] = []

export const AllNFT: NFTInfor[] = []

export function fetchNFTData (_name: string, _prize: number, _type: string, _rareLevel: string, _description: string, _imgUrl:string ): Promise<NFTInfor> {

    
    // function fetchData ():string {
       
    //     const dt= pinDataNFT(_name, _type, _rareLevel, _description, _imgUrl)
    //     console.log("dataJson", dt, "dataType", typeof dt)
    //     //return dt;
    //     return '';

    // }
    const { myNFT, NFTMarketplace} = useSigner()
    const create = async () => {
       // const nftCreate: TransactionResponse = await myNFT.mintToken(name);

    }

    return pinDataNFT(_name, _type, _rareLevel, _description, _imgUrl);

    // fetchData()
    
}

