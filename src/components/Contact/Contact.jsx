import React, { useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useContext } from 'react';
import { themeContext } from "../../Context";
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_2mu5xtl",
            "template_m5udu2c",
            form.current,
            "VLwg1ltOWvnCYAiK_"
        )
            .then((result) => {
                console.log(result.text);
                setDone(true);
                form.reset();
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div className='contact-form'>
            <div w-left>
                <div className='awesome'>
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <span> contact me</span>
                    <div className='blur s-blurl' style={{ background: '#ABF1FF94' }}></div>
                </div>
            </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' Placeholder='Name' />
                    <input type='email' name='user_email' className='user' Placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message' />
                    <input type='submit' value='Send' className='button' />
                    <span>{done && "Thanks for Contacting me!"}</span>

                </form>
            </div>

        </div>

    )
}

export default Contact