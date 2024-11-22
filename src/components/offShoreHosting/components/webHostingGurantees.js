import React from "react";
import Image from "next/image";

function WebHostingGurantees({title, subHeading }) {
  return (
    <div className="container my-5">
      <div className="p-4">
        <h2 className="text-center mb-4 w-100">{title}</h2>
        <p className="text-center mb-5">{subHeading}</p>
        <div className="row guarantees-box rounded">
          <div className="col-md-4 mb-4 mb-md-0 guarantee-item d-flex">
            <div className="p-3">
              <div className="icon mb-3">
                <Image src='/assets/feature/ssd.svg' alt="SSD Icon" className='qloudGurantee-img' height={1000} width={1000}/>
              </div>
              <h5>Fastest NVMe SSD</h5>
              <p>
                Get Super-fast performance with blazing fast NVMe SSD drive
                storage! Our service comes with guaranteed quality, using
                industry-standard equipment to run our servers.
              </p>
            </div>
            <div className="gurantee-seprator" />
          </div>
          <div className="col-md-4 mb-4 mb-md-0 guarantee-item d-flex">
            <div className="p-3">
              <div className="icon mb-3">
                <Image src='/assets/icon/netherlands.svg' alt="Netherlands Icon" className='qloudGurantee-img' height={1000} width={1000}/>
              </div>
              <h5>Hosted in Netherlands</h5>
              <p>
                We have chosen the best data centers in Netherlands to ensure
                full privacy and security for your website. It helps you bypass
                biased country-specific restrictions!
              </p>
            </div>
            <div className="gurantee-seprator" />
          </div>
          <div className="col-md-4 guarantee-item">
            <div className="vertical-divider"></div>
            <div className="p-3">
              <div className="icon mb-3">
                <Image src='/assets/icon/money-back.svg' alt="Support Icon" className='qloudGurantee-img' height={1000} width={1000}/>
              </div>
              <h5>14 Days Money Back</h5>
              <p>
                We understand the value of your hard-earned money! Get full
                assurance with a 14-day money-back guarantee. And no questions
                will be asked!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebHostingGurantees;
