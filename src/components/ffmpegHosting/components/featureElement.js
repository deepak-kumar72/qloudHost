import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


const FeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <Image src='/assets/feature/video-processing.webp' alt="" className="img-fluid" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2>Optimized for Video Processing</h2>
            <p className="">
            FFmpeg Hosting is optimized for seamless video and audio processing, featuring pre-configured FFmpeg libraries and powerful hardware. It’s built to handle demanding transcoding tasks efficiently, ensuring smooth media workflows with minimal latency and maximum performance for your video and audio projects.
            </p>
            <Link href="explore" smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <Image src='/assets/feature/scalable-resource.webp' alt="Super Performing Enterprise-Grade" className="img-fluid" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 order-md-1 feature-element-sec">
            <h2 className="mb-3 w-100">
            Scalable Resources
            </h2>
            <p className="">
            Easily scale your resources as your media needs expand. Whether it’s adding more storage or boosting CPU power, our FFmpeg Hosting ensures your environment evolves seamlessly, adapting to the increasing demands of your growing project. Keep performance high and efficient, no matter how large your media workload becomes.
            </p>
            <Link href="explore" smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureElement;

