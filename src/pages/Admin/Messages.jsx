import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import '../../css/Messages.css';
import Layout from '../../components/Layout';
import { getInfo } from "../../services/global";

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!getInfo() || getInfo().Type !== "Admin") {
          window.location.href = "/login";
        } else {
          fetchMessages();
        }
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/messages/getallmessages', {
                headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` }
            });
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/messages/delete/${id}`, {
                headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` }
            });
            setMessages(messages.filter(message => message._id !== id));
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    return (
        getInfo().Type === "Admin" && (
            <Layout> 
                <div className="Messages-container">
                    <h2>Messages</h2>
                    <table className="Messagestable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => (
                                <tr key={message._id}>
                                    <td>{message._id}</td>
                                    <td>{message.email}</td>
                                    <td>{message. message}</td>
                                    <td>
                                        <div className="Buttons">
                                            <Link to={`/admin/response/${message._id}`}>
                                                <button>Respond</button>
                                            </Link>
                                            <button onClick={() => handleDelete(message._id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        )
    );
};

export default Messages;