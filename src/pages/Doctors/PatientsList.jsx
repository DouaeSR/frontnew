import React from "react";
import "../../css/PatientsList.css";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { getInfo } from "../../services/global";
import { useState,useEffect } from "react";
import { getDoctorPatients } from "../../services/patients";

function PatientsList() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Doctor") {
      window.location.href = "/doctor/login";
    }
    const fetchPatients = async () => {
      try {
        const data = await getDoctorPatients();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);
  return (
    getInfo().Type="Doctor" && (
    <Layout>
      {" "}
      <div className="patients-list-container">
        <h2>Patients List</h2>
        <table className="patientstable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {patients.map((patient) => (
                <tr key={patient._id}>
                  <td>{patient.firstName} {patient.lastName}</td>
                  <td>{patient.email}</td>
                  <td>{patient.phone}</td>
                  <td>
                    <div className="Detailsbutton">
                    <Link to={`/doctor/patientprofile/${patient._id}`}> <button>View Details</button></Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    )
  );
}

export default PatientsList;