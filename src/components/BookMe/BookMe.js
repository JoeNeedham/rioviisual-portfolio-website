import React, { useState } from 'react'
import './BookMe.css'
import { db } from '../firestore';
import {doc, setDoc } from 'firebase/firestore'

const BookMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("working")

        await setDoc(doc(db, 'messages', 'contacts'),
        {
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert("Message has been submitted");
        })
        .catch((error) => {
            alert(error.message);
        });
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className='main-container'>
        <div className='containerr'>
            <form className='form' onSubmit={handleSubmit} >
                <h1>Contact Form</h1>

                <label>Name</label>
                <input 
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label>Message</label>
                <textarea 
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
        <div className='picture-containerr'>
            <img src='./assets/picture23.jpg' alt='pic' />
        </div>
    </div>
    )
}

export default BookMe