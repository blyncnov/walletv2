import Image from "next/image";
import React from "react";

import BlockBanner from "../public/block.png";

import { BlockSDKContainer } from "../styles/BlockSDK";

const BlockSDK = () => {
  return (
    <BlockSDKContainer>
      <h1>The Blockchain SDK</h1>

      <p>
        Built for developers, the WalletConnect web, android, and iOS SDK’s
        power millions of web3 connections every day.
      </p>
      <br />
      <div className="Simage">
        <Image src={BlockBanner} layout="responsive" />
      </div>
    </BlockSDKContainer>
  );
};

export default BlockSDK;
