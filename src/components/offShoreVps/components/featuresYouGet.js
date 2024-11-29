import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const FeaturesYouGet = () => {
  const featureList = [
    <><span className='feature-head'>DMCA Ignored Data Centers:</span> Benefit from secure, DMCA-ignored data centers with cutting-edge infrastructure.</>,
    <><span className='feature-head'>Blazing-Fast Performance:</span> Rapid loading times ensure optimal user experience for your website.</>,
    <><span className='feature-head'>Unmatched Speed & Features:</span> Enjoy top-tier speed with all essential hosting features at your fingertips.</>,
    <><span className='feature-head'>Cost-Effective Hosting:</span> Host close to your customers to reduce costs and enhance user experience.</>,
    <><span className='feature-head'>Focus on Your Business:</span> Let us manage your servers so you can focus on growth.</>,
    <><span className='feature-head'>Enhanced Security:</span> Anti-DDoS protection ensures your data&apos;s safety and reliability.</>,
    <><span className='feature-head'>Privacy First:</span> Enjoy absolute anonymity with our customer privacy policies.</>,
    <><span className='feature-head'>Tailored Hosting Solutions:</span> Explore special plans for unique requirements.</>,
  ];

  return (
    <div className="container vps-page">
      {/* Heading Section */}
      <div className="text-center my-5">
      </div>

      {/* Content Section */}
      <div className="row align-items-center vps-features">
        <div className="col-lg-5 mb-4">
          <h2 className="m-auto mb-3 w-100 vps-feature-heading">What Sets QloudHost Offshore VPS Hosting Apart?</h2>
          <Image
            src='/assets/vpsServer.png'
            alt="VPS Server"
            className="vps-image d-flex m-auto"
            width={1000}
            height={1000}
          />
        </div>

        {/* Features List */}
        <div className="col-lg-7">
          {featureList.map((feature, index) => (
            <div className="mb-4" key={index}> {/* Added key here */}
              {feature}
            </div>
          ))}
          <Link href='#explore'>
            <button className="btn-primary start-now-btn me-3">
              Launch Your Project
              <FaArrowRight className="ms-4 start-now-icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesYouGet;
