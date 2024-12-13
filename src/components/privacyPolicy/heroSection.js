import React from "react";
import Image from "next/image";

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
            
              <Image
                src={imageSrc}
                alt="frame"
                className="hero-frame h-100 w-100"
                width={1000}
                height={1000}
              />
              
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
