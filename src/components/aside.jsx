import { NavLink, Link } from "react-router-dom";
import '../css/Aside.css';
import Profpic from '../images/téléchargement.png';
import { getInfo } from "../services/global";
import { useState, useEffect } from "react";

const Aside = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => { 
    setInfo(getInfo());
  }, []);

  return (
    getInfo() && (
      <div className="sidebaraside">
        {info && getInfo().Type === 'Doctor' ? (
          <>
            <div className="profileaside">
              <img src={Profpic} alt="Profile" className="profile-picaside" />
              <div className="profile-infoaside">
                <>
                  <div className="username">{getInfo().user.firstName}</div>
                  <div className="profile-buttons">
                    <Link to='/doctor/profiledoc'>
                      <button className="profile-button-1">Profile</button>
                    </Link>
                    <Link> <button className="profile-button-2">Notifications</button></Link>
                  </div>
                </>
              </div>
              <hr />
            </div>
           
            <ul className="sidebar-menuaside">
              <li>
                <NavLink to="/doctor/profiledoc">
                  <i className="fa-regular fa-user"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/doctor/patientslist">
                  <i className="fa-regular fa-plus-square"></i> My patients
                </NavLink>
              </li>
              <li>
                <NavLink to="/doctor/appointments" state={{ page: 'Current Appointment' }}>
                  <i className="fa-regular fa-calendar-check"></i> Current Appointments
                </NavLink>
              </li>
              <li>
                <NavLink to="/doctor/appointments" state={{ page: 'Appointment History' }}>
                  <i className="fa-regular fa-calendar-alt"></i> History Appointments
                </NavLink>
              </li>
            </ul>
          </>
        ) : info && getInfo().Type === 'Admin' ? (
          <>
            <div className="profileaside">
              <div className="admin-avatar">A</div>
              <div className="profile-infoaside">
                <div className="username">Admin</div>
                <div className="profile-buttons">
                <Link> <button className="profile-button-2">Notifications</button></Link>
                </div>
              </div>
              <hr />
            </div>
          
            <ul className="sidebar-menuaside">
              <li>
                <NavLink to="/admin/dashboard">
                  <i className="fa fa-dashboard"></i> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/patientslist">
                  <i className="fa fa-users"></i> Patients List
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/doctorslist">
                  <i className="fa fa-users"></i> Doctors List
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/newdoctors">
                  <i className="fa fa-user-plus"></i> New Doctors
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <div className="profileaside">
              <img src={Profpic} alt="Profile" className="profile-picaside" />
              <div className="profile-infoaside">
                <>
                  <div className="username">{getInfo().user.firstName}</div>
                  <div className="profile-buttons">
                    <Link to='/patient/profile'>
                      <button className="profile-button-1">Profile</button>
                    </Link>
                    <Link> <button className="profile-button-2">Notifications</button></Link>
                   
                  </div>
                </>
              </div>
              <hr />
            </div>
            
            <ul className="sidebar-menuaside">
              <li>
                <NavLink to="/patient/home">
                  <i className="fa-regular fa-user"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/patient/newapp">
                  <i className="fa-regular fa-plus-square"></i> Add appointment
                </NavLink>
              </li>
              <li>
                <NavLink to="/patient/appointments" state={{ page: 'Current Appointment' }}>
                  <i className="fa-regular fa-calendar-check"></i> Current Appointments
                </NavLink>
              </li>
              <li>
                <NavLink to="/patient/appointments" state={{ page: 'Appointment History' }}>
                  <i className="fa-regular fa-calendar-alt"></i> History Appointments
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    )
  );
};

export default Aside;