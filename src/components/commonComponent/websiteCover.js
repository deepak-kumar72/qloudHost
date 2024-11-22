import React from 'react';
// import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Image from "next/image";

const WebsiteCover = () => {
  // Define the array of service data
  const servicesData = [
    {
      id: 1,
      imgUrl: '/assets/feature/website.svg', // Replace with the actual image path
      title: 'New Website',
      description: ["Immediate Activation", "Free installation by a specialist", "FREE Privacy Protection", "Step by step tutorials", "24/7/365 Premium Support",],
      buttonLink: '#hostingPlan', 
      buttonText: 'Get Started',
    },
    {
      id: 2,
      imgUrl: '/assets/icon/existing-website.svg',
      title: 'Existing Website',
      description: ["Free transfer by a specialist", "Zero downtime", "Free databases transfer", "Free Setup", "24/7/365 Premium Support",],
      buttonLink: 'https://my.qloudhost.com/submitticket.php?step=2&deptid=2', 
      buttonText: 'Get Started',
    },
  ];

  return (
    <div className='service-section'>
      <div className="container py-5">
        <h2 className="text-center text-white mb-4 m-auto w-100">We&apos;ve got your new or existing website needs covered!</h2>

        <div className='row service-section1'>
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-12 col-lg-6 mb-4">
              <div className="card card-banner h-100 shadow-sm">
                <div className='service-card d-flex p-3'>
                  <div className="mb-3 w-25">
                    <Image src={service.imgUrl} alt={service.title} className='serviceCard-img' width={1000}
              height={1000}/>
                  </div>
                  <div>
                    <div className='card-title'>{service.title}</div>
                    {service.description.map((feature, index)=>(
                        <div key={index} className='card-text service-desc mb-1'><FaCheck className='me-2 cover-opt'/>{feature}</div>
                    ))}
                    
                    <div>
                      <Link to={service.buttonLink} className='btn start-now-btn start-now mt-3'>
                        {service.buttonText} <FaArrowRight className="ms-2" />
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

export default WebsiteCover;
