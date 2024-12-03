import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

const FeaturesYouGet = () => {


  const featureList = [
    <p><apan className='feature-head'>DMCA Ignored Data Centers:</apan>  Benefit from secure, DMCA-ignored data centers with cutting-edge infrastructure.</p>,
    <p><apan className='feature-head'>Blazing-Fast Performance:</apan>  Rapid loading times ensure optimal user experience for your website</p>,
    <p><apan className='feature-head'>Unmatched Speed & Features:</apan>  Enjoy top-tier speed with all essential hosting features at your fingertips.</p>,
    <p><apan className='feature-head'>Cost-Effective Hosting:</apan>  Host close to your customers to reduce costs and enhance user experience. </p>,
    <p><apan className='feature-head'>Focus on Your Business:</apan>  Let us manage your servers so you can focus on growth. </p>,
    <p><apan className='feature-head'>Enhanced Security:</apan>  Anti-DDoS protection ensures your data's safety and reliability.</p>,
    <p><apan className='feature-head'>Privacy First:</apan>  Enjoy absolute anonymity with our customer privacy policies.</p>,
    <p><apan className='feature-head'>Tailored Hosting Solutions:</apan> Explore special plans for unique requirements.</p>,
    
  ];

  return (
    <div className="container vps-page">
      {/* Heading Section */}
      <div className="text-center my-5">
      
      
      </div>

      {/* Content Section */}
      <div className="row align-items-center vps-features">
      <div className="col-lg-5  mb-4">
      <h2 className=" m-auto mb-3 w-100 vps-feature-heading">What Sets QloudHost Offshore VPS Hosting Apart?</h2>
          <img
            src='/assets/vpsServer.png'
            alt="VPS Server"
            className="vps-image d-flex m-auto"
            
          />
        </div>
        {/* Features List */}
        <div className="col-lg-7  ">
        
            {featureList.map((feature, index) => (
              <div class="mb-4 ">
              <span key={index}>{feature}</span>
              </div>
            ))}
            <ScrollLink
                  to='explore'
                  smooth={true}
                  duration={200}
                  className="btn-primary"
                >
                  <button className="btn-primary start-now-btn me-3">
                  Launch Your Project
                    <FaArrowRight className="ms-4 start-now-icon" />
                  </button>
                </ScrollLink>

        </div>
      

        {/* VPS Image Section */}
        
      </div>
    </div>
  );
};

export default FeaturesYouGet;
