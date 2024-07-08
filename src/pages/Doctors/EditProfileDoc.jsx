import React from "react";
import "../../css/ProfileDoc.css";
import Profilepic from "../../images/téléchargement.png";
import { getInfo } from "../../services/global";
import { useState, useEffect } from "react";
import { getDoctorData, updateDoctorData } from "../../services/doctors";
import { useNavigate } from "react-router-dom";

function EditProfileDoc() {
  const [doctorData, setDoctorData] = useState({
    
    phone: "",
    email: "", 
    address: "",

  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Doctor") {
      window.location.href = "/doctor/login";
    }
    const fetchData = async () => {
      const data = await getDoctorData();
      setDoctorData(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoctorData(doctorData);
      navigate("/doctor/profiledoc");
    } catch (error) {
      console.error("Error updating doctor data", error);
    }
  };

  return (
    getInfo().Type === "Doctor" && (
      <main>
        <div className="containerdoc">
          <div className="sectiondoc">
            <div className="profiledoc">
              <img src={Profilepic} alt="Doctor" />
              <h3>Dr. {doctorData.firstName}</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="access-infodoc">
                <h3>Contact Information</h3>

                <p>
                  Phone:{" "}
                  <input
                    type="text"
                    name="phone"
                    value={doctorData.phone}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  Email:{" "}
                  <input
                    type="email"
                    name="email"
                    value={doctorData.email}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  Address:{" "}
                  <input
                    type="text"
                    name="address"
                    value={doctorData.address}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="editbutton">
                <button type="submit">Save Changes</button>
              </div>
            </form>
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

export default EditProfileDoc;
