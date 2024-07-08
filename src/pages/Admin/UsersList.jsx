import React from "react";
import "../../css/UsersList.css";
import Layout from "../../components/Layout";
import { getInfo } from "../../services/global";
import { useState, useEffect } from "react";
import { getAllPatients ,deletePatient} from "../../services/patients";

const UsersList = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Admin") {
      window.location.href = "/login";
    } else {
      const fetchPatients = async () => {
        try {
          const data = await getAllPatients();
          setPatients(data);
        } catch (error) {
          console.error("Error fetching patients:", error);
        }
      };

      fetchPatients();
    }
  }, []);
  const handleDelete = async (id) => {
    try {
      await deletePatient(id);
      setPatients(patients.filter(patient => patient._id !== id));
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };
  return (getInfo().Type = "Admin" && (
    <Layout>
      <div className="users-list-container">
        <h2>Patients List</h2>
        <table className="Userstable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>

              
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td>{patient._id}</td>
                <td>
                  {patient.firstName} {patient.lastName}
                </td>
                
                <td>{patient.email}</td>
                <td>
                  <div className="Actionbutton">
                  <button onClick={() => handleDelete(patient._id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  ));
};

export default UsersList;
