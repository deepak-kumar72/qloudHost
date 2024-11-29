
import React from 'react';
import Link from "next/link";

import DedicatedPlan from '../../commonComponent/dedicatedPlan';

const DmcaDedicatedPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className=" plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">DMCA Ignored Dedicated Server Hosting Plans and Prices</h2>
      <p className="text-center mb-5 planHead-con m-auto">DMCA Ignored dedicated servers offer the best performance and the highest level of security for any website or application. Invest in a dedicated server with no resource sharing and experience top-notch performance at an affordable price.
      the cheapest price in the market.</p>
      
        <DedicatedPlan/>
        <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link href="" className="fw-bold">support sales team</Link> is here to help! 
          <Link href="" className="fw-bold">Get in touch</Link> with us today.</span>
        </div>
      </div>
    </div>
  );
};

export default DmcaDedicatedPlan;

  