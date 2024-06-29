function HistoryApp({ apt }) {
  return (
    <div className="appointment">
      <div className="info">Dr. {apt.IdDoctor.lastName}</div>
      <div className="info">{apt.IdDoctor.specialization}</div>
      <div className="info">{new Date(apt.date).toLocaleDateString("fr")}</div>
      <div className="info">10 AM</div> <div className="status">Done</div>
    </div>
  );
}

export default HistoryApp;
