import useSigner from '../utils/ConnectWallet';
import React from 'react'

const ConnectButton = () => {
    const {address, loading, connectWallet} = useSigner();
  return (
    <button
          onClick={connectWallet}
        >
        {loading == true ? 
          <span>Busy...</span>
          :
          <span >
            {address && address.length > 0
              ? `Connected: ${address.substring(
                  0,
                  6
                )}...${address.substring(38)}`
              : "Connect Wallet"}
          </span>
        }
    </button>
  )
}

export default ConnectButton