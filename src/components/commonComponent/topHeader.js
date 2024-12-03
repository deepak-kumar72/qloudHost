import React from "react";
import "./common.css";
import { Link } from "react-router-dom";

const TopHeader = () => {
  // const handleTawkToggle = (e) => {
  //   e.preventDefault(); // Prevents default navigation behavior
  //   if (window.Tawk_API && typeof window.Tawk_API.toggle === 'function') {
  //     window.Tawk_API.toggle();
  //   }
  // };
  return (
    <div className="top-nav bg">
      <div className="container-fluid">
        <div className="row text-center p-2 top-content">
          <span>
            <img src="/assets/fireImage.png" alt="fire" className="me-2" />
            Save 15% on Offshore DMCA Ignored VPS + 1 Month Free-<Link to="/dmca-ignored-vps/" className="link-light">
            Grab Now!
            </Link>{" "}
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
