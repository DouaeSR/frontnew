import '../../css/PatProfile.css';
import Image from'../../images/téléchargement.png';
import { getInfo } from "../../services/global";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


function PatProfile() {
  const [singleData, setSingleData] = useState({});

  const params = useParams();
 
  const getPatientData = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/doctors/getsinglepatient/${params.id}`
    );
    if (response.data && response.status === 200) {
      return response.data;
    }
  }; 
  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Doctor") {
      window.location.href = "/doctor/login";
    } 
    const getData = async () => {
      const data = await getPatientData();
      //  console.log(data);
      setSingleData(data);
    };

    getData();
  })
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
    getInfo().Type="Doctor" && (
    <main>
       
        <div className="containersections">
          <div className="sectionp">
            <div className="profile">
              <img src={Image} alt="Doctor" />
              <h3>{singleData.firstName}</h3>
            </div>

            <div className="access-info">
              <h3>Contact Information</h3>
              <p>Phone: {singleData.phone}</p>
              <p>Email: {singleData.email}</p>
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
                <p>Cin</p>
                <p>Blood type</p>
                <p>Allergies</p>
              </div>
              <div className="answer">
                <p>{singleData.firstName}</p>
                <p>{singleData.lastName}</p>
                <p>{calculateAge(singleData.birthday)}</p>
                <p>{singleData.gender}</p>
                <p>L235798</p>
                <p>{singleData.bloodType}</p>
                <p>{singleData.allergies}</p>
              </div>
              <div className="space"></div>
            </div>
          </div>
        </div>
        
      </main>
    )
  );
}

export default PatProfile;