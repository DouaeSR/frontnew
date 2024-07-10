import axios from "axios";


export const getDoctors = async () => {
    const response = await axios.get("http://localhost:4000/api/patients/getdoctors", {
    //   headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
  
    if (response.data && response.status === 200) {
      return response.data;
    // console.log(response.data)
    }
    
  };

  export const getDoctorData = async () => {
    const response = await axios.get("http://localhost:4000/api/doctors/getdoctorsdata", {
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
  
    if (response.data && response.status === 200) {
      return response.data;
    // console.log(response.data)
    }
    
  };
 
  export const getNewDoctors = async () => {
    const response = await axios.get("http://localhost:4000/api/admin/newdoctors", {
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
    if (response.data && response.status === 200) {
      return response.data;
   
    }
    
  };
  export const approveDoctor = async (id) => {
    const response = await axios.patch(`http://localhost:4000/api/admin/approve/${id}`, {
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
    if (response.data && response.status === 200) {
      return response.data;
   
    }
  }
  export const deleteDoctor = async (id) => {
    const response = await axios.delete(`http://localhost:4000/api/admin/delete/${id}`, {
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
    if (response.data && response.status === 200) {
      return response.data;
   
    }
  };
  export const updateDoctorData = async (doctorData) => {
    const response = await axios.put('http://localhost:4000/api/doctors/update', doctorData,{
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}`},
    });
    if (response.data && response.status === 200) {
      return response.data;}
  };
  export const getDoctorsBySpecialization = async (specialization)=> {
    const response = await axios.get(`http://localhost:4000/api/patients/doctorsbyspecialy/${specialization}`, {
      headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` },
    });
    if (response.data && response.status === 200) {
      return response.data;
  }
} 