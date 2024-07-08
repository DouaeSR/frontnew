import "../../css/Profile.css";
import Image from "../../images/téléchargement.png";
import { getInfo } from "../../services/global";
import { useState,useEffect } from "react";
import { getPatientData } from "../../services/patients";
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [patientData, setPatientData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Patient") {
      window.location.href = "/login";
    }

    const getData = async () => {
      const data = await getPatientData();
      console.log(data);
      setPatientData(data);
    };
    getData();
  },[]) 
 
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
    getInfo().Type="Patient"  && ( 
    <main>
      <div className="containersections">
        <div className="sectionpat">
          <div className="profile">
            <img src={Image} alt="Doctor" />
            <h3>{patientData.firstName}</h3>
          </div>

          <div className="access-info">
            <h3>Contact Information</h3>
            <p>Phon: {patientData.phone}</p>
            <p>Email: {patientData.email}</p>
          </div>
          <div className="editbutton">
            <button onClick={() => navigate('/patient/editprofile')}>Edit profile</button>
          </div>
        </div>
        <div className="sectionp2">
          <div className="description">
            <h3>Patient Informations</h3>
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
            <p>{patientData.firstName}</p>
              <p>{patientData.lastName}</p>
              <p>{calculateAge(patientData.birthday)}</p>
              <p>{patientData.gender}</p>
              
              <p>{patientData.bloodType}</p>
              <p>{patientData.allergies}</p>
            </div>
            <div className="space"></div>
          </div>
        </div>
      </div>
    </main>
    )
  );
}

export default Profile;
