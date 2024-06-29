import React from 'react';
import { useState, useEffect } from "react"; 
import Layout from "../../components/Layout";
import "../../css/doctordash.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { getTodaysAppointments } from '../../services/patients';
import { getInfo } from '../../services/global';

function DocDashboard() {
  const [todaysAppointments, setTodaysAppointments] = useState([]);

  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Doctor") {
      window.location.href = "/doctor/login";
    }
    const fetchAppointments = async () => {
      try {
        const data = await getTodaysAppointments();
        setTodaysAppointments(data);
      } catch (error) {
        console.error('Error fetching today\'s appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <Layout>
    <div>
     
      <main>
        

        <div className="welcome">
          <h3>Welcome doctor Joe</h3>
         
       
        
        <div className="overviewcountiner">
          
          <div className="dashbox">
            <div className="icon"style={{ color: '#0077b6', fontSize: '24px' }}>
          <FontAwesomeIcon icon={faUserPlus} />
          </div>
          
            <div className="text">
              <p>New Patients</p>
              <p style={{ color: '#0077b6'}}><strong>5+</strong></p>
              <p>today</p>
            </div>
          </div>



          <div className="dashbox">
          <div className="icon"style={{ color: '#0077b6', fontSize: '24px' }}>
          <FontAwesomeIcon icon={ faCalendarCheck} />
          </div>
          
            <div className="text">
              <p>Appointments</p>
              <p style={{ color: '#0077b6'}}><strong>5+</strong></p>
              <p>today</p>
            </div>
          </div>


          <div className="dashbox">
          <div className="icon"style={{ color: '#0077b6', fontSize: '24px' }}>
          <FontAwesomeIcon icon={faBell} />
          </div>
            <div className="text">
              <p>Notifications</p>
              <p style={{ color: '#0077b6'}}><strong>5+</strong></p>
              <p>today</p>
            </div>
          </div>

        </div>
       </div> 
       <div className="Apptoday">
        <h3>Today's appointments</h3>
        {todaysAppointments.map(appointment => (
              <div className="appscontainer" key={appointment._id}>
                <div className="appsdetails">
                  <p><strong>{appointment.IdPatient.firstName} {appointment.IdPatient.lastName}</strong></p>
                  <p>{new Date(appointment.date).toLocaleString()}</p>
                </div>
                <div className="button-container">
                  <button>Status</button>
                </div>
              </div>
            ))}
       </div>
      </main>
    </div>
    </Layout>
  );
}

export default DocDashboard;