import React from 'react';
import images from '../../../constants/images';
import '../streaming.css';

function Guarantees({subHeading}) {
  return (
    <div className="container my-5">
      <div className="p-4">
        <h2 className="text-center mb-4 w-100">QloudHost Guarantees</h2>
        <p className="text-center mb-5">{subHeading}</p>
        <div className="row guarantees-box rounded">
          <div className="col-md-4 mb-4 mb-md-0 guarantee-item d-flex">
            <div className="p-3">
              <div className="icon mb-3">
                <img src={images.ssd} alt="SSD Icon" />
              </div>
              <h5>Fastest SSD Servers</h5>
              <p>
                Get Super-fast performance with blazing fast NVMe SSD drive storage! Our service comes
                with guaranteed quality, using industry-standard equipment to run our servers.
              </p>
            </div>
            <div className='gurantee-seprator'/>
          </div>
          <div className="col-md-4 mb-4 mb-md-0 guarantee-item d-flex">
            <div className="p-3">
              <div className="icon mb-3">
                <img src={images.neitherland} alt="Netherlands Icon" />
              </div>
              <h5>Hosted in Netherlands</h5>
              <p>
                We have chosen the best data centers in Netherlands to ensure full privacy and security for
                your website. It helps you bypass biased country-specific restrictions!
              </p>
            </div>
            <div className='gurantee-seprator'/>
          </div>
          <div className="col-md-4 guarantee-item">
            <div className="vertical-divider"></div>
            <div className="p-3">
              <div className="icon mb-3">
                <img src={images.support} alt="Support Icon" />
              </div>
              <h5>24/7 Support</h5>
              <p>
                Our team of experts is available 24/7 to provide technical expertise and support for every
                step of your online journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guarantees;
