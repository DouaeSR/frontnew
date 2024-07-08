import React, { useState, useEffect } from 'react';
import '../css/ContactUs.css';
import { getInfo } from "../services/global";
import axios from "axios";
const ContactUs = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userInfo = getInfo();
        if (userInfo && userInfo.user.email) {
            setEmail(userInfo.user.email);
            setIsLoggedIn(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/messages/postmessages', {
              email,
              message
            }, {
              headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` }
            });
            if (response.status === 201) {
                alert('Message sent successfully');
                setMessage('');
                if (!isLoggedIn) {
                    setEmail('');
                }
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="message-container">
            <h4>Do you have any questions?</h4>
            <h4>Get in touch with us using the form below</h4>
            <div className="msg-details">
                {isLoggedIn ? (
                    <p><strong>From: </strong>{email}</p>
                ) : (
                    <div>
                        <label>
                            <strong>Email: </strong>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                )}
            </div>
            <div className="message-form">
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;