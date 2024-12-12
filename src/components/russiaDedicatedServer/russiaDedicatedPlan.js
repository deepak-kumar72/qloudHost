
import React from 'react';
import Link from "next/link";
import DedicatedPlan from '../commonComponent/dedicatedPlan';


const RussiaDedicatedPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className=" plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Russia Offshore Dedicated Servers plans</h2>
      <p className="text-center mb-5 planHead-con m-auto">Buy dedicated servers in Russia with powerful specs.  Ideal for hosting websites that require a lot of resources or High Performance.
      the cheapest price in the market.</p>
      
        <DedicatedPlan/>
        
        <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link href="" className="fw-bold">support sales team</Link> is here to help! 
          <Link href="/contact-us/" className="fw-bold">Get in touch</Link> with us today.</span>
        </div>
      </div>
    </div>
  );
};

export default RussiaDedicatedPlan;

  