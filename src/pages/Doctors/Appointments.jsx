
import { useState, useEffect } from "react"; 
import CurrentApp from "../../components/Doctor/CurrentAppointments";
import HistoryApp from "../../components/Doctor/HistoryAppointments";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import { getInfo } from "../../services/global";
import { getApointmentsDoctor } from "../../services/appointment";
  
  
function Appointment() { 
  const toDay = new Date().toJSON().slice(0, 10);
  let location = useLocation();
  const [page, setPage] = useState("Current Appointment");
  const [appointementsData, setAppointementsData] = useState([]);

  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Doctor") {
      window.location.href = "/doctor/login";
    }

    const getData = async () => {
      const data = await getApointmentsDoctor();
      console.log(data);
      setAppointementsData(data);
    };

    getData();
    setPage(location.state ? location.state.page : "Current Appointment");
  }, [location]);
  const handleCancel = (appointmentId) => {
    setAppointementsData(appointementsData.filter(apt => apt._id !== appointmentId));}
  return (
    getInfo().Type="Doctor" && (
      <Layout>
        <main>
          
          {page === "Current Appointment" && (
            <section className="appointments">
              <h3>My current appointments</h3>
              {appointementsData.map(
                (apt) =>
                  apt.date.slice(0, 10) >= toDay && (
                    <CurrentApp key={apt._id} apt={apt} onCancel={handleCancel} />
                  )
              )}
            </section>
          )}

          {page === "Appointment History" && (
            <section className="appointments">
              <h3>Appointments History</h3>
              {appointementsData.map(
                (apt) =>
                  apt.date.slice(0, 10) < toDay && (
                    <HistoryApp key={apt._id} apt={apt} />
                  )
              )}
            </section>
          )}
        </main>
      </Layout>
    )
  );
}

export default Appointment;
