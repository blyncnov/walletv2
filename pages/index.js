import React from 'react';
import Head from 'next/head'

import Header from "../components/Header"

export default function Home() {
  return (
    < >
      <Head>
        <title>Wallet Connect v2</title>
        <meta name="description" content="Wallet Connectß" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="coinmarketcap-widget-marquee" coins="1,1027,825" currency="USD" theme="light" transparent="true" show-symbol-logo="true">
       
    </div>
    
    <Header/> 
 
    </>
  )
}
