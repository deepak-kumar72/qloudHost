import React from 'react';
import Image from "next/image";

function Guarantees({subHeading}) {
  return (
    <div className="container my-5">
      <div className="py-4">
        <h2 className="text-center mb-4 w-100">QloudHost Guarantees</h2>
        <p className="text-center mb-5">{subHeading}</p>
        <div className="row guarantees-box rounded">
          <div className="col-md-4 mb-4 mb-md-0 guarantee-item d-flex">
            <div className="p-3">
              <div className="icon mb-3">
                <Image src='/assets/feature/ssd.svg' alt="SSD Icon"  className='qloudGurantee-img' width={1000} height={1000}/>
              </div>
              <h5>Fastest NVMe SSD</h5>
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
                <Image src='/assets/icon/netherlands.svg' alt="Netherlands Icon" className='qloudGurantee-img' width={1000} height={1000}/>
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
                <Image src='/assets/serviceImg/support.svg' alt="Support Icon" className='qloudGurantee-img' width={1000} height={1000}/>
              </div>
              <h5>24/7 Support</h5>
              <p>
              We have a team of individuals who possess technical expertise and are working tirelessly 24/7 to provide support at every step of your online journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guarantees;
