import React from "react";

const HeroSection = ({
    subTitle,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="hero-container mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-content">
            <h3 className="hero-subTitle">{subTitle}</h3>
              <h1 className="mb-4">{title}</h1>
              <p className="mb-4">{description}</p>
              
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

export default HeroSection;
