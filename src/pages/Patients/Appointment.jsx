
import { useState, useEffect } from "react";
import CurrentApp from "../../components/Patients/CurrentApp";
import HistoryApp from "../../components/Patients/HistoryApp";
import { useLocation } from "react-router-dom";

import { getInfo } from "../../services/global";
import { getApointmentsPatient } from "../../services/appointment";
import Layout from "../../components/Layout";

function Appointment() {
  const toDay = new Date().toJSON().slice(0, 10);
  let location = useLocation();
  const [page, setPage] = useState("Current Appointment");
  const [appointementsData, setAppointementsData] = useState([]);

  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Patient") {
      window.location.href = "/login";
    }

    const getData = async () => {
      const data = await getApointmentsPatient();
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
