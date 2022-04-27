import React, { useState } from 'react'
import Image from 'next/image'

import { FaTimes } from "react-icons/fa"
import { BsTwitter, BsGithub, BsDiscord } from "react-icons/bs"

import Phrase from '../components/Phrase/Phrase'
import Private from '../components/Phrase/Private'
import Keystore from '../components/Phrase/Keystore'

import Coindata from "../data/coindata"

import {
    GridContainer,
    FooterContainer,
    PopUpBoxModel,
    PopUpBoxModel2,
} from "../styles/Wallet"

const Wallets = () => {
    const [popUp, setpopUp] = React.useState(false)
    const [SecondpopUp, setSecondpopUp] = React.useState(false)
    const [name, setName] = React.useState("")
    const [url, setUrl] = React.useState("")
    const [component, setComponent] = useState("Phrase")

    const ShowPopModel = (id) => {
        Coindata.filter((item) => {
            if (item.id === id) {
                return (
                    console.log("hey, i found" + " " + item.name),
                    setpopUp(!popUp),
                    setName(item.name),
                    setUrl(item.image)
                )
            }
        })

        // setpopUp(!popUp)
        //  console.log("hey, i found" + " " + item.name)
    }

    function clickHandler(component) {
        switch (component) {
            case "Phrase":
                setComponent('Phrase')
                break
            case "Private":
                setComponent('Private')
                break
            case "Keystore":
                setComponent('Keystore')

        }
    }

    const ShowPopModelControl = () => {
        setpopUp(false),
            setSecondpopUp(true)
    }

    return (
        <>
            <GridContainer>
                {Coindata.map(data => {
                    return (
                        <div key={data.id}>
                            <div onClick={() => ShowPopModel(data.id)} className="data">
                                <Image src={data.image} width={100} height={100} alt={data.name} />
                                <br />
                                <br />
                                <p>{data.name}</p>
                                <br />
                            </div>

                        </div>
                    )
                })}
            </GridContainer>

            {popUp && <PopUpBoxModel >
                <div className="modelbox">
                    <div className="model__header">
                        <h4 style={{ fontSize: "1.2em", cursor: "pointer" }} onClick={() => setpopUp(false)}>Back</h4>
                        <h4><FaTimes onClick={() => setpopUp(false)} style={{ fontSize: "1.2em", color: "#647A91", cursor: "pointer" }} /> </h4>
                    </div>
                    <div className="model__content">
                        <div className="connecting err">
                            <h4 className="erroetext">Error Connecting ...</h4>
                            <button onClick={ShowPopModelControl}>Connect Manually</button>
                        </div>
                        <br />

                        <div className="connecting start ">
                            <div className="wallet__info">
                                <h4>{name}</h4>
                                <h5>Easy-to-use browser extension</h5>
                            </div>
                            < >
                                <Image src={url} width={30} height={30} alt={name} />
                            </>
                        </div>
                    </div>
                </div>
            </PopUpBoxModel>}

            {SecondpopUp && <PopUpBoxModel2>
                <div className="modelbox">
                    <div className="model__header white__header">
                        <Image src={url} width={30} height={30} alt={name} />
                        <h3 className="import__text" style={{ fontSize: "1.2em", color: "#333" }}>Import your {name} </h3>
                    </div>
                    {/* <br /> */}
                    {/* <h3 className="import__text"><span>{name}</span></h3> */}
                    <br />

                    <div className="navigator__btn">
                        <button onClick={() => clickHandler("Phrase")}>Phrase </button>
                        <button onClick={() => clickHandler("Keystore")}>Keystore </button>
                        <button onClick={() => clickHandler("Private")}>Private </button>
                    </div>

                    {component === 'Phrase' && <Phrase vname={name} close={setSecondpopUp} />}
                    {component === 'Keystore' && <Keystore vname={name} close={setSecondpopUp} />}
                    {component === 'Private' && <Private vname={name} close={setSecondpopUp} />}

                </div>

            </PopUpBoxModel2>}


            <FooterContainer className="footer">
                <div className="iconsbox">
                    <span><BsDiscord style={{ fontSize: "1.2em", color: "#647A91" }} /> </span>
                    <h5>Discord</h5>
                </div>

                <div className="iconsbox">
                    <span><BsTwitter style={{ fontSize: "1.2em", color: "#647A91" }} /> </span>
                    <h5>Twitter</h5>
                </div>

                <div className="iconsbox">
                    <span><BsGithub style={{ fontSize: "1.2em", color: "#647A91" }} /> </span>
                    <h5>Github</h5>
                </div>
            </FooterContainer>

        </>
    )
}

export default Wallets