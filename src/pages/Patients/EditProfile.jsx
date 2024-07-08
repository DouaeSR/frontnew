import "../../css/Profile.css";
import Image from "../../images/téléchargement.png";
import { getInfo } from "../../services/global";
import { useState, useEffect } from "react";
import { getPatientData, updatePatientData } from "../../services/patients";
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const [patientData, setPatientData] = useState({
   
    
    phone: '',
    email: '',
    birthday: '',
    gender: ''
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
      navigate('/patient/profile');
    } catch (error) {
      console.error("Error updating patient data", error);
    }
  };

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    getInfo().Type === "Patient" && (
      <main>
        <div className="containersections">
          <div className="sectionpat">
            <div className="profile">
              <img src={Image} alt="Patient" />
              <h3>{patientData.firstName}</h3>
            </div>

              <form onSubmit={handleSubmit}>
              <div className="access-info">
              <h3>Contact Information</h3>
                <p>
                  Phon: <input type="text" name="phone" value={patientData.phone} onChange={handleChange} />
                </p>
                <p>
                  Email: <input type="email" name="email" value={patientData.email} onChange={handleChange} />
                </p>
                </div>
                <div className="editbutton">
                  <button type="submit">Save Changes</button>
                </div>
              </form>

          </div>
          <div className="sectionp2">
            <div className="description">
              <h3>Patient Information</h3>
            </div>
             
            <div className="details">
            
                <div className="question">
                  <p>First name</p>
                  <p>Last name</p>
                  <p>Age</p>
                  <p>Gender</p>
                  
                  <p>Blood type</p>
                  <p>Allergies</p>
                </div>
                <div className="answer">
                  <p>
                  {patientData.firstName}
                  </p>
                  <p>
                  {patientData.lastName}
                  </p>
                  <p>{calculateAge(patientData.birthday)}</p>
                  <p>{patientData.gender}</p>
                 
                  <p>
                  {patientData.bloodType}
                  </p>
                  <p>
                  {patientData.allergies}
                  </p>
                </div>
                <div className="space"></div>
               
          
            </div>
          </div>
        </div>
      </main>
    )
  );
}

export default EditProfile;