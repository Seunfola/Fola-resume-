import React, { useState } from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import { useRef, useContext } from 'react';
import { themeContext } from "../../Context";
const Contact = () => {
    const [state, handleSubmit] = useForm("xzbldqvd");
    const form = useRef();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    if (state.succeeded) {
        return <p className='message'>Your Message Was Delivered Successfully!</p>;
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
                <form ref={form} onSubmit={handleSubmit}>
                    <input type='text' id='name' name='name' className='user' Placeholder='Name' />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <input type='email' id='email' name='email' className='user' Placeholder='Email' />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea name='message' className='user' autoComplete='on' spellCheck='true' placeholder='Message' />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <input type='submit' value='Send' className='button' disabled={state.submitting} />
                    {/* <span>{done && "Thanks for Contacting me!"}</span> */}

                </form>
            </div>

        </div>

    )
}

export default Contact