import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const FFmpegFeaturesYouGet = () => {


  const featureList = [
    <><apan className='feature-head'>High-Performance Servers</apan>   Equipped with powerful multi-core CPUs and NVMe SSDs for fast video/audio transcoding.</>,
    <><apan className='feature-head'>Optimized for FFmpeg:</apan>  Pre-configured FFmpeg libraries for seamless installation and efficient media processing.</>,
    <><apan className='feature-head'>Scalable Resources</apan> : Easily upgrade CPU, RAM, and storage as your media needs grow with flexibility.</>,
    <><apan className='feature-head'>Full Root Access:</apan>  Complete control over the server environment, allowing custom configurations and full optimization. </>,
    <><apan className='feature-head'>Instant Setup:</apan> Quick and hassle-free server provisioning to get you up and running within minutes. </>,
    <><apan className='feature-head'>Robust Security: </apan>  Built-in DDoS protection, firewalls, and SSL encryption to keep your data and media secure.</>,
    <><apan className='feature-head'>Netherlands Data Center</apan>  Located in the Netherlands for low-latency hosting, ensuring fast, reliable access to your media.</>,
    <><apan className='feature-head'>24/7 Expert Support:</apan>  Round-the-clock technical support to assist with server management and FFmpeg optimization.</>,
    
  ];

  return (
    <div className="container vps-page">
      {/* Heading Section */}
      <div className="text-center my-5">
      
      
      </div>

      {/* Content Section */}
      <div className="row align-items-center vps-features">
      <div className="col-lg-5  mb-4">
      <h2 className=" m-auto mb-3 w-100 vps-feature-heading">What Sets QloudHost Affordable FFmpeg VPS Hosting Apart?</h2>
          <Image
            src='/assets/What-Sets-QloudHost-Affordable-FFmpeg.png'
            alt="VPS Server"
            className="vps-image d-flex m-auto h-100"
            width={1000}
            height={1000}
          />
        </div>
        {/* Features List */}
        <div className="col-lg-7  ">
        
            {featureList.map((feature, index) => (
  <div className="mb-4" key={index}>
    <span>{feature}</span>
  </div>
))}
            <Link
                  href='explore'
                  smooth={true}
                  duration={200}
                  className="btn-primary"
                >
                  <button className="btn-primary start-now-btn me-3">
                  Launch Your Project
                    <FaArrowRight className="ms-4 start-now-icon" />
                  </button>
                </Link>

        </div>
      

        {/* VPS Image Section */}
        
      </div>
    </div>
  );
};

export default FFmpegFeaturesYouGet;
