
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import videoHostingplansData from './videoHostingPlanData';
import { FaArrowRight } from "react-icons/fa";

const VideoHostingPlan= () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Best Offshore Video Hosting Plans at the Lowest Cost!</h2>
      <p className="text-center mb-5 planHead-con m-auto">Get your offshore Adult video hosting server ready at a meagre cost. No hidden charges or conditions applied!</p>
      
        <div className="row offshoreVps-plan justify-content-center gy-2" id='explore'>
          {videoHostingplansData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
            <div className={`${plan.Popular ? "popular-qloudhost-card h-100 position-relative" : "card-body qloudHost-plan-body position-relative h-100"} ${plan.bestForStreaming ? "popular-qloudhost-card" : ""} ${plan.newServer ? "popular-qloudhost-card" : ""}`}>
              {plan.Popular && (
                  <div className=" qloud-popular-badge  position-absolute">Popular</div>
                )}
                {plan.newServer && (
                  <div className="qloud-popular-badge new-server  position-absolute">New Server</div>
                )}
                {plan.bestForStreaming && (
                  <div className=" qloud-streaming-badge position-absolute">Best for Streaming</div>
                )}
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price vps-plan-price mb-3">{plan.price} <span className="price-unit">/month</span></h3>
                  <p className="save mb-3">{plan.save} <span className="save-price ms-3">was<del>{plan.originalPrice}</del></span></p>
                  
                  <Link to={plan.url} class='dedicated-plan-btn'><button className="plan-btn dedicated-plan-btn d-flex justify-content-between mb-4">
                    Buy Now <FaArrowRight className=""/>
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
        </div>
        {/* <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link to="" className="fw-bold">support sales team</Link> is here to help! 
          <Link to="" className="fw-bold">Get in touch</Link> with us today.</span>
        </div> */}
      </div>
    </div>
  );
};

export default VideoHostingPlan;

  