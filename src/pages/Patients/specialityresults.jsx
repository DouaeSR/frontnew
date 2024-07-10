import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getDoctorsBySpecialization } from '../../services/doctors'
import Profilepic from "../../images/téléchargement.png";

function SpecialityList() {
  const { specialization } = useParams();
  const [doctors, setDoctors] = useState([]);
  
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctorsBySpecialization(specialization);
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, [specialization]);

  return (

      <div className="speciality-list">
        
        {doctors.length > 0 ? (
          <div className="doctor-list">
            {doctors.map((doctor) => (
             <Link
             key={doctor._id}
             to={`/patient/booking/${doctor._id}`}
             className="doctor-box"
           >
             <div className="profile-picture">
               <img src={Profilepic} alt="Doctor 1" />
             </div>
             <div className="information">
               <h2>
                 {doctor.firstName} {doctor.lastName}
               </h2>
               <p>Speciality: {doctor.specialization}</p>
 
               <div className="doctordetails">
                
                 <p>
                   <i className="fa-regular fa-clock"></i> {doctor.experience}
                 </p>
                 <p>
                   <i className="fa-solid fa-house-medical"></i> Mon-Fri, 9AM-5PM
                 </p>
               </div>
             </div>
           </Link>
            ))}
          </div>
        ) : (
          <p>No doctors found in this specialization.</p>
        )}
      </div>
    
  );
}

export default SpecialityList;