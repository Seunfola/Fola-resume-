import React from 'react';
import './contact.css';
import { useRef, useContext } from 'react';
import { themeContext } from "../../Context";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const Contact = () => {

    const form = useRef();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1gmvoew', 'template_ao08965', form.current, '_8GeNeGxFow4XwMnF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const notify = () => {
        toast('Message Sent and delivered successfully.');
    }

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
                    <input type='text' id='name' name='name' className='user' Placeholder='Your Name' required />
                    {/* <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    /> */}
                    <input type='email' id='email' name='email' className='user' Placeholder='Your Email' required />
                    {/* <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    /> */}
                    <textarea name='message' className='user' autoComplete='on' spellCheck='true' placeholder='Type your Message' required />
                    {/* <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    /> */}
                    <input type='submit' value='Send' className='button' onClick={notify} />
                    {/* <span>{done && "Thanks for Contacting me!"}</span> */}

                </form>
            </div>

        </div>

    )
}

export default Contact