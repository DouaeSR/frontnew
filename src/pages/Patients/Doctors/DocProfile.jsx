import React from 'react';
import '../../../css/DocProfile.css';
import Profilepic from'../../../images/téléchargement.png';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import { getDoctors } from "../../services/doctors";
// import { useParams } from 'react-router-dom';



function DoctorProfile( ) {
  
  return (
   
    <main>
      
      <div className="containerd">
        <div className="sectiond">
          <div className="profiled">
            <img src={Profilepic} alt="Doctor" />
            <h2>Dr. John Doe</h2>
            <p>Speciality: Cardiologist</p>
           
            <p>Points: 1000</p>
          </div>

          <div className="access-infod">
            <h2>Contact Information</h2>
            <p>Phone: +1234567890</p>
            <p>Email: doctor@example.com</p>
            <p>Address: 123 Main Street, City</p>
          </div>
        </div>
        <div className="sectiondinfod">
          <nav className="navigation-barp">
            <ul>
              <li><Link to="/patient/booking">Booking</Link></li>
              <li><Link to="/patient/docprofile">Profile</Link></li>
            </ul>
          </nav>


          <div className="descriptiond">
            <h2>Doctor Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet sem et est consectetur, a sodales ex dignissim.</p>
          </div>
          <div className="detailsd">
            <div className="questiond">
              <p>Speciality</p>
              <p>Education</p>
              <p>Experience</p>
            </div>
            <div className="answerd">
              <p>therapist</p>
              <p>Harvard univercity</p>
              <p>10 years +</p>

            </div>
          </div>
          <div className="schedule">
            <h3>Appointment Schedule</h3>
            <div className="days">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <button className="availability-button">Check Availability</button>
            </div>
            <div className="hours">
              <p>9 AM - 5 PM</p>
              <p>9 AM - 5 PM</p>
              <p>9 AM - 5 PM</p>
              <p>9 AM - 5 PM</p>
              <p>9 AM - 5 PM</p>
            </div>

          </div>
        </div>
      </div>
    </main>
    
  );
}

export default DoctorProfile;