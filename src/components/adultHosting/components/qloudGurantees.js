import React from 'react';
import Image from "next/image";

function QloudGuarantees({subHeading}) {
  return (
    <div className="container my-5">
      <div className="py-4">
        <h2 className="text-center mb-4 w-100">QloudHost Guarantees</h2>
        <p className="text-center mb-5">{subHeading}</p>
        <div className="row guarantees-box rounded">
          <div className="col-md-4 mb-4 mb-md-0 guarantee-item d-flex">
            <div className="p-3">
              <div className="icon mb-3">
                <Image src='/assets/icon/pre-install-os.svg' alt="SSD Icon" className='qloudGurantee-img' width={1000} height={1000}/>
              </div>
              <h5>Pre-Installed OS</h5>
              <p>
              Get on Demand Pre-Installed OS of Your Choice Optimized for Windows and Linux.To ensure compatibility and great performance, the servers we utilise are tested against a variety of Windows and Linux Server distributions.
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
                <Image src='/assets/icon/money-back.svg' alt="Support Icon" className='qloudGurantee-img' width={1000} height={1000}/>
              </div>
              <h5>14 Days Money Back</h5>
              <p>
              We understand the value of your hard-earned money! Get full assurance with a 14-day money-back guarantee. And no questions will be asked!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QloudGuarantees;