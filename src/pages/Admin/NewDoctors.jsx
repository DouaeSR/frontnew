import React from 'react';
import '../../css/newdoctors.css';
import Layout from "../../components/Layout";
import { getNewDoctors, deleteDoctor,approveDoctor } from '../../services/doctors';
import { getInfo } from "../../services/global";
import { useState,useEffect } from "react";

const NewDoctors = () => {

  const [newDoctors, setNewDoctors] = useState([]);

  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Admin") {
        window.location.href = "/login";
      }
    const getDoctors = async () => {
      try {
        const data = await getNewDoctors();
        setNewDoctors(data);
      } catch (error) {
        console.error('Error fetching new doctors:', error);
      }
    };

    getDoctors();
  }, []);
  
  const handleApprove = async (id) => {
    try {
      const updatedDoctor = await approveDoctor(id);
      setNewDoctors(newDoctors.filter(doctor => doctor._id !== id));
    } catch (error) {
      console.error('Error approving doctor:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await deleteDoctor(id);
      setNewDoctors(newDoctors.filter(doctor => doctor._id !== id));
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

    return (
        <Layout>
        <div className="newdoc-list-container">
            <h2>New Doctors</h2>
            <table className="newdoctable">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {newDoctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>{doctor.firstName} {doctor.lastName}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.email}</td>
                <td>
                <div className="Actbuttons">
                    <button onClick={() => handleApprove(doctor._id)}>Accept</button>
                    <button onClick={() => handleReject(doctor._id)}>Reject</button>
                  </div>
                </td>
              </tr>
            ))}
                </tbody>
            </table>
        </div>
        </Layout>
    );
};

export default NewDoctors;