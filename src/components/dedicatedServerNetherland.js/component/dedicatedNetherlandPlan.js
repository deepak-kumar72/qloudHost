
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import netherlandplansData from './netherlandPlanData';

const DedicatedNetherlandPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Best DMCA Ignored Hosting Server Plans for You!</h2>
      <p className="text-center mb-5 planHead-con m-auto">Get award winning Best Cheap DMCA Ignored hosting and protect your identity on the internet at
      the cheapest price in the market.</p>
      
        <div className="row offshoreVps-plan justify-content-center" id='plan1'>
          {netherlandplansData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
            <div className={`${plan.popular ? "popular-qloudhost-card" : ""} ${plan.bestForStreaming ? "popular-qloudhost-card" : ""}`}>
            
              <div className="card-body offshore-plan-body position-relative">
                {plan.popular && (
                  <div className="popular-badge vps-badge position-absolute">Popular</div>
                )}
                {plan.bestForStreaming && (
                  <div className="popular-badge vps-badge position-absolute">Best for Streaming</div>
                )}
                <div>
                  <h5 className="card-title mt-3 mb-3"><span>{plan.name}</span></h5>
                  <h3 className="card-price vps-plan-price mb-3">{plan.price} <span className="price-unit">/month</span></h3>
                  <p className="save mb-3">{plan.save} <span className="save-price ms-3"><del>{plan.yearlyPrice}</del></span></p>
                  
                  <button className="plan-btn dedicated-plan-btn d-flex justify-content-between mb-4">
                    <Link to={plan.url}>Buy Now</Link> <FaArrowRight className=""/>
                  </button>
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
            </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link to="" className="fw-bold">support sales team</Link> is here to help! 
          <Link to="" className="fw-bold">Get in touch</Link> with us today.</span>
        </div>
      </div>
    </div>
  );
};

export default DedicatedNetherlandPlan;

  