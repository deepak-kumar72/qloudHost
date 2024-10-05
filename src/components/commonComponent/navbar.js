import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import './common.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item pe-4">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Hosting
                  </Link>
                </li>

                <li className="nav-item dropdown pe-4">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    // role="button"
                    // data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    Offshore VPS
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/offshoreVps">
                        Offshore VPS
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item pe-4">
                  <Link className="nav-link" to="#">
                    Cloud Server
                  </Link>
                </li>

                <li className="nav-item pe-4">
                  <Link className="nav-link" to="#">
                    Affiliate
                  </Link>
                </li>

                <li className="nav-item pe-4">
                  <Link className="nav-link" to="#">
                    About
                  </Link>
                </li>
              </ul>

              <button className="btn signIn-btn">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
