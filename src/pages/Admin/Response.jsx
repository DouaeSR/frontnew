import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../../css/Response.css';
import { getInfo } from "../../services/global";

const Response = () => {
    const { id } = useParams();
    const [message, setMessage] = useState(null);
    const [response, setResponse] = useState('');

    useEffect(() => {
        if (!getInfo() || getInfo().Type !== "Admin") {
            window.location.href = "/login";
        } else {
            fetchMessage();
        }
    }, [id]);

    const fetchMessage = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/messages/getsinglemessage/${id}`, {
                headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` }
            });
            setMessage(response.data);
        } catch (error) {
            console.error('Error fetching message:', error);
        }
    };

    const handleResponseSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:4000/api/messages/${id}/response`, { response }, {
                headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` }
            });
            alert('Response sent successfully');
        } catch (error) {
            console.error('Error sending response:', error);
        }
    };

    if (!message) return <div>Loading...</div>;

    return ( 
        getInfo().Type === "Admin" && (
            <div className="response-container">
                <div className="message-details">
                    <h3>Message Details</h3>
                    <p><strong>From:</strong> {message.email}</p>
                    <p><strong>Message:</strong> {message.message}</p>
                </div>
                <div className="response-form">
                    <h3>Your Response</h3>
                    <form onSubmit={handleResponseSubmit}>
                        <textarea 
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Type your response here..."
                            required
                        ></textarea>
                        <button type="submit">Send Response</button>
                    </form>
                </div>
            </div>
        )
    );
};


export default Response;