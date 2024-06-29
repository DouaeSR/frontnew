// import "../../css/CurrentAppointments.css";



function HistoryAppointments({apt}) {
  return (
    <div className="appointment">
     <div className="info">{apt.IdPatient.firstName} {apt.IdPatient.lastName}</div>
      <div className="info">{new Date(apt.date).toLocaleDateString("fr")}</div>
      <div className="info">10:00 AM</div>
      <div className="status">Done</div>
    </div>
  );
}

export default HistoryAppointments;
 