import { NavLink } from "react-router-dom";
import '../css/Aside.css'
import Profpic from '../images/téléchargement.png'
const Aside = () => {
  return (
    <div className="sidebaraside">
      <div className="profileaside">
        <img src={Profpic} alt="Profile " className="profile-picaside"/>
        <div className="profile-infoaside">
          <div className="username">JohnDoe123</div>
          <div className="points">100% </div>
        </div>
      </div>
      <hr />
      <ul className="sidebar-menuaside">
      <li>
          <NavLink to="/patient/newapp">
            <i className="fa-regular fa-plus-square"></i> Add appointment
          </NavLink>
        </li>
        <li>
        <NavLink
            to={"/patient/appointments"}
            state={{ page: "Current Appointment" }}
          >
            <i className="fa-regular fa-calendar-check"></i> Current
            Appointments
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to={"/patient/appointments"}
              state= {{ page: "Appointment History" }}
            
          >
            <i className="fa-regular fa-calendar-alt"></i> history Appointments
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/profile">
            <i className="fa-regular fa-user"></i> profile
          </NavLink>
        </li>
      </ul>
      <p>2023</p>
    </div>
  );
};

export default Aside;
