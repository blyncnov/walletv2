import React from 'react'
import Image from 'next/image'

import { FaBars } from 'react-icons/fa'

import { NContainer, Nmax, Nnavbar, NLeft, NRight, NMobile } from "../styles/Navigation"

const Navigation = () => {
    return (
        <div>
            <NContainer>
                <div className="blue">
                    <h5>
                        WalletConnect announces v2.0!
                        <span>
                            <a href="/">Read More</a>
                        </span>
                    </h5>
                </div>
                <Nmax>
                    <Nnavbar>
                        <NLeft className="left">
                            <div className="logo">
                                <Image
                                    width={38} height={30}
                                    src="/logowallet.jpeg" alt="logo" />
                                <h3>WalletConnect
                                </h3>
                            </div>
                            <div className="link-lists">
                                <li>Docs</li>
                                <li>Registry</li>
                            </div>
                        </NLeft>
                        <NRight className="right">
                            <li>Log in</li>
                            <button>Sign up</button>
                        </NRight>
                        <NMobile>
                            <FaBars style={{ fontSize: "1.2em", fontWeight: "400" }} />
                        </NMobile>
                    </Nnavbar>
                </Nmax>
            </NContainer>
        </div>
    )
}

export default Navigation