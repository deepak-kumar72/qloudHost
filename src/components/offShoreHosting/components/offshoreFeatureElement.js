import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import images from '../../../constants/images';
import { Link } from 'react-router-dom';

const OffshoreFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <img src={images.videoStreaming} alt="" className="img-fluid m-auto" />
          </div>
          <div className="col-md-6 privacyHardware-desc">
            <h2 className='w-100 mb-3'>Simple, Affordable, Hosting You Can Trust</h2>
            <p className="">
              QloudHost makes offshore web hosting easy! You can expect to exceed your performance expectations with our Fastest Nvme SSD servers, unmetered bandwidth, and other features.
              <br />  <br />
              All this at a price you will love – get any shared server up and running in under a minute with QloudHost!
            </p>
            <button className="btn start-now-btn mt-3">
              <Link to="">
                Get Started Now <FaArrowRight className="ms-2" />
              </Link>
            </button>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <img src={images.quality} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-1 privacyHardware-desc">
            <h2 className='mb-3 w-100'>Make Your Website Faster with LiteSpeed</h2>
            <p className="">
              Website Speed is a key factor for growing your site in terms of web visitors, purchase orders, user experience, and SEO.
            </p>
            <p className="">
              QloudHost Offshore web hosting solutions make it possible for your website to run on the LiteSpeed Web server. This makes it fast and easy to access.
            </p>
            <button className="btn start-now-btn mt-3">
              <Link to="">
                Get Started Now <FaArrowRight className="ms-2" />
              </Link>
            </button>
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <img src={images.videoStreaming} alt="" className="img-fluid m-auto" />
          </div>
          <div className="col-md-6 privacyHardware-desc">
            <h2 className='w-100 mb-3'>Free Migration Services</h2>
            <p className="">
              Your website can now be moved for free to QloudHost! Our staff will provide you with a personalized service.
            </p>
            <p className="">
              Our staff will provide personalized service to you with minimal disruption to your website or email services. Everything related to your site is perfectly replicated, reinstalled and reconfigured on the new server.
            </p>
            <button className="btn start-now-btn mt-3">
              <Link to="">
                Get Started Now <FaArrowRight className="ms-2" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffshoreFeatureElement;
