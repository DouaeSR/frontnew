import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "../../../css/SelectTime.css";
import Layout from "../../../components/Layout";
import axios from "axios";

function SelectTime() {
  const { id } = useParams();
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSelect = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/appointments/update-time/${id}`,
        { time },
        {
          headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
        }
      );
      if (response.status === 200) {
        alert("Time selected successfully");
        navigate("/doctor/appointments");
      } else {
        alert("Failed to select time");
      }
    } catch (error) {
      console.error("Error updating appointment time:", error);
      alert("Error selecting time");
    }
  };

  return (
    <Layout>
      <div className="select-time-container">
        <h1>Select Time</h1>
        <p>Appointment ID: {id}</p>
        <input
          type="text"
          value={time}
          onChange={handleTimeChange}
          placeholder="Enter time (e.g., 10:00 AM)"
          className="time-input"
        />
        <button onClick={handleSelect} className="select-button">
          Select
        </button>
      </div>
    </Layout>
  );
}

export default SelectTime;