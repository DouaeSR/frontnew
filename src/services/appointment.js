import axios from "axios";



export const getApointmentsPatient = async () => {
    const response = await axios.get("http://localhost:4000/api/appointments/getAppointmentPatient", {
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
  
    if (response.data && response.status === 200) {
      return response.data;
    // console.log(response.data)
    }
    
  };

export const getApointmentsDoctor = async () => {
    const response = await axios.get("http://localhost:4000/api/appointments/getAppointmentDoctor", {
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
  
    if (response.data && response.status === 200) {
      return response.data;
    // console.log(response.data)
    }
    
  };