import axios from "axios";

export const getPatientData = async () => {
    const response = await axios.get("http://localhost:4000/api/patients/getpatientdata", {
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
  
    if (response.data && response.status === 200) {
      return response.data;
    // console.log(response.data)
    }
    
  };

  export const getDoctorPatients = async () => {
    const response = await axios.get("http://localhost:4000/api/doctors/getdoctorpatients",{
        headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
    if (response.data && response.status === 200) {
    return response.data;}
  };

  export const getTodaysAppointments = async () => {
    const response = await axios.get("http://localhost:4000/api/doctors/todays-appointments",{
        headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
    if (response.data && response.status === 200) {
      return response.data;}
  };

  export const getAllPatients = async () => {
    const response = await axios.get("http://localhost:4000/api/admin/getallpatients",{
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
  });
  if (response.data && response.status === 200) {
    return response.data;}
};