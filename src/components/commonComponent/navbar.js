import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./common.css";
import { Offcanvas } from "bootstrap"; // Import the Offcanvas utility from Bootstrap

const Navbar = () => {
  const handleCloseOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-xxl mx-5">
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
                <Link className="navbar-brand" to="/" onClick={handleCloseOffcanvas}>
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
                <li className="nav-item dropdown pe-4">
                  <Link
                    className="nav-link nav-option dropdown-toggle"
                    to="#"
                  >
                    Hosting
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/offshore-web-hosting"
                        onClick={handleCloseOffcanvas}
                      >
                        Offshore Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/offshore-wordpress-hosting/"
                        onClick={handleCloseOffcanvas}
                      >
                        Offshore Wordpress
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown pe-4">
                  <Link className="nav-link nav-option dropdown-toggle" to="#">
                    VPS
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/offshore-vps-hosting/"
                        onClick={handleCloseOffcanvas}
                      >
                        Offshore VPS
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/offshore-vps-hosting/windows-rdp/"
                        onClick={handleCloseOffcanvas}
                      >
                        Offshore Window VPS
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown pe-4">
                  <Link className="nav-link nav-option dropdown-toggle" to="#">
                    Server
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/offshore-dedicated-servers/"
                        onClick={handleCloseOffcanvas}
                      >
                        Dedicated Server
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/offshore-streaming-server/"
                        onClick={handleCloseOffcanvas}
                      >
                        Streaming Server
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/offshore-video-hosting/"
                        onClick={handleCloseOffcanvas}
                      >
                        Video Hosting
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item pe-4">
                  <Link className="nav-link nav-option" to="/affiliates/" onClick={handleCloseOffcanvas}>
                    Affiliate
                  </Link>
                </li>

                <li className="nav-item pe-4">
                  <Link className="nav-link nav-option" to="/about/" onClick={handleCloseOffcanvas}>
                    About
                  </Link>
                </li>
              </ul>
              <Link to="https://my.qloudhost.com/login" className="m-auto" onClick={handleCloseOffcanvas}>
                <button className="btn signIn-btn">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
