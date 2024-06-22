import React from 'react';
import '../../css/ProfileDoc.css';
import Profilepic from'../../images/téléchargement.png';





function ProfileDoc() {
  return (
    <main>
      <div className="containerdoc">
        <div className="sectiondoc">
          <div className="profiledoc">
            <img src={Profilepic} alt="Doctor" />
            <h2>Dr. John Doe</h2>
            <p>Speciality: Cardiologist</p>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            <p>Points: 1000</p>
          </div>

          <div className="access-infodoc">
            <h2>Contact Information</h2>
            <p>Phone: +1234567890</p>
            <p>Email: doctor@example.com</p>
            <p>Address: 123 Main Street, City</p>
          </div>
        </div>
        <div className="sectiondinfodoc">
      
          <div className="descriptiondoc">
            <h2>Doctor Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet sem et est consectetur, a sodales ex dignissim.</p>
          </div>
          <div className="detailsdoc">
            <div className="questiondoc">
              <p>Speciality</p>
              <p>Education</p>
              <p>Experience</p>
            </div>
            <div className="answerdoc">
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

export default ProfileDoc;