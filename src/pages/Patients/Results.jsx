import React from "react";
import { useLocation } from "react-router-dom";
import Profilepic from "../../images/téléchargement.png";

import { Link } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  return (
    <div>
      <section className="doctor-list">
        {results.map((doctor) => (
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
      </section>
    </div>
  );
}

export default SearchResults;
