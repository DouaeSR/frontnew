import "../../css/CurrentApp.css";
import axios from 'axios';

function CurrentAppointments({ apt, onCancel }) {
  const handleCancel = async () => { 
    console.log(apt._id)
    try {
      const response = await axios.patch('http://localhost:4000/api/appointments/cancelAppointmentdoctor', {
        appointmentId: apt._id,
      }, {
        headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('info')).token}` }
      });

      if (response.status === 200) {
        onCancel(apt._id); // Notify parent component to update the state
        alert('Appointment canceled successfully');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        console.error(error);
        alert('Error canceling appointment');
      }
    }
  };

  return (
    <div className="appointment">
      <div className="info">{apt.IdPatient.firstName} {apt.IdPatient.lastName}</div>
      <div className="info">{new Date(apt.date).toLocaleDateString("fr")}</div>
      <div className="info">
        {apt.time ? (
          <span>{apt.time}</span>
        ) : (
          <a href={`/doctor/selecttime/${apt._id}`}>Select Time</a>
        )}
      </div>
      {apt.status === 'canceled' ? (
        <div className="cancel-status">Canceled</div>
      ) : (
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      )}
    </div>
  ); 
}

export default CurrentAppointments;