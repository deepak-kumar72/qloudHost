
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import '../streaming.css';

const streamingplansData = [
    {
      id: 1,
      name: 'Ryzen 9 3900X (12c/24t)',
      price: '$3.50',
      time: '/month',
      yearlyPrice: "$159.99/mo",
      save: "SAVE 30%",
      features: ['3.8 GHz', '64 GB DDR4', '960 GB NVMe SSD', '50 TB Transfer', '1 Gbit Port Speed', '1 IPv4 Address'],
      url: "",
      popular: true
    },
    {
      id: 2,
      name: 'Ryzen 9 3900X (12c/24t)',
      yearlyPrice: "$159.99/mo",
      save: "SAVE 30%",
      features: ['3.8 GHz', '64 GB DDR4', '960 GB NVMe SSD', '50 TB Transfer', '1 Gbit Port Speed', '1 IPv4 Address'],
      url: "",
      onDemand: true
      
    },   
  ];
  

const StreamingServerPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Best DMCA Ignored Hosting Server Plans for You!</h2>
      <p className="text-center mb-5 planHead-con m-auto">Get award winning Best Cheap DMCA Ignored hosting and protect your identity on the internet at
      the cheapest price in the market.</p>
      
        <div className="row qloudHost-plan justify-content-center m-auto" id='plan1'>
          {streamingplansData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-6 mb-4 explore-plan-col">
              <div className="card-body qloud-plan-body position-relative">
                {plan.popular && (
                  <div className="popular-badge streaming-badge position-absolute">Popular</div>
                )}
               
                <div>
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price qloudHostplan-price mb-3">{plan.price} <span className="price-unit">{plan.time}</span></h3>

                  {plan.onDemand && (
                  <div className="best-streaming mb-2">On Demand</div>
                )}

                  <p className="save mb-3">{plan.save} <span className="save-price ms-3"><del>{plan.yearlyPrice}</del></span></p>
                  
                  <button className="plan-btn dedicated-plan-btn d-flex justify-content-between mb-4">
                    <Link to={plan.url}>Buy Now</Link> <FaArrowRight className=""/>
                  </button>
                  <h4 className='mb-3 top-feature'>Top Features</h4>
                  <ul className="list-unstyled mb-4 streaming-server-feature">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2 qloudHostPlan-features">
                        <FaCheck className="check" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamingServerPlan;

  