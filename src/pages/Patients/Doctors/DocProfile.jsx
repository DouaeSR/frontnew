import React from 'react';
import '../../../css/DocProfile.css';
import Profilepic from'../../../images/téléchargement.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getInfo } from "../../../services/global";
import axios from "axios";



function DoctorProfile( ) {
  const [singleData, setSingleData] = useState({}); 
      
      const params = useParams()
      
      

      const getDoctorData = async () => {
        const response = await axios.get(`http://localhost:4000/api/patients/getsingledoctor/${params.id}`);
        if (response.data && response.status === 200) {
          return response.data;
        
        }

      };

      useEffect(() => {
        if (!getInfo() || getInfo().Type !== "Patient") {
          window.location.href = "/login";
        }

        const getData = async () => {
          const data = await getDoctorData();
          //  console.log(data);
            setSingleData(data);
        };
    
        getData();
      },[]);
  
  return (
   
    <main>
      
      <div className="containerd">
        <div className="sectiond">
          <div className="profiled">
            <img src={Profilepic} alt="Doctor" />
            <h2>{singleData.firstName}</h2>
            <p>{singleData.specialization}</p>
           
            <p>Points: 1000</p>
          </div>

          <div className="access-infod">
            <h2>Contact Information</h2>
            <p>Phone: {singleData.phone}</p>
            <p>Email: {singleData.email}</p>
            <p>Address: {singleData.adress}</p>
          </div>
        </div>
        <div className="sectiondinfod">
          <nav className="navigation-barp">
            <ul>
            <li><Link to={`/patient/booking/${params.id}`}>Booking</Link></li>
              <li><Link to={`/patient/docprofile/${params.id}`}>Profile</Link></li>
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