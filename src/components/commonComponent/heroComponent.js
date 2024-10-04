import React from "react";
import { Link } from "react-router-dom";
import "./common.css";
import { FaArrowRight } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import heroFrame from '../../assets/Frame/heroFrame.png';

const HeroComponent = ({
  title,
  description,
  button1Text,
  button2Text,
  imageSrc,
  button1Link,
  button2Link,
}) => {
  return (
    <div className="hero-container mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-content">
              <h1 className="mb-4">{title}</h1>
              <p className="mb-4">{description}</p>
              <div className="hero-buttons mb-4">
                <button className="btn-primary start-now-btn me-3">
                  <Link to={button1Link} className="btn-primary">
                    {button1Text}
                    <FaArrowRight className="ms-4"/>
                  </Link>
                </button>
                <button className="btn-secondary explore-btn">
                  <Link to={button2Link} className="btn-secondary">
                    {button2Text}
                  </Link>
                </button>
              </div>
              <div className="money-back-text"><LuShieldCheck className="me-2"/>14-Day Money-Back Guarantee</div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="hero-image-container">
            <img src={heroFrame} alt="frame" className="hero-frame position-absolute"/>
              <div className="features"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
