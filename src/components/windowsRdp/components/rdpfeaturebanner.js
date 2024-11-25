import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const RdpFeatureBanner = () => {
  
  
  
    const featureList = [
      <><apan className='feature-head'>Effortless Upgrades with Zero Downtime:</apan>  Easily upgrade your Offshore Windows VPS plan with minimal downtime. Your data, IP address, and settings stay intact, making transitions seamless.</>,
      <><apan className='feature-head'>High-Speed 1 Gbps to10 Connectivity:</apan>  All our DMCA-ignored Offshore Windows VPS servers offer blazing-fast 1 Gbps-10GBps internet connections, ideal for shared hosting, forex trading, game servers, and various business needs.</>,
      <><apan className='feature-head'>Powerful Hardware for Maximum Performance: </apan>  Our servers are equipped with AMD Epyc or higher processors and at least 256 GB of RAM to ensure top-tier performance.</>,
      <><apan className='feature-head'>Regular Security Updates:</apan> We continuously install the latest updates and patches, keeping your DMCA-ignored Windows VPS secure and resilient against potential threats. </>,
      <><apan className='feature-head'>Remote Desktop Access (RDP):</apan>  Every Offshore Windows VPS plan includes Remote Desktop (RDP) access, allowing you to manage your VPS from anywhere. You also receive full administrative access to install any necessary applications. </>,
      <><apan className='feature-head'>Dedicated IPv4 Address:</apan>   Enjoy a dedicated IPv4 address with your DMCA-ignored Windows VPS. If you need additional IPs, you can request them from select server locations in the Netherlands.</>,
      <><apan className='feature-head'>Windows Server Options: </apan>   Choose between Windows Server 2019 or 2022 as your operating system for a customized hosting experience on your Offshore Windows VPS.</>,
      
    ];
  
    return (
      <div className="container vps-page">
        {/* Heading Section */}
        <div className="text-center my-5">
        
        
        </div>
  
        {/* Content Section */}
        <div className="row align-items-center vps-features">
        <div className="col-lg-5  mb-4">
        <h2 className=" m-auto mb-5 w-100 vps-feature-heading">What Sets QloudHost Offshore Windows VPS Hosting Apart?</h2>
            <Image
              src='/assets/windows-vps.png'
              alt="VPS Server"
              className="vps-image d-flex m-auto"
              width={1000}
              height={1000}
            />
          </div>
          {/* Features List */}
          <div className="col-lg-7  ">
          
              {featureList.map((feature, index) => (
                <div class="mb-4 " key={index}>
                <span >{feature}</span>
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
  

export default RdpFeatureBanner;
