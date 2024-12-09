import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./common.css";
import { Offcanvas } from "bootstrap"; // Import the Offcanvas utility from Bootstrap

const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navBanner = document.querySelector(".nav-banner");
      if (window.scrollY > 0) {
        navBanner.classList.add("scrolled");
      } else {
        navBanner.classList.remove("scrolled");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }

      // Manually remove the backdrop if it remains
  const backdrop = document.querySelector('.offcanvas-backdrop');
  if (backdrop) {
    backdrop.remove();
  }
  };


  return (
    <div className="nav-banner">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-xxl mx-5 nav-section">
          <Link className="navbar-brand" to="/">
            <img src='/assets/logo.svg' alt="logo" />
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
                  <img src='/assets/logo.svg' alt="logo" />
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
                    to=""
                  >
                    Hosting <IoIosArrowDown className="arrow-icon"/>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-option">
                      <Link
                        className="dropdown-item"
                        to="/offshore-web-hosting"
                        onClick={handleCloseOffcanvas}
                      >
                        Offshore Hosting
                      </Link>
                    </li>
                    <li className="dropdown-option">
                      <Link
                        className="dropdown-item"
                        to="/offshore-wordpress-hosting/"
                        onClick={handleCloseOffcanvas}
                      >
                        Offshore WordPress
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown pe-4">
                  <Link className="nav-link nav-option dropdown-toggle" to="">
                    VPS <IoIosArrowDown className="arrow-icon"/>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-option">
                      <Link
                        className="dropdown-item"
                        to="/offshore-vps-hosting/"
                        onClick={handleCloseOffcanvas}
                      >
                        Offshore VPS
                      </Link>
                    </li>
                    <li className="dropdown-option">
                      <Link
                        className="dropdown-item"
                        to="/offshore-vps-hosting/windows-rdp/"
                        onClick={handleCloseOffcanvas}
                      >
                        Offshore Windows VPS
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown pe-4">
                  <Link className="nav-link nav-option dropdown-toggle" to="#">
                    Server <IoIosArrowDown className="arrow-icon"/>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-option">
                      <Link
                        className="dropdown-item"
                        to="/offshore-dedicated-servers/"
                        onClick={handleCloseOffcanvas}
                      >
                        Dedicated Server
                      </Link>
                    </li>
                    <li className="dropdown-option">
                      <Link
                        className="dropdown-item"
                        to="/offshore-streaming-server/"
                        onClick={handleCloseOffcanvas}
                      >
                        Streaming Server
                      </Link>
                    </li>
                    <li className="dropdown-option">
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
              <Link to="https://my.qloudhost.com/login" className="" onClick={handleCloseOffcanvas}>
                <button className="btn signIn-btn nav-signIn">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
