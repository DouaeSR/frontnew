import '../../css/CurrentAppointments.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function HistoryAppointments() {
    return (
        <section className="maincountainer">
            <div className="title">
                <h3>History Appointments</h3>
            </div>
            <div className="sectioncalendar"> 
                <Calendar />
            </div>

            <div className="currentappointments">
                <div className="appointment">
                    <p>kaoutar</p>
                    <p>24/08/2024</p>
                    <p>20:00 AM</p>
                    <p>Done</p>
                </div>

                <div className="appointment">
                    <p>kaoutar</p>
                    <p>24/08/2024</p>
                    <p>20:00 AM</p>
                    <p>Done</p>
                </div>
                
            </div>
        </section>
    );
}

export default HistoryAppointments;