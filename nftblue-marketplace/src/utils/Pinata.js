
const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK(process.env.NEXT_PUBLIC_PINATA_API_KEY, process.env.NEXT_PUBLIC_PINATA_API_SECRET);
const fs = require('fs') 
import axios from 'axios';
import useSigner from './ConnectWallet';




export const NFTMetadata = async(nameNFT, typeNFT, rareLevelNFT, descriptionNFT, urlNFTLocation) => {

    const hashImage = await handleUpload(nameNFT, urlNFTLocation)
    const linkImage = `https://${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${hashImage}`
     const body = {
        name: nameNFT,
        type: typeNFT,
        rareLevel: rareLevelNFT,
        description: descriptionNFT,
        imgUrl: linkImage
    };
    const options = {
        pinataMetadata: {
            name: nameNFT,
            keyvalues: {
                customKey: 'customValue',
                customKey2: 'customValue2'
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    const res = await pinata.pinJSONToIPFS(body, options)
    return res.IpfsHash
}


const pinataConfig = {
    root: `https://${process.env.NEXT_PUBLIC_PINATA_DOMAIN}`,
    headers: {
      'pinata_api_key': process.env.NEXT_PUBLIC_PINATA_API_KEY,
      'pinata_secret_api_key': process.env.NEXT_PUBLIC_PINATA_API_SECRET
    }
  };


  const handleUpload = async (nameNFT, urlNFTLocation) => {
    try {
      if (urlNFTLocation !== null) {
        const formData = new FormData();
        formData.append('file', urlNFTLocation);
        const pinataBody = {
          options: {
            cidVersion: 1,
          },
          metadata: {
            name: nameNFT,
          }
        }
        formData.append('pinataOptions', JSON.stringify(pinataBody.options));
        formData.append('pinataMetadata', JSON.stringify(pinataBody.metadata));
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        const res = await axios.post(url, formData, {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': `multipart/form-data`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}` 
        }
      });
      return res.data.IpfsHash
      } else {
        alert('select file first')
      }
    } catch (error) {
      console.log(error)
    }
  }

export const queryPinataFiles = async (ipfsHash) => {
    try {
      const url = `https://${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${ipfsHash}`;
      const response = await axios.get(url, pinataConfig);
      console.log('response', response.data.rows)
      console.log('type response', typeof response.data.rows)
      return response.data.rows
    } catch (error) {
      console.log(error)
    }
  };

