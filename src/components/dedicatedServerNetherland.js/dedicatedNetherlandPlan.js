
import React from 'react';
import Link from "next/link";
import DedicatedPlan from '../commonComponent/dedicatedPlan';


const DedicatedNetherlandPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className=" plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Netherlands Offshore Dedicated Server plans</h2>
      <p className="text-center mb-5 planHead-con m-auto">Buy dedicated servers in Amsterdam, Netherlands with powerful specs.  Ideal for hosting websites that require a lot of resources or High Performance.
      </p>
      
        <DedicatedPlan/>
        <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link href="" className="fw-bold">support sales team</Link> is here to help! 
          <Link href="/contact-us/" className="fw-bold">Get in touch</Link> with us today.</span>
        </div>
      </div>
    </div>
  );
};

export default DedicatedNetherlandPlan;

  