import React from 'react';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const servicesData = [
  {
    id: 1,
    imgUrl: images.web,
    title: "New Website?",
    description: "Create your website, host it on our servers and scale your business to the next level with just a few clicks!",
    buttonText: "Get Started Now",
    buttonLink: "#",
    iconClass: "bi-globe",
  },
  {
    id: 2,
    imgUrl: images.migration,
    title: "Migration?",
    description: "Not happy with your existing service provider? Transfer your website to our quality services at no cost!",
    buttonText: "Get Started Now",
    buttonLink: "#",
    iconClass: "bi-arrow-repeat",
  },
];

const Services = () => {
  return (
    <div className='service-section'>
    <div className="container  my-5 py-5">
      <h2 className="text-center text-white mb-3 m-auto w-100">We’ve got your new/existing website needs covered!</h2>
      <p className="text-center text-white w-75 mb-5 planHead-con m-auto">
        Experience our superior support, robust infrastructure, and unmatched reliability. We are the trusted choice for DMCA ignored critical websites and apps. Count on us to deliver excellence every step of the way. <strong>Join our satisfied customers today!</strong>
      </p>

      <div className='row'>
        {servicesData.map((service) => (
          <div key={service.id} className="col-md-12 col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className='service-card d-flex p-4'>
                <div className="mb-3">
                  <img src={service.imgUrl} alt='icon' className='pe-3'/>
                </div>
                <div>
                <div className='card-title'>{service.title}</div>
                <div className='card-text service-desc mb-3'>{service.description}</div>
                <div className='btn start-now-btn start-now'>
                <Link to={service.buttonLink}>
                  {service.buttonText} <FaArrowRight className="ms-2"/>
                  </Link>
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
