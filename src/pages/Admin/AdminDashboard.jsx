import React from "react";
import Layout from "../../components/Layout";
import "../../css/admindash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserMd,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getInfo } from "../../services/global";
import { useEffect } from "react";

function AdmDashboard() {
  useEffect(() => {
    if (!getInfo() || getInfo().Type !== "Admin") {
      window.location.href = "/login";
    }
  })
  return (
    getInfo().Type="Admin" && (
    <Layout>
      <main>
        <div className="welcomeadmin">
          <h3>Welcome admin</h3>
          <p>Here you can find the latest updates of this week</p>

          <div className="overviewdash">
            <Link to='/admin/newdoctors' className="admdashbox">
              <div
                className="icon"
                style={{ color: "#0077b6", fontSize: "24px" }}
              >
                <FontAwesomeIcon icon={faUserMd} />
              </div>

              <div className="text">
                <p>New Doctors</p>
                <p style={{ color: "#0077b6" }}>
                  <strong>5+</strong>
                </p>
                <p>today</p>
              </div>
            </Link>

            <Link to='/admin/patientslist' className="admdashbox">
              <div
                className="icon"
                style={{ color: "#0077b6", fontSize: "24px" }}
              >
                <FontAwesomeIcon icon={faUserPlus} />
              </div>

              <div className="text">
                <p>New Users</p>
                <p style={{ color: "#0077b6" }}>
                  <strong>4+</strong>
                </p>
                <p>today</p>
              </div>
            </Link>

            <Link to='/admin/messages' className="admdashbox">
              <div
                className="icon"
                style={{ color: "#0077b6", fontSize: "24px" }}
              >
                <FontAwesomeIcon icon={faBell} />
              </div>

              <div className="text">
                <p>New Messages</p>
                <p style={{ color: "#0077b6" }}>
                  <strong>2+</strong>
                </p>
                <p>today</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
    )
  );
}

export default AdmDashboard;
