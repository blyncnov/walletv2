import React from "react";
import Image from "next/image";
import Link from "next/link";

import Hero from "../public/hero.png"

import { HeaderContainer, Constraints, HGridContainer, HLeft, HRight } from "../styles/Header";
import BlockSDK from "./BlockSDK";
import Protocols from "./Protocols";

const HeaderContent = () => {
    return (
        <>
            <HeaderContainer>
                <Constraints>
                    <HGridContainer>
                        <HLeft>
                            <div className="text">
                                <h1>Any Wallet.<br /> Any Dapp.<br /> Any Chain.</h1>
                                <p>
                                    WalletConnect is the web3 standard to connect blockchain wallets
                                    to dapps.</p>
                                <button>Get Started</button>
                            </div>
                        </HLeft>
                        <HRight>
                            <Image
                                src={Hero}
                                alt="WalletConnect"
                                layout="responsive"
                            />
                        </HRight>
                    </HGridContainer>
                </Constraints>
            </HeaderContainer>
            {/* --------------------Import ALL other components-------------------- */}

            <Constraints>
                <BlockSDK />
                <Protocols/>
            </Constraints>

            {/* --------------------Import ALL other components ENSDS-------------------- */}

        </>
    );
};

export default HeaderContent;
