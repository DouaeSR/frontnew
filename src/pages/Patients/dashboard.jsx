import "../../css/patienthome.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { getInfo } from "../../services/global";
import { useState, useEffect } from "react";
import { getApointmentsPatient } from "../../services/appointment";

const specializations = [
  "Dermatology",
  "Orthodontics",
  "Psychiatry",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Urology",
  "Obstetrics",
  "Otolaryngology",
];

function PatHome() {
  const [appointments, setAppointments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? specializations.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === specializations.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSpecializationClick = (specialization) => {
    navigate(`/patient/specialitylist/${specialization}`);
  };

  const displayedSpecializations = specializations.slice(currentIndex, currentIndex + 3).concat(
    specializations.slice(0, Math.max(0, currentIndex + 3 - specializations.length))
  );

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
              <div className="arrow" onClick={handleLeftClick}>
                <span>&#60;</span>
              </div>
              {displayedSpecializations.map((specialization, index) => (
                <div
                  className="imgwithtit"
                  key={index}
                  onClick={() => handleSpecializationClick(specialization)}
                >
                  <h4>{specialization}</h4>
                </div>
              ))}
              <div className="arrow" onClick={handleRightClick}>
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