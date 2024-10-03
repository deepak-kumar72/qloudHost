import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import './common.css';

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg  bg-white">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse float-end justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item pe-4 ">
                <Link className="nav-link active " aria-current="page" to="#">
                  Hosting
                </Link>
              </li>

              <li className="nav-item dropdown pe-4 ">
                <Link
                  className="nav-link dropdown-toggle "
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Offshore VPS
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item " to="#">
                      Action
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
                <Link className="nav-link " to="#">
                  Cloud Server
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link className="nav-link " to="#">
                  Affiliate
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link className="nav-link ">About</Link>
              </li>
            </ul>

            <button className="btn signIn-btn">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
