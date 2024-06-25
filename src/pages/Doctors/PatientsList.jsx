import React from "react";
import "../../css/PatientsList.css";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

function PatientsList() {
  return (
    <Layout>
      {" "}
      <div className="patients-list-container">
        <h2>Patients List</h2>
        <table className="patientstable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>123-456-7890</td>
              <td>123 Street,City,Country</td>
              <td>
                <div className="Detailsbutton">
                 
                    <button><Link to="/doctor/patprofile">View Details</Link></button>
                  
                </div>
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
    </Layout>
  );
}

export default PatientsList;
