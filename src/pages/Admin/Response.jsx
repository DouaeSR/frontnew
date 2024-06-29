import React from 'react';
import '../../css/Response.css';
import { getInfo } from "../../services/global";
import { useEffect } from "react";
const Response = () => {
    useEffect(() => {
        if (!getInfo() || getInfo().Type !== "Admin") {
          window.location.href = "/login";
        }
      })
    return ( 
        getInfo().Type="Admin" && (
        <div className="response-container">
           
            <div className="message-details">
                <h3>Message Details</h3>
                
                <p><strong>From:</strong>Johndoe123@gmail.com</p>
                <p><strong>Message:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel turpis ac eros facilisis varius.</p>
            </div>
            <div className="response-form">
                <h3>Your Response</h3>
                <form>
                    <textarea placeholder="Type your response here..."></textarea>
                    <button type="submit">Send Response</button>
                </form>
            </div>
        </div>
        )
    );
};

export default Response;