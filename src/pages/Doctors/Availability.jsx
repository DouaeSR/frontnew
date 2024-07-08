

import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getInfo } from "../../services/global";
import axios from "axios";
import Layout from '../../components/Layout';


function Booking() {
  
  const params = useParams();
  const [disabledDates, setDisabledDates] = useState([]);
  

  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Doctor") {
      window.location.href = "/login";
    }

    

    const fetchDisabledDates = async () => {
      const IdDoctor = getInfo().user._id;
      // Simulez une opération asynchrone, par exemple une requête à une API
      const dates = await axios.post(
        "http://localhost:4000/api/appointments/getAppointmentsCountByDate",
        {
          IdDoctor,
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("info")).token
            }`,
          },
        }
      );
      setDisabledDates(dates.data.filter((item) => item.count>=4));
      console.log(dates.data)
    };

    fetchDisabledDates();

   

    
  }, [params.id]);

  const [date, setDate] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };


  const isTileDisabled = ({ date }) => {   
    return (disabledDates.some(
      (disabledDate) =>
        date.getFullYear() * 1 === disabledDate._id.year * 1 &&
        date.getMonth() + 1 === disabledDate._id.month * 1 &&
        date.getDate() * 1 === disabledDate._id.day * 1)||[0, 6].includes(date.getDay())
    );
  };

      
  return (
    getInfo().Type="Doctor"  && (
        <Layout><section className="availability-doctorsection">
          
        <div className="youravailability">
          <h3>Your availability</h3>
          <div className="calendarfordoctor">
          <Calendar
              onChange={handleDateChange}
              value={date}
              minDate={new Date()}
              tileDisabled={isTileDisabled}
            />
          </div>
         
        </div>
        
      </section></Layout>
    
    
        
    
    
    )
  );
}

export default Booking;