import "../../css/CurrentApp.css";

import "react-calendar/dist/Calendar.css";

function CurrentAppointments({ apt }) {
  return (
    <div className="appointment">
      <div className="info">{apt.IdPatient.firstName} {apt.IdPatient.lastName}</div>
      <div className="info">{new Date(apt.date).toLocaleDateString("fr")}</div>
      <div className="info">10:00 AM</div>
      <button className="cancel-button">Cancel</button>
    </div>
  );
}

export default CurrentAppointments; 
