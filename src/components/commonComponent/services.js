import React from 'react';
// import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Services = ({ servicesData }) => {
  return (
    <div className='service-section'>
      <div className="container  py-5">
        <h2 className="text-center text-white mb-3 m-auto w-100">We’ve got your new/existing website needs covered!</h2>
        <p className="text-center text-white w-75 mb-5 planHead-con m-auto">
          Experience our superior support, robust infrastructure, and unmatched reliability. We are the trusted choice for DMCA ignored critical websites and apps. Count on us to deliver excellence every step of the way. <strong>Join our satisfied customers today!</strong>
        </p>

        <div className='row service-section1'>
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-12 col-lg-6 mb-4">
              <div className="card card-banner h-100 shadow-sm">
                <div className='service-card d-flex p-4'>
                  <div className="mb-3 w-50">
                    <img src={service.imgUrl} alt={service.title} className=' serviceCard-img'/>
                  </div>
                  <div>
                    <div className='card-title'>{service.title}</div>
                    <div className='card-text service-desc mb-3'>{service.description}</div>
                    <div>
                      <a href={service.buttonLink} className='btn start-now-btn start-now'>
                        {service.buttonText} <FaArrowRight className="ms-2"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
