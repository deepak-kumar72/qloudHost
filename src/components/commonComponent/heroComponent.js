import React from "react";
import { useLocation } from "react-router-dom";
import "./common.css";
import { FaArrowRight } from "react-icons/fa";

import { FaRegCircleCheck } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { MdNotificationsActive } from "react-icons/md";

const HeroComponent = ({
  subTitle,
  title,
  description,
  button1Text,
  imageSrc,
  button1Link,
  moneyBackText,
  options = [],
}) => {
  const location = useLocation();

  const isBlackFridayPage =
    location.pathname === "/deals/black-friday-cyber-monday-web-hosting-deals/";

  return (
    <div className={`hero-container p-50 ${isBlackFridayPage ? "hero-black-friday" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="hero-content">
              {location.pathname !== "/coupons/" && (
                <h4 className="mb-3 hero-subTitle">
                  <MdNotificationsActive className="me-2 sub-title-icon" />
                  {subTitle}
                </h4>
              )}
              <h1 className="mb-4">{title}</h1>
              <p className="mb-4">{description}</p>
              <div className="hero-options-container mb-4">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="option-item d-flex align-items-center mb-2"
                  >
                    <FaRegCircleCheck className="me-2 option-icon" />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
              <div className="hero-buttons mb-4">
                <ScrollLink
                  to={button1Link}
                  smooth={true}
                  duration={200}
                  className="btn-primary"
                >
                  <button className="btn-primary start-now-btn me-3">
                    {button1Text}
                    <FaArrowRight className="ms-4 start-now-icon" />
                  </button>
                </ScrollLink>
              </div>
              <div className="money-back-text">
                
                {moneyBackText}
              </div>
            </div>
          </div>
          <div className="col-md-6 m-auto">
            <div className="hero-image-container position-relative text-end">
              <img src={imageSrc} alt={title} className="hero-frame"  />
              <div className="features"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
