import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import images from '../../../constants/images';
import { Link } from 'react-router-dom';

const VideoHostingFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <img src={images.videoStreaming} alt="" className="img-fluid m-auto" />
          </div>
          <div className="col-md-6 privacyHardware-desc">
            <h2 className='w-100 mb-3'>Video Hosting for Business</h2>
            <p className="">
            QloudHost has deployed multiple offshore hosting servers at the best locations with a dedicated team of onsite technical experts working 24*7 to ensure optimum performance for your website. 
            </p>
            <p className="">
            In addition, our servers are running servers equipped with best-in-class and latest hardware technologies such as powerful SSD storage, latest processors and much more.
            </p>
            <p className="">
            Hence if you are looking for an offshore Adult video hosting service provider to start your video streaming business, then we have bundled up everything for you! 
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
            <h2 className='mb-3 w-100'>High Performance Network</h2>
            <p className="">
            QloudHost has deployed multiple robust servers on the best data centers to provide you with high-speed network communication for ultra-fast loading speed, bufferless streaming and excellent connectivity. 
            </p>
            <p className="">
            One more interesting aspect is low-latency, that means our servers are especially optimized to perform faster even with high-load, making us capable enough to provide maximum uptime!
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

export default VideoHostingFeatureElement;
