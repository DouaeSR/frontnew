import "../../css/patienthome.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { getInfo } from "../../services/global";
import { useState, useEffect } from "react";
import { getApointmentsPatient } from "../../services/appointment";
 
function PatHome() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Patient") {
      window.location.href = "/login";
    } else {
      const fetchAppointments = async () => {
        try {
          const data = await getApointmentsPatient();
          const today = new Date().toISOString().slice(0, 10);
          const todayAppointments = data.filter(appointment =>
            appointment.date.slice(0, 10) === today
          );
          todayAppointments.sort((a, b) => new Date(a.date) - new Date(b.date));
          setAppointments(todayAppointments.slice(0, 2));
        } catch (error) {
          console.error('Error fetching appointments:', error);
        }
      };

      fetchAppointments();
    }
  }, []);

  return (
    getInfo().Type === 'Patient' && (
      <Layout>
        <div className="Home">
          <div className="thecountainer">
            <div className="topcontainer">
              <div className="titlewithlink">
                <h4>Today's appointments</h4>
                <div className="seeall">
                  <p>
                    <Link to="/patient/appointments" className="see">
                      See All{" "}
                    </Link>
                  </p>
                </div>
              </div>

              {appointments.map((appointment, index) => (
                <div className="appcountainer" key={index}>
                  <div className="appoidetails">
                    <p className="par">
                      <strong>{appointment.IdDoctor.firstName} {appointment.IdDoctor.lastName}</strong>
                    </p>
                    <p>{new Date(appointment.date).toLocaleDateString()}</p>
                  </div>
                  <div className="btn-container">
                    <button>{appointment.status}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bottomcontainer">
            <h4 className="explore">Explore</h4>
            <p>Find experienced doctors across all specialties</p>
            <div className="specialties-container">
              <div className="arrow">
                <span>&#60;</span>
              </div>
              <div className="imgwithtit">
                <h4>Dermatology</h4>
              </div>
              <div className="imgwithtit">
                <h4>Orthodontics</h4>
              </div>
              <div className="imgwithtit">
                <h4>Psychiatry</h4>
              </div>
              <div className="arrow">
                <span>&#62;</span>
              </div>
            </div>
          </div>
          <div className="floatingcontainer ">
            <p>You have a doctor in your mind?</p>
            <p>You can go find him here.</p>
            <Link to="/patient/newapp"><button className="addapp">Book Now</button></Link>
          </div>
        </div>
      </Layout>
    )
  );
}

export default PatHome;