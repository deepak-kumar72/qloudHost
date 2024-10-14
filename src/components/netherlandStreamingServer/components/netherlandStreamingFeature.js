import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import images from '../../../constants/images';
import { Link } from 'react-router-dom';

const NetherLandStreamingFeature = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <img src={images.videoStreaming} alt="" className="img-fluid m-auto" />
          </div>
          <div className="col-md-6 privacyHardware-desc">
            <h2 className='w-100 mb-3'>Guaranteed protection in the Netherlands</h2>
            <p className="">
            QloudHost presents a diverse selection of Netherlands Media Streaming Servers featuring cutting-edge hardware. Our servers are finely tuned for robust load balancing and unmetered resources, ensuring your dependable streaming services.
            </p>
            <p className="">
            QloudHost offers user-friendly services with automated features, allowing you to concentrate on your media streaming without concerns about the technical backend. Stream with confidence!
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
            <h2 className='mb-3 w-100'>DMCA Ignored Streaming Server</h2>
            <p className="">
            QloudHost offers top-notch offshore Netherlands servers for global audio and video streaming. Our DMCA-compliant offshore streaming servers are not only cost-effective but also deliver superior speed and reliability compared to other providers.            </p>
            <p className="">
            Our dedicated streaming servers operate on our purpose-built network, meticulously configured for high-quality video streaming, video on demand, Offshore IPTV services, and high-traffic projects. QloudHost’s DMCA-ignored streaming servers are your ideal solution for all your streaming requirements.            </p>
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

export default NetherLandStreamingFeature;
