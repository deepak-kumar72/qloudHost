
import React from 'react';

import DedicatedPlan from '../../commonComponent/dedicatedPlan';

const DedicatedAdultPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Adult Dedicated Server Hosting Plans & Pricing</h2>
      <p className="text-center mb-5 planHead-con m-auto">Unleash your adult website’s potential with our Adult dedicated server hosting plans. Powerful, reliable, and tailored for the industry, choose the perfect solution at competitive pricing.</p>
      
      <DedicatedPlan/>
        {/* <div className="row offshoreVps-plan justify-content-center" id='plan1'>
          {dedicatedAdultPlanData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
            <div className={`${plan.popular ? "popular-qloudhost-card h-100 position-relative" : "h-100 card-body offshore-plan-body position-relative"} ${plan.bestForStreaming ? "popular-qloudhost-card h-100" : ""}`}>
                {plan.popular && (
                  <div className="text-center qloud-popular-badge position-absolute">Popular</div>
                )}
                {plan.bestForStreaming && (
                  <div className="text-center qloud-streaming-badge position-absolute">Best for Streaming</div>
                )}
                
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price vps-plan-price mb-3">{plan.price} <span className="price-unit">/month</span></h3>
                  <p className="save mb-3">{plan.save} <span className="save-price ms-3">was <del> {plan.yearlyPrice}</del></span></p>
                  <Link href={plan.url} className='dedicated-plan-btn'>
                  <button className="plan-btn dedicated-plan-btn   d-flex justify-content-between align-items-center mb-4">
                    Order Now<FaArrowRight className=""/>
                  </button></Link> 
                  <h4 className='mb-3 top-feature'>Top Features</h4>
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2 offshoreVps-features">
                        <FaCheck className="check" /> {feature}
                      </li>
                    ))}
                  </ul>
            </div>
            </div>
          ))}
        </div> */}
        {/* <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link href="" className="fw-bold">support sales team</Link> is here to help! 
          <Link href="" className="fw-bold">Get in touch</Link> with us today.</span>
        </div> */}
      </div>
    </div>
  );
};

export default DedicatedAdultPlan;

  