import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const servicesData = [
    {
      id: 1,
      
      title: "Managed Hosting ",
      description: "Experience hassle-free, fully managed hosting with expert support, optimized for high performance during QloudHost's Black Friday deals.",
    },
    {
      id: 1,
     
      title: "Free Website Migration",
      description: "Seamlessly transfer your website to QloudHost without downtime or extra costs—our experts handle everything this Black Friday!",
    },
    {
        id: 1,
        
        title: "Netherlands Location",
        description: "Secure, high-speed servers in the Netherlands for reliable performance and privacy, now at exclusive Black Friday discounts with QloudHost.",
      },
  
  ];

const WhyStableDeals = () => {
  return (
    <div className='service-section'>
      <div className="container my-5 py-5">
        <h2 className="text-center text-white mb-4 m-auto w-100">Why should you Choose QloudHost Black Friday Cyber Monday Deals?</h2>
        {/* <p className="text-center text-white w-75 mb-5 planHead-con m-auto">
        The most popular use cases for streaming include servers that comply with the DMCA for streaming,
        servers that ignore DMCA regulations for streaming, and offshore IPTV servers
        </p> */}

        <div className='row'>
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-12 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm service-card">
                <div className=' d-flex p-4'>
                  {/* <div className="mb-0  text-center me-3">
                    <img src={service.imgUrl} alt='icon' className='streaming-image-icon'/>
                  </div> */}
                  <div>
                    <div className='card-title'>{service.title}</div>
                    <div className='card-text service-desc mb-0'>{service.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
                  href='explore'
                  smooth={true}
                  duration={200}
                  className="btn-primary m-auto d-flex justify-content-center"
                >
                  <button className="btn-primary start-now-btn qloudDeal-btn me-3">
                    Grab Deal Now
                    <FaArrowRight className="ms-4 start-now-icon" />
                  </button>
                </Link>
      </div>
    </div>
  )
}

export default WhyStableDeals;
