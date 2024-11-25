
import React from 'react';
import DedicatedPlan from '../../commonComponent/dedicatedPlan';

const VideoHostingPlan= () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Best Offshore Video Hosting Plans at the Lowest Cost!</h2>
      <p className="text-center mb-5 planHead-con m-auto">Get your offshore Adult video hosting server ready at a meagre cost. No hidden charges or conditions applied!</p>
      
        <DedicatedPlan/>
        {/* <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link href="" className="fw-bold">support sales team</Link> is here to help! 
          <Link href="" className="fw-bold">Get in touch</Link> with us today.</span>
        </div> */}
      </div>
    </div>
  );
};

export default VideoHostingPlan;

  