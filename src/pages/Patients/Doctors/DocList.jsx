import React from "react";
import { Link } from "react-router-dom";
import Profilepic from "../../../images/téléchargement.png";
import "../../../css/DocList.css";
import { useState, useEffect } from "react";
import { getDoctors } from "../../../services/doctors";

function DoctorList() {
   
        const [doctors, setDoctors] = useState([]);
      
        useEffect(() => {
          const getData = async () => {
            const data = await getDoctors();
            setDoctors(data);
          };
      
          getData();
        }, []);

  return (
    <main>
      {
        <div className="filter-bar">
          <div className="filter-options">
            <button className="filter-button">
              Experience <span>&#9660;</span>
            </button>
            <button className="filter-button">
              Gender <span>&#9660;</span>
            </button>
          </div>
          <div className="filter">
            <span>Filter</span>
            <i className="fa-light fa-filter"></i>
          </div>
        </div>
      }
      <section className="doctor-list">
      {doctors.map((doctor) => (
          <Link
            key={doctor._id}
            to={`/patient/booking/${doctor._id}`}
            className="doctor-box"
          >
              <div className="profile-picture"   >
                <img src={Profilepic} alt="Doctor 1" />
              </div>
              <div className="information" >
                <h2>{doctor.firstName} {doctor.lastName}</h2>
                <p>Speciality: {doctor.specialization}</p>

                <div className="doctordetails">
                  <p>
                    <i className="fa-solid fa-location-dot"></i> City Hospital
                  </p>
                  <p>
                    <i className="fa-regular fa-clock"></i> 15 years
                  </p>
                  <p>
                    <i className="fa-solid fa-house-medical"></i> Mon-Fri,
                    9AM-5PM
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </section>

      <div className="pagination">
        <button>
          <Link to="#" className="prev-page">
            Prev
          </Link>
        </button>
        <button>
          <Link to="#" className="next-page">
            Next
          </Link>
        </button>
      </div>
    </main>
  );
}

export default DoctorList;
