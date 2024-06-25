import '../../css/CurrentAppointments.css'
function CurrentApp({apt}) {
    return (
            
        <div className="appointment">
            <div className="info">Dr. Smith</div>
            <div className="info">Cardiologist</div>
            <div className="info">{new Date(apt.date).toLocaleDateString("fr")}</div>
            <div className="info">10:00 AM</div>
            <button className="cancel-button">Cancel</button>  
        </div>         
   
     
    );
  }
  
  export default CurrentApp;