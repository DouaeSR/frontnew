import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getInfo } from "../services/global";
import "../css/Header.css"; // Ensure this is imported for styling

function Header() {
  const [info, setInfo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    setInfo(getInfo());
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const getProfilePath = () => {
    if (info && info.Type === "Patient") {
      return "/patient/profile";
    } else if (info && info.Type === "Doctor") {
      return "/doctor/profiledoc";
    } else {
      return "/";
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            type="button"
            className="user-menu-trigger"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <svg height="32" width="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,6H21A1,1 0 0,1 22,7V8A1,1 0 0,1 21,9H3A1,1 0 0,1 2,8V7A1,1 0 0,1 3,6M3,11H21A1,1 0 0,1 22,12V13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13V12A1,1 0 0,1 3,11M3,16H21A1,1 0 0,1 22,17V18A1,1 0 0,1 21,19H3A1,1 0 0,1 2,18V17A1,1 0 0,1 3,16Z"
              />
            </svg>
          </button>
          <NavLink className="navbar-brand" to="/">
            DABS
          </NavLink>
          {menuOpen && (
            <div className="menu-dropdown">
              {info ? (
                getInfo().Type === "Admin" ? (
                  <>
                    <div className="dropdown-item">
                      <i className="fa fa-home"></i>
                      <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                        Home
                      </NavLink>
                    </div>
                    <hr />
                    <div className="dropdown-item">
                      <i className="fa fa-dashboard"></i>
                      <NavLink className="nav-link" to="/admin/dashboard" onClick={toggleMenu}>
                        Dashboard
                      </NavLink>
                    </div>
                    <hr />
                    <div className="dropdown-item">
                      <i className="fa fa-users"></i>
                      <NavLink className="nav-link" to="/admin/userslist" onClick={toggleMenu}>
                        Users List
                      </NavLink>
                    </div>
                    <hr />
                    <div className="dropdown-item">
                      <i className="fa fa-envelope"></i>
                      <NavLink className="nav-link" to="/admin/messages" onClick={toggleMenu}>
                        Messages
                      </NavLink>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dropdown-item">
                      <i className="fa fa-home"></i>
                      <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                        Home
                      </NavLink>
                    </div>
                    <hr />
                    <div className="dropdown-item">
                      <i className="fa fa-calendar"></i>
                      <NavLink
                        className="nav-link"
                        to={
                          info && getInfo().Type === "Doctor"
                            ? "/doctor/appointments"
                            : "/patient/appointments"
                        }
                        onClick={toggleMenu}
                      >
                        Appointments
                      </NavLink>
                    </div>
                    <hr />
                    {info && getInfo().Type === "Patient" ? (
                      <div className="dropdown-item">
                        <i className="fa-regular fa-plus-square" />
                        <NavLink
                          className="nav-link"
                          to="/patient"
                          onClick={toggleMenu}
                        >
                          Add appointment
                        </NavLink>
                      </div>
                    ) : (
                      <div className="dropdown-item">
                        <i className="fa fa-question-circle"></i>
                        <NavLink
                          className="nav-link"
                          to="/doctor/availablity"
                          onClick={toggleMenu}
                        >
                          My availability
                        </NavLink>
                      </div>
                    )}
                    <hr />
                    <div className="dropdown-item">
                      <i className="fa fa-question-circle"></i>
                      <NavLink className="nav-link" to="/help" onClick={toggleMenu}>
                        Help
                      </NavLink>
                    </div>
                    <hr />
                    <div className="dropdown-item">
                      <i className="fa-solid fa-circle-info"></i>
                      <NavLink
                        className="nav-link"
                        to="/aboutus"
                        onClick={toggleMenu}
                      >
                        About Us
                      </NavLink>
                    </div>
                  </>
                )
              ) : (
                <>
                  <div className="dropdown-item">
                    <i className="fa fa-home"></i>
                    <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                      Home
                    </NavLink>
                  </div>
                  <hr />
                  <div className="dropdown-item">
                    <i className="fa fa-search"></i>
                    <NavLink
                      className="nav-link"
                      to="/finddoctor"
                      onClick={toggleMenu}
                    >
                      Find Doctor
                    </NavLink>
                  </div>
                  <hr />
                  <div className="dropdown-item">
                    <i className="fa fa-question-circle"></i>
                    <NavLink className="nav-link" to="/help" onClick={toggleMenu}>
                      Help
                    </NavLink>
                  </div>
                  <hr />
                  <div className="dropdown-item">
                    <i className="fa-solid fa-circle-info"></i>
                    <NavLink
                      className="nav-link"
                      to="/aboutus"
                      onClick={toggleMenu}
                    >
                      About Us
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          )}
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto">
              {!info ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SignUp
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <NavLink className="dropdown-item" to="/doctor/signUp">
                          Doctor
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/patient/signUp">
                          Patient
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      LogIn
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <NavLink className="dropdown-item" to="/doctor/login">
                          Doctor
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/login">
                          Patient
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/admin/login">
                          Admin
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <button
                    type="button"
                    className="user-menu-trigger"
                    onClick={toggleUserMenu}
                  >
                    <div className="user-avatar">
                      {getInfo().Type === "Admin" ? "A" : info.user.firstName.charAt(0)}
                    </div>
                    <div className="user-name">
                      <span>{getInfo().Type === "Admin" ? "Admin" : info.user.firstName}</span>
                      <svg
                        height="16"
                        width="16"
                        role="presentation"
                        aria-hidden="true"
                        alt=""
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  {userMenuOpen && (
                    <div className="user-menu">
                      <NavLink className="navbar-brand" to="/">
                        DABS
                      </NavLink>
                      <p>{getInfo().Type === "Admin" ? "Admin" : info.user.firstName}</p>
                      <p>{info.user.email}</p>
                      {info.Type !== "Admin" && (
                        <>
                          <NavLink className="nav-link" to={getProfilePath()}>
                            Profile
                          </NavLink>
                          <hr />
                        </>
                      )}
                      <button className="logout-button" onClick={logout}>
                        Logout
                      </button>
                    </div>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;