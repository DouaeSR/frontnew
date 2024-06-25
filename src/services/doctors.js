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

