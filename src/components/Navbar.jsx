import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const closeNav = () => {
    setNavOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm py-2 px-3 px-lg-5" style={{ minHeight: "85px", zIndex: 1030 }}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNav}>
          <img
            src="/images/logo/mayor.jpeg"
            alt="Mayor Chess Club logo"
            className="rounded"
            style={{ width: "65px", height: "65px", objectFit: "cover" }}
          />
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${navOpen ? "show" : ""}`}>
          <ul className="navbar-nav align-items-lg-center gap-2 gap-lg-3 fw-bold fs-6 pt-3 pt-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link text-uppercase ${location.pathname === "/" ? "active fw-bolder" : ""}`}
                style={{ color: "#284b63" }}
                to="/"
                onClick={closeNav}
              >
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link text-uppercase ${location.pathname === "/team" ? "active fw-bolder" : ""}`}
                style={{ color: "#284b63" }}
                to="/team"
                onClick={closeNav}
              >
                TEAM
              </Link>
            </li>

            <li
              className={`nav-item dropdown custom-nav-dropdown ${dropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                className={`nav-link dropdown-toggle text-uppercase ${
                  location.pathname.startsWith("/tournaments") ? "active fw-bolder" : ""
                }`}
                style={{ color: "#284b63" }}
                to="/tournaments"
                onClick={(e) => {
                  if (window.innerWidth < 992) {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  } else {
                    closeNav();
                  }
                }}
              >
                TOURNAMENTS
              </Link>
              <ul
                className={`dropdown-menu shadow border-0 rounded-3 py-2 ${dropdownOpen ? "show" : ""}`}
                style={{ minWidth: "240px" }}
              >
                <li>
                  <Link
                    className="dropdown-item py-2 px-3 fw-semibold text-mcc-navy"
                    to="/tournaments/chronicles"
                    onClick={closeNav}
                  >
                    Chronicles of Checkmate
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-2 px-3 fw-semibold text-mcc-navy"
                    to="/tournaments/battle-of-minds"
                    onClick={closeNav}
                  >
                    Battle of Minds
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link text-uppercase ${location.pathname === "/achievements" ? "active fw-bolder" : ""}`}
                style={{ color: "#284b63" }}
                to="/achievements"
                onClick={closeNav}
              >
                ACHIEVEMENTS
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link text-uppercase ${location.pathname === "/contact" ? "active fw-bolder" : ""}`}
                style={{ color: "#284b63" }}
                to="/contact"
                onClick={closeNav}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
