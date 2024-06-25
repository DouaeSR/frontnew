
import { useState, useEffect } from "react";
import CurrentApp from "../../pages/Doctors/CurrentAppointments";
import HistoryApp from "../../pages/Doctors/HistoryAppointments";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import { getInfo } from "../../services/global";
import { getApointmentsDoctor } from "../../services/appointment";
import Calendar from "react-calendar";

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

  return (
    getInfo() && (
      <Layout>
        <main>
          
          {page === "Current Appointment" && (
            <section className="appointments">
              <h3>My current appointments</h3>
              <div className="sectioncalendar"> 
                <Calendar />
              </div>
              {appointementsData.map(
                (apt) =>
                  apt.date.slice(0, 10) >= toDay && (
                    <CurrentApp key={apt._id} apt={apt} />
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
