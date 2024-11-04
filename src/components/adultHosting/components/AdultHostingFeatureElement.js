import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import images from '../../../constants/images';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdultHostingFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
    <div className="container">
      {/* Privacy Section */}
      <div className="row align-items-center mb-3">
        <div className="col-md-6 mb-4 text-center">
          <img src={images.easyUpgrade} alt="Easy Upgrade" className="img-fluid m-auto" />
        </div>
        <div className="col-md-6 feature-element-sec">
          <h2 className='w-100 mb-3'>Easy Upgrades</h2>
          <p className="">
          Our VPS services are built on enterprise-level hardware, ensuring that your website operates at optimal performance levels.</p>
          <p className="">
          Combined with innovative software and tuning, your website will load faster, 24/7/365, improving your overall SEO score and global visibility.</p>
          <p className="">
          At any scale, we deliver high performance with our Netherlands Adult VPS & Dedicated Servers. With a single click, you can <Link to='/offshore-dedicated-server/' className='faq-link'>upgrade</Link>  or downgrade your resources at any time.</p>
          <ScrollLink to="explore" smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </ScrollLink>
        </div>
      </div>

      {/* Hardware Section */}
      <div className="row align-items-center mb-3">
        <div className="col-md-6 order-md-2 mb-3 text-center">
          <img src={images.fullDataPrivacy} alt="Data Privacy" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1 feature-element-sec">
          <h2 className='mb-3 w-100'>Full Data Privacy</h2>
          <p className="">
          Ensure Complete Data Privacy with our Offshore DMCA Ignored Hosting experts. Experience a seamless migration of all your Adult websites with our Adult Web Hosting, prioritizing your convenience, and free of charge.
          </p>
          <p className="">
          Experience Full Data Privacy with Our Cutting-Edge Solutions. Safeguard your sensitive information and maintain complete control over your data with our robust privacy measures. Rest easy knowing your privacy is our top priority.
          </p>

        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-md-6 mb-4 text-center">
          <img src={images.highPerformanceAdultHosting} alt="High Performance Adult Hosting" className="img-fluid m-auto" />
        </div>
        <div className="col-md-6 feature-element-sec">
          <h2 className='w-100 mb-3'>
          High Performance Adult Hosting</h2>
          <p className="">
          QloudHost ensures peak performance by optimizing every server, domain, and load. Experience consistent data delivery even during high load times, giving you full control over your data connections. </p>
          <p className="">
          With our exclusive focus on your growing Adult Website’s Dedicated Servers Plans, we guarantee lightning-fast loading for your adult website.
          </p>
          <ScrollLink to="explore" smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </ScrollLink>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdultHostingFeatureElement;
