
  import React from 'react';
  import Link from "next/link";
import DedicatedPlan from '../../commonComponent/dedicatedPlan';

const DedicatedServerPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className=" plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Choose Your Offshore Dedicated Server Hosting plan</h2>
      <p className="text-center mb-5 planHead-con m-auto">Find your Ideal Managed Offshore Dedicated Servers! Get blazing-fast speed, top-notch security, and maximum uptime for your urgent apps. Our 100% DMCA Ignored hosting plans are designed to support your resource-heavy projects perfectly.</p>
      
        <DedicatedPlan/>

        <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link href="" className="fw-bold">support sales team</Link> is here to help! 
          <Link href="/contact-us/" className="fw-bold">Get in touch</Link> with us today.</span>
        </div>
      </div>
    </div>
  );
};

export default DedicatedServerPlan;

  