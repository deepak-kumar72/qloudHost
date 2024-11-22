import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const sectionsData = [
    {
      title: "Fast and reliable servers",
      description: [
        "We use only top-quality A-grade hardware from top brands such like AMD as well as intel for your server that is dedicated, ensuring you with the best reliability and performance."
      ],
    },
    {
      title: "Easy management",
      description: [
        "We offer our servers with an administration panel. The control panel can restart, set up your server, and much more, to allow you to manage your server however you wish."
      ],
    },
    {
        title: "Dutch Servers",
        description: [
          "QloudHost's servers are hosted in Amsterdam, Netherlands. This guarantees that your connection to the internet is reliable and speedy and that your information is safe to store at our secure data centres."
        ],
      },
      {
        title: "Fastest NVMe SSD",
        description: [
          "Get Super-fast performance with blazing-fast NVMe SSD drive storage! Our service comes with guaranteed qulity that’s why we use industry-standard equipment to run our servers."
        ],
      }
  ];

  const featuresData = [
    "Enterprise-Grade Infrastructure",
    "99.9% uptime guarantee",
    "IPv4 and IPv6 connectivity",
    "Complete Privacy and Security",
    "Realtime network monitoring",
    "Reliable hardware",
    "Stable global connectivity",
    "Fast and effective support",
    "Attractive pricing",
    "Easy control panel",
  ];

const EnterpriseGrade = ({heading, subHeading}) => {
  return (
    <div className='service-section'>
      <div className="container my-5 py-5">
        <h2 className="text-center text-white mb-3 m-auto w-100">
        {heading}</h2>
        <p className="text-center text-white mb-4 planHead-con m-auto">{subHeading}
        </p>
        <div className='mb-3'>
        <p className="text-white grade-opt">
              {featuresData.map((feature, index) => (
                <span key={index} className="d-block">
                  ✓ {feature}
                </span>
              ))}
            </p>
        </div>

        <div className='row'>
          {sectionsData.map((section, index) => (
            <div key={index} className="col-md-12 col-lg-6 mb-4">
              <div className="card h-100 shadow-sm AffordableCon-card d-flex p-3">
                    <div className='affordable-card-title'>{section.title}</div>
                    <div className='card-text affordable-card-desc'>{section.description}</div>
              </div>
            </div>
          ))}
        </div>
        <ScrollLink
                  to='explore'
                  smooth={true}
                  duration={200}
                  className="btn-primary m-auto d-flex justify-content-center"
                >
                  <button className="btn-primary start-now-btn enterprise-btn me-3">
                    Get Started Now
                    <FaArrowRight className="ms-4 start-now-icon"/>
                  </button>
                </ScrollLink>
      </div>
    </div>
  );
};


export default EnterpriseGrade
