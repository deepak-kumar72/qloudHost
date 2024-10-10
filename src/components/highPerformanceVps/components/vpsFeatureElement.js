import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import images from '../../../constants/images';
import { Link } from 'react-router-dom';

const VpsFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
    <div className="container">
      {/* Privacy Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 text-center">
          <img src={images.videoStreaming} alt="" className="img-fluid m-auto" />
        </div>
        <div className="col-md-6 privacyHardware-desc">
          <h2 className='w-100 mb-3'>
          Lighting Fast Loading Speed</h2>
          <p className="">
          Speed is a simple yet powerful benefit you’ll enjoy with our high performance VPS hosting. A quick-loading website means your competitors won’t stand a chance at wooing away your potential customers.
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
          <h2 className='mb-3 w-100'>Top-notch Security</h2>
          <p className="">
          We rely on KVM virtualisation platforms, known for their top-notch security. Your Virtual Machine is tucked safely in a secure jail environment, ensuring that your workload remains private and inaccessible to other virtual servers on the same node. Rest easy; your data is safe with us!
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
          <h2 className='w-100 mb-3'>99.99% Uptime Guarantee</h2>
          <p className="">
          You can count on a 99.99% uptime guarantee with our high performance VPS hosting service! Our virtual private servers are equipped with top-notch SSD storage, ensuring smooth and flawless performance.
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

export default VpsFeatureElement;
