import '../../css/CurrentAppointments.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CurrentAppointments({apt}) {
    return (
        <section className="maincountainer">
            <div className="title">
                <h3>Current Appointments</h3>
            </div>
            <div className="sectioncalendar"> 
                <Calendar />
            </div>


            <div className="currentappointments">
            <div className="info">Dr. Smith</div>
            <div className="info">Cardiologist</div>
            <div className="info">{new Date(apt.date).toLocaleDateString("fr")}</div>
            <div className="info">10:00 AM</div>
            <button className="cancel-button">Cancel</button>
        </div>         
        </section>
    );
}


export default CurrentAppointments;