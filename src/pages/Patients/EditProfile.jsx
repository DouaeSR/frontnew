import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInfo } from "../../services/global";
import { getPatientData, updatePatientData } from "../../services/patients";

function EditProfile() {
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    cin: '',
    bloodType: '',
    allergies: '',
    phone: '',
    email: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Patient") {
      window.location.href = "/login";
    }

    const fetchData = async () => {
      const data = await getPatientData();
      setPatientData(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePatientData(patientData);
      navigate('patient/profile');
    } catch (error) {
      console.error("Error updating patient data", error);
    }
  };

  return (
    <main>
      <div className="containersections">
        <form onSubmit={handleSubmit}>
          <h3>Edit Profile</h3>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={patientData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={patientData.lastName}
              onChange={handleChange}
            />
          </div>
         
          <div>
            <label>CIN</label>
            <input
              type="text"
              name="cin"
              value={patientData.cin}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Blood Type</label>
            <input
              type="text"
              name="bloodType"
              value={patientData.bloodType}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Allergies</label>
            <input
              type="text"
              name="allergies"
              value={patientData.allergies}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={patientData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={patientData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </main>
  );
}

export default EditProfile;