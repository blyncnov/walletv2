import React from 'react'

import Wallets from "../components/Wallets"

import { WalletContentContainer } from "../styles/Wallet"

const WalletContent = () => {
    return (
        <>
            <WalletContentContainer>
                <div className="textTitle">
                    <h1>Wallets
                    </h1>
                    <br />
                    <p>
                        Multiple iOS and Android wallets support the protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
                    </p>
                </div>
                
                <Wallets />
            </WalletContentContainer>
        </>
    )
}

export default WalletContent