import React from "react";
import "../../../css/DocProfile.css";
import Profilepic from "../../../images/téléchargement.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInfo } from "../../../services/global";
import axios from "axios";

function DoctorProfile() {
  const [singleData, setSingleData] = useState({});

  const params = useParams();

  const getsingleData = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/patients/getsingledoctor/${params.id}`
    );
    if (response.data && response.status === 200) {
      return response.data;
    }
  };

  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Patient") {
      window.location.href = "/login";
    }

    const getData = async () => {
      const data = await getsingleData();
      console.log(data);
      setSingleData(data);
    };

    getData();
  }, []);

  return (getInfo().Type = "Patient" && (
    <main>
      <div className="containerd">
        <div className="sectiond">
          <div className="profiled">
            <img src={Profilepic} alt="Doctor" />
            <h3>
              {singleData.firstName} {singleData.lastName}
            </h3>
            <p>{singleData.specialization}</p>
          </div>

          <div className="access-infod">
            <h3>Contact Information</h3>
            <p>Phone : {singleData.phone}</p>
            <p>Email : {singleData.email}</p>
            <p>Address : {singleData.address}</p>
          </div>
        </div>
        <div className="sectiondinfod">
          <nav className="navigation-barp">
            <ul>
              <li>
                <Link to={`/patient/booking/${params.id}`}>Booking</Link>
              </li>
              <li>
                <Link to={`/patient/docprofile/${params.id}`}>Profile</Link>
              </li>
            </ul>
          </nav>

          <div className="descriptiond">
            <h3>General Information</h3>
          </div>
          <div className="detailsd">
            <div className="questiond">
              <p>Speciality</p>
              <p>Education</p>
              <p>Experience</p>
            </div>
            <div className="answerd">
              <p>{singleData.specialization}</p>
              <p>{singleData.education}</p>
              <p>{singleData.experience}</p>
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
            {singleData.schedule && (
              <div className="hours">
                <p>
                  {singleData.schedule.startTime} -{" "}
                  {singleData.schedule.stopTime}{" "}
                </p>
                <p>
                  {singleData.schedule.startTime} -{" "}
                  {singleData.schedule.stopTime}{" "}
                </p>
                <p>
                  {singleData.schedule.startTime} -{" "}
                  {singleData.schedule.stopTime}{" "}
                </p>
                <p>
                  {singleData.schedule.startTime} -{" "}
                  {singleData.schedule.stopTime}{" "}
                </p>
                <p>
                  {singleData.schedule.startTime} -{" "}
                  {singleData.schedule.stopTime}{" "}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  ));
}

export default DoctorProfile;
