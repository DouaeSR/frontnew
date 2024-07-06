import React from "react";
import "../../css/ProfileDoc.css";
import Profilepic from "../../images/téléchargement.png";
import { getInfo } from "../../services/global";
import {useState, useEffect } from "react";
import { getDoctorData } from "../../services/doctors";

function ProfileDoc() {
  const [doctorData, setDoctorData] = useState([]);
  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Doctor") {
      window.location.href = "/doctor/login";
    }
    const getData = async () => {
      const data = await getDoctorData();
      console.log(data);
      setDoctorData(data);
    };
    getData()
  },[])
  return (
    getInfo().Type="Doctor" && (
    <main>
      <div className="containerdoc">
        <div className="sectiondoc">
          <div className="profiledoc">
            <img src={Profilepic} alt="Doctor" /> 
            <h3>Dr. {doctorData.firstName}</h3>
           
          </div>

          <div className="access-infodoc">
            <h3>Contact Information</h3>
            <p>Phone: {doctorData.phone}</p>
            <p>Email: {doctorData.email}</p>
            <p>Address: {doctorData.address}</p>
          </div>
          <div className="editbutton">
           <button>Edit profile</button> 

          </div>


        </div>
        <div className="sectiondinfodoc">
          <div className="descriptiondoc">
            <h3>Doctor Description</h3>
          </div>
          <div className="detailsdoc">
            <div className="questiondoc">
              <p>Speciality</p>
              <p>Education</p>
              <p>Experience</p>
            </div>
            
            <div className="answerdoc">
              <p>{doctorData.specialization}</p>
              <p>{doctorData.education}</p>
              <p>{doctorData.experience}</p>
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
    )
  );
}

export default ProfileDoc;