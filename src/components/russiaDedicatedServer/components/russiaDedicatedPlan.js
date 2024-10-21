
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import russiaDedicatedPlanData from './russiaDedicatedPlanData';
import { FaArrowRight } from "react-icons/fa";

const RussiaDedicatedPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Russia Offshore Dedicated Servers plans</h2>
      <p className="text-center mb-5 planHead-con m-auto">Buy dedicated servers in Russia with powerful specs.  Ideal for hosting websites that require a lot of resources or High Performance.
      the cheapest price in the market.</p>
      
        <div className="row offshoreVps-plan justify-content-center" id='explore'>
          {russiaDedicatedPlanData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
            <div className={`${plan.popular ? "popular-qloudhost-card position-relative h-100" : "card-body offshore-plan-body position-relative h-100"} ${plan.bestForStreaming ? "popular-qloudhost-card" : ""} ${plan.newServer ? "popular-qloudhost-card" : ""}`}>
                {plan.popular && (
                  <div className=" qloud-popular-badge position-absolute">Popular</div>
                )}
                {plan.newServer && (
                  <div className="new-server qloud-popular-badge position-absolute">New Server</div>
                )}
                {plan.bestForStreaming && (
                  <div className="qloud-streaming-badge position-absolute">Best for Streaming</div>
                )}
                  <h5 className="card-title mt-3 mb-3"><span>{plan.name}</span></h5>
                  <h3 className="card-price vps-plan-price mb-3">{plan.price} <span className="price-unit">/month</span></h3>
                  <p className="save mb-3">{plan.save} <span className="save-price ms-3">Was <del>{plan.yearlyPrice}</del></span></p>
                  <Link to={plan.url} className='dedicated-plan-btn'>
                  <button className="plan-btn dedicated-plan-btn d-flex justify-content-between mb-4">
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
        <div className="text-center mt-3">
          <span className="consult">Looking for high-performance and custom resources? Our friendly <Link to="" className="fw-bold">support sales team</Link> is here to help! 
          <Link to="/contact-us/" className="fw-bold">Get in touch</Link> with us today.</span>
        </div>
      </div>
    </div>
  );
};

export default RussiaDedicatedPlan;

  