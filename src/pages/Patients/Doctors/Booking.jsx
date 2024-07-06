import Image from'../../../images/téléchargement.png';
import '../../../css/Booking.css';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getInfo } from "../../../services/global";
import axios from "axios";


    function Booking() {
      const [singleData, setSingleData] = useState({}); 
      const params = useParams()
      const [appointmentCounts, setAppointmentCounts] = useState({});
      const IdPatient = getInfo()?.user._id;
      

      const getDoctorData = async () => {
        const response = await axios.get(`http://localhost:4000/api/patients/getsingledoctor/${params.id}`);
        if (response.data && response.status === 200) {
          return response.data;
        
        }

      };
      // const getAppointmentCounts = async () => {
      //   const response = await axios.get(`http://localhost:4000/api/appointments/getAppointmentsCountByDate/${params.id}`);
      //   if (response.data && response.status === 200) {
      //     const counts = response.data.reduce((acc, { _id, count }) => {
      //       acc[_id] = count;
      //       return acc;
      //     }, {});
      //     setAppointmentCounts(counts);
      //   }
      // };

      useEffect(() => {
        if (!getInfo() || getInfo().Type !== "Patient") {
          window.location.href = "/login";
        }

        const getData = async () => {
          const data = await getDoctorData();
          setSingleData(data);
          // await getAppointmentCounts();
        };
    
        getData();
      },[]);

        const [date, setDate] = useState('');
      
        const handleDateChange = (newDate) => {
          setDate(newDate);
        };

        const handleBookAppointment = async () => {

          try {
            const response = await axios.post('http://localhost:4000/api/appointments/addAppointment', {
              date: date,
              IdDoctor: params.id,
              IdPatient
            }, {
              headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` }
            });
      
            if (response.status === 201) {
              alert(`Appointment booked for ${date.toDateString()}`);
            } else {
              alert("Can't book an appointment today");
            }
          } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
              alert(error.response.data.message);
            } else {
              console.error(error);
              alert("Can't book an appointment today");
            }
          }
        };
        // const tileDisabled = ({ date }) => {
        //   const dateString = date.toISOString().split('T')[0];
        //   return appointmentCounts[dateString] >= 4;
        // };
          
      
  return (
    getInfo().Type="Patient"  && (
    <main>
      
      <div className="containerb">
        <div className="sectionda">
          <div className="profiled">
            <img src={Image} alt="Doctor" />
            <h3>{singleData.firstName}</h3>
            <p>{singleData.specialization}</p> 
          </div>

          <div className="access-infob">
            <h3>Contact Information</h3>
            <p>Phone : {singleData.phone}</p>
            <p>Email : {singleData.email}</p>
            <p>Address : {singleData.adress}</p>
          </div>
        </div>
        <section className="appointment-section">
          <nav className="navigation-bar">
            <ul>
              <li><Link to={`/patient/booking/${params.id}`}>Booking</Link></li>
              <li><Link to={`/patient/docprofile/${params.id}`}>Profile</Link></li>
            </ul>
          </nav>
          <div className="part part2">
            <h1>Select Your Date</h1>
            <div className="calendar">
            <Calendar 
              onChange={handleDateChange} 
              value={date} 
              minDate={new Date()}
              // tileDisabled={tileDisabled}
            />
            </div>
            <div className="availability">
              <div className="indicator available"></div>
              <span>Available</span>
            </div>
            <div className="availability">
              <div className="indicator not-available"></div>
              <span>Not Available</span>
            </div>
          </div>
          <div className="part part3">
            <button className="book-now-button" onClick={handleBookAppointment}>Book Now</button>
          </div>
        </section>
      </div>
    </main>
    )
  );
}

export default Booking;