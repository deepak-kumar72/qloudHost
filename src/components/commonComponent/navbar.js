import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
// import { Offcanvas } from "bootstrap";


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



  return (
    <div className="nav-banner">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-xxl mx-5 nav-section">
          <Link className="navbar-brand" href="/">
            <Image  src='/assets/logo.svg' alt="logo" width={60}
              height={60}/>
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
                <Link  className="navbar-brand" href="/" >
                  {/* <Image  src='/assets/logo.svg' alt="logo" width={1000}
              height={1000}/> */}
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
                    href="#"
                    
                  >
                    Hosting <IoIosArrowDown className="arrow-icon"/>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/offshore-web-hosting"
                        
                      >
                        Offshore Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/offshore-wordpress-hosting/"
                       
                      >
                        Offshore WordPress
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown pe-4">
                  <Link className="nav-link nav-option dropdown-toggle" href="#" >
                    VPS <IoIosArrowDown className="arrow-icon"/>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/offshore-vps-hosting/"
                        
                      >
                        Offshore VPS
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/offshore-vps-hosting/windows-rdp/"
                        
                      >
                        Offshore Windows VPS
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown pe-4">
                  <Link className="nav-link nav-option dropdown-toggle" href="#" >
                    Server <IoIosArrowDown className="arrow-icon"/>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/offshore-dedicated-servers/"
                        
                      >
                        Dedicated Server
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/offshore-streaming-server/"
                        
                      >
                        Streaming Server
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/offshore-video-hosting/"
                        
                      >
                        Video Hosting
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item pe-4">
                  <Link className="nav-link nav-option" href="/affiliates/" >
                    Affiliate
                  </Link>
                </li>

                <li className="nav-item pe-4">
                  <Link className="nav-link nav-option" href="/about/" >
                    About
                  </Link>
                </li>
              </ul>
              <Link href="https://my.qloudhost.com/login" className="" >
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
