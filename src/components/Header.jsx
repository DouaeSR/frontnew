import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getInfo } from "../services/global";
import '../css/Header.css'; // Ensure this is imported for styling

function Header() {
  const [info, setInfo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  }

  useEffect(() => {    
    setInfo(getInfo());
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const getProfilePath = () => {
    if (info && getInfo().Type === 'Patient') {
      return '/patient/profile';
    } else if (info && getInfo().Type === 'Doctor') {
      return '/doctor/profiledoc';
    } else {
      return '/';
    }
  }

  return (
    <header>
     <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" to="/">DABS</NavLink>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
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
                        <NavLink className="dropdown-item" to="/doctor/signUp">Doctor</NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/patient/signUp">Patient</NavLink>
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
                        <NavLink className="dropdown-item" to="/doctor/login">Doctor</NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/login">Patient</NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <button type="button" className="user-menu-trigger" onClick={toggleMenu}>
                    <div className="user-avatar">{info.user.firstName.charAt(0)}</div>
                    <div className="user-name">
                      <span>{info.user.firstName}</span>
                      <svg height="16" width="16" role="presentation" aria-hidden="true" alt="" viewBox="0 0 16 16">
                        <path d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </button>
                  {menuOpen && (
                    <div className="user-menu">
                      <NavLink className="navbar-brand" to="/">DABS</NavLink>
                      <p>{info.user.firstName}</p>
                      <p>{info.user.email}</p>
                      <NavLink className="nav-link" to={getProfilePath()}>Profile</NavLink>
                      <hr />
                      <NavLink className="nav-link" to="/" onClick={logout}>LogOut</NavLink>
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