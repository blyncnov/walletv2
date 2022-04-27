import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import WalletContent from "../components/WalletContent"

import Logo from "../public/logowallet.jpeg"

import {
  WalletContainer,
  WalletNavigation,
  Constraint,
} from "../styles/Wallet"

const Wallet = () => {
  return (
    <>
      <WalletContainer>
              <Constraint>
        <WalletNavigation >
    
          <div>
                <Link style={{ color: "white", cursor: "pointer" }} href="/" passHref={true} >
                    <p>Wallets</p>
                  </Link>
          </div>
          
            <div style={{ cursor: 'pointer' }} >
                 <Link href="/" passHref={true}>
                          <Image src={Logo} alt="logo" height={70} width={100} />
                  </Link>
          </div>
          
            <div>
                  <Link style={{ color: "white" }} href="/wallet" passHref={true} >
                      <p>dApps</p>
                    </Link>
            </div>
         
          </WalletNavigation>
           <WalletContent/>
          </Constraint>
      </WalletContainer>
    </>
  )
}

export default Wallet