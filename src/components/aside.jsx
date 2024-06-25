import { NavLink } from "react-router-dom";
import '../css/Aside.css'
import Profpic from '../images/téléchargement.png'
import { getInfo } from "../services/global";
import { useState,useEffect } from "react";
const Aside = () => {
 const [info, setInfo] = useState(null);

  useEffect(() => {
    setInfo(getInfo());
  }, []);
  console.log(getInfo())
  return (
   
    <div className="sidebaraside">
      <div className="profileaside">
        <img src={Profpic} alt="Profile" className="profile-picaside" />
        <div className="profile-infoaside">
          {info && (
            <>
              <div className="username">{getInfo().user.firstName}</div>
              <div className="points">100%</div>
            </>
          )}
        </div>
      </div>
      <hr />
      <ul className="sidebar-menuaside">
        {info && getInfo().Type ==='Doctor' ? (
          <>
            <li>
              <NavLink to="/doctor/patientslist">
                <i className="fa-regular fa-plus-square"></i> My patients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctor/appointments"
                state={{ page: 'Current Appointment' }}
              >
                <i className="fa-regular fa-calendar-check"></i> Current Appointments
              </NavLink>
            </li>  
            <li>
              <NavLink
                to="/doctor/appointments"
                state={{ page: 'Appointment History' }}
              >
                <i className="fa-regular fa-calendar-alt"></i> History Appointments
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor/profiledoc">
                <i className="fa-regular fa-user"></i> Profile
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/patient/newapp">
                <i className="fa-regular fa-plus-square"></i> Add appointment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/patient/appointments"
                state={{ page: 'Current Appointment' }}
              >
                <i className="fa-regular fa-calendar-check"></i> Current Appointments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/patient/appointments"
                state={{ page: 'Appointment History' }}
              >
                <i className="fa-regular fa-calendar-alt"></i> History Appointments
              </NavLink>
            </li>
            <li>
              <NavLink to="/patient/profile">
                <i className="fa-regular fa-user"></i> Profile
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default Aside;
