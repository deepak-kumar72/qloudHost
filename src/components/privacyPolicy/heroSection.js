import React from "react";

const HeroSection = ({
    subTitle,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="hero-container ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-item-center m-auto">
            <div className="hero-content">
            <h3 className="hero-subTitle">{subTitle}</h3>
              <h1 className="mb-4">{title}</h1>
              <p className="mb-4">{description}</p>
              
            </div>
          </div>
          <div className="col-md-6 ">
            
              <img
                src={imageSrc}
                alt="frame"
                className="hero-frame"
                
              />
              
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
