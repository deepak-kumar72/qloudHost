import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import images from '../../../constants/images';
import { Link } from 'react-router-dom';

const StreamingServerQuality = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <img src={images.videoStreaming} alt="" className="img-fluid m-auto" />
          </div>
          <div className="col-md-6 privacyHardware-desc">
            <h2 className='w-100 mb-3'>Fast and Reliable Offshore Video Streaming Server</h2>
            <p className="">
            QloudHost is offering you a wide range of offshore video streaming servers with the best and latest hardware equipment. Our servers are especially optimized with higher load balancing features and unmetered resources to provide services that you can rely on!  No worries!! If you are a beginner, QloudHost provides you services with automatic features so that you can focus on your video streaming without worrying about the backend part.
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
            <h2 className='mb-3 w-100'>At QloudHost, Quality Matters</h2>
            <p className="">
            Our Cheap offshore streaming servers are running at the best offshore hosting locations with robust hardware equipment and onsite technical experts to ensure that you get quality services and with uncompromised performance
            </p>
            <p className="">
            Hence it doesn’t really matter how much traffic you have! We can confidently manage everything to provide you with best-in-class services with a smooth streaming 
            experience and untraceable security.
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

export default StreamingServerQuality;
