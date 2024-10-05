import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import images from '../../../constants/images';
import { Link } from 'react-router-dom';
import '../offshoreVps.css'

const PrivacyHardwarePage = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <img src={images.privacyImg} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 privacyHardware-desc">
            <h2>Your Privacy is Our Priority!</h2>
            <p className="">
              We understand the value of your privacy and fundamental rights. That’s why we enable you to make your online presence with untraceable footprints and impenetrable security.
            </p>
            <p className="">
              In addition, we provide services based on anonymous offshore hosting that lets you stay anonymous on the internet and guard your data against being tracked.
            </p>
            <p className="">
              So what are you waiting for? Get your offshore hosting today and protect your data privacy with industry-standard security!
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
          <div className="col-md-6 order-md-2 mb-3">
            <img src={images.hardwareImg} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-1 privacyHardware-desc">
            <h2 className='mb-3 w-100'>Super Performing Enterprise-Grade Hardware</h2>
            <p className="">
              No matter how heavy is your website. Experience lightning-fast performance with NVMe SSD storage and the most powerful hardware technology! Along with that, you will get multi-layered security to prevent any unauthorized access to your website.
            </p>
            <p className="">
              Our servers are equipped with a multi-threaded core processor that makes any type of website compatible with the servers.
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
  );
};

export default PrivacyHardwarePage;
