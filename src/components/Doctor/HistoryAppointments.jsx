// import "../../css/CurrentAppointments.css";



function HistoryAppointments({apt}) {
  return (
    <div className="appointment">
     <div className="info">{apt.IdPatient.firstName} {apt.IdPatient.lastName}</div>
      <div className="info">{new Date(apt.date).toLocaleDateString("fr")}</div>
      <div className="info">{apt.time}</div>
      <div className="status">{apt.status}</div>
    </div>
  );
}

export default HistoryAppointments;
 