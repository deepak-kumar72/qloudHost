import React from "react";
import { Link } from "react-router-dom";
import "./common.css";
import { FaArrowRight } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";

const HeroComponent = ({
  title,
  description,
  button1Text,
  button2Text,
  imageSrc,
  button1Link,
  button2Link,
  options=[], // New prop for the options
}) => {
  return (
    <div className="hero-container mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-content">
            
              <h1 className="mb-4">{title}</h1>
              <p className="mb-4">{description}</p>
              <div className="hero-options-container mb-4">
                {options.map((option, index) => (
                  <div key={index} className="option-item d-flex align-items-center mb-2">
                  <FaRegCircleCheck className="me-2 option-icon" />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
              <div className="hero-buttons mb-4">
                <a href={button1Link} className="btn-primary">
                  <button className="btn-primary start-now-btn me-3">
                    {button1Text}
                    <FaArrowRight className="ms-4" />
                  </button>
                </a>
                <button className="btn-secondary explore-btn">
                  <Link to={button2Link} className="btn-secondary">
                    {button2Text}
                  </Link>
                </button>
              </div>
              <div className="money-back-text">
                <LuShieldCheck className="me-2" />
                14-Day Money-Back Guarantee
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="hero-image-container">
              <img
                src={imageSrc}
                alt="frame"
                className="hero-frame position-absolute"
              />
              <div className="features"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
