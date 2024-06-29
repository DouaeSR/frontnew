import React from 'react';
import '../css/ContactUs.css';
const ContactUs = () => {
    return (
        <div className="message-container">
           <h4>Do you have any questions?</h4>
           <h4> Get in touch with us using the form below</h4>
            <div className="msg-details">
                
                <p><strong>From : </strong>Johndoe123@gmail.com</p>
                
            </div>
            <div className="message-form">
                
                <form>
                    <textarea placeholder="Type your message here..."></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;