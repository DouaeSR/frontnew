import React from "react";
import "../../css/UsersList.css";
import Layout from "../../components/Layout";
import { getInfo } from "../../services/global";
import { useState, useEffect } from "react";
import { getDoctors } from "../../services/doctors";

const UsersList = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Admin") {
      window.location.href = "/login";
    } else {
      const fetchDoctors = async () => {
        try {
          const data = await getDoctors();
          setDoctors(data);
        } catch (error) {
          console.error("Error fetching patients:", error);
        }
      };

      fetchDoctors();
    }
  }, []);
  return (getInfo().Type = "Admin" && (
    <Layout>
      <div className="users-list-container">
        <h2>Doctors List</h2>
        <table className="Userstable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>

              <th>Points</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>{doctor._id}</td>
                <td>
                  {doctor.firstName} {doctor.lastName}
                </td>
                <td>{doctor.points || "N/A"}</td>
                <td>{doctor.email}</td>
                <td>
                  <div className="Actionbutton">
                    <button>Delete</button>
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
