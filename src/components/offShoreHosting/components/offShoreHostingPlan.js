import React from 'react';
import Link from "next/link";
import offshoreplanData from './offshoreHostingPlanData'; // Importing your plan data
import { FaCheck } from "react-icons/fa6";
// import { useEffect } from 'react';
// import { Tooltip } from "bootstrap";

const OffShoreHostingPlan = () => {
  // useEffect(() => {
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  //   tooltipTriggerList.forEach(tooltipTriggerEl => {
  //     new Tooltip(tooltipTriggerEl, {
  //       html: true, // Enable HTML content in tooltip
  //     });
  //   });
  // }, []);

  return (
    <div className="hosting-plan mb-5" id='explore'>
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">Best Cheap Offshore Web Hosting Plans</h2>
        <p className="text-center mb-5 planHead-con m-auto">Browse through our offshore Web Hosting Packages designed for simplicity, High Performance and top-notch security.
          Get started with a plan that suits your requirements the best!</p>

        {/* Pill Navigation */}
        <div className="row nav nav-pills mb-5 plan-group-btn w-50" id="pills-tab" role="tablist">
          <div className="col-4 nav-item px-3" role="presentation">
            <button className="nav-link active choose-plan-btn" id="pills-three-year-tab" data-bs-toggle="pill" data-bs-target="#pills-three-year" type="button" role="tab" aria-controls="pills-three-year" aria-selected="true">3 Year</button>
          </div>
          <div className="col-4 nav-item  px-3" role="presentation">
            <button className="nav-link choose-plan-btn" id="pills-one-year-tab" data-bs-toggle="pill" data-bs-target="#pills-one-year" type="button" role="tab" aria-controls="pills-one-year" aria-selected="false">1 Year</button>
          </div>
          <div className="col-4 nav-item px-3" role="presentation">
            <button className="nav-link choose-plan-btn" id="pills-one-month-tab" data-bs-toggle="pill" data-bs-target="#pills-one-month" type="button" role="tab" aria-controls="pills-one-month" aria-selected="false">1 Month</button>
          </div>
        </div>

        {/* Pill Content */}
        <div className="tab-content" id="pills-tabContent">
          {/* 3 Year Plan */}
          <div className="tab-pane fade show active" id="pills-three-year" role="tabpanel" aria-labelledby="pills-three-year-tab" tabindex="0">
            <div className="row home-plan justify-content-center">
              {offshoreplanData.threeYearPlans.map((plan) => (
                <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
                  <div className={`${plan.popular ? "popular-qloudhost-card position-relative h-100 p-4" : "card-body plan-body position-relative h-100"}`}>
                   
                      {plan.popular && (
                        <div className="qloud-popular-badge position-absolute">Best Value</div>
                      )}

                        <h5 className="card-title text-center mb-3">{plan.name}</h5>
                        <h3 className='text-center starting-at'>Starting At</h3>
                        <h3 className="card-price text-center mb-3">{plan.price} <span className="price-unit">/mo</span></h3>
                        <p className="save">{plan.discount}</p>
                        <p class="save-price mb-3">Renews at {plan.samePrice}/mo</p>

                        {/* <p  className="btn d-flex tooltip-btn justify-content-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title={plan.tooltipContent}>
                  <span className="blink">{plan.freeTooltip}</span>
                  
                </p> */}

                        <ul className="list-unstyled mb-4">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="mb-2 features">
                              <FaCheck className="check" />{feature}
                            </li>
                          ))}
                        </ul><Link href={plan.url}>
                        <button className="plan-btn">
                          Get Started
                        </button></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1 Year Plan */}
          <div className="tab-pane fade" id="pills-one-year" role="tabpanel" aria-labelledby="pills-one-year-tab" tabindex="0">
            <div className="row home-plan justify-content-center">
              {offshoreplanData.oneYearPlans.map((plan) => (
                <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
                  <div className={`${plan.popular ? "popular-qloudhost-card position-relative h-100 p-4" : "card-body plan-body position-relative h-100"}`}>
                      {plan.popular && (
                        <div className="qloud-popular-badge position-absolute">Popular</div>
                      )}
                    
                        <h5 className="card-title text-center mb-3">{plan.name}</h5>
                        <h3 className='text-center starting-at'>Starting At</h3>
                        <h3 className="card-price text-center mb-3">{plan.price} <span className="price-unit">/mo</span></h3>
                        <p className="save">{plan.discount}</p>
                        <p class="save-price mb-3">Renews at {plan.samePrice}/mo</p>
                        <ul className="list-unstyled mb-4">
                          {plan.features.map((feature, index) => (
                            <li key={index} className=" features">
                              <FaCheck className="check" /> {feature}
                            </li>
                          ))}
                        </ul><Link href={plan.url}>
                        <button className="plan-btn">
                          Get Started
                        </button>
                        </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1 Month Plan */}
          <div className="tab-pane fade" id="pills-one-month" role="tabpanel" aria-labelledby="pills-one-month-tab" tabindex="0">
            <div className="row home-plan justify-content-center">
              {offshoreplanData.oneMonthPlans.map((plan) => (
                <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
                  <div className={`${plan.popular ? "popular-qloudhost-card h-100 position-relative p-4" : "card-body plan-body position-relative h-100"}`}>
                      {plan.popular && (
                        <div className=" qloud-popular-badge position-absolute">Popular</div>
                      )}
                        <h5 className="card-title text-center mb-3">{plan.name}</h5>
                        <h3 className='text-center starting-at'>Starting At</h3>
                        <h3 className="card-price text-center mb-3">{plan.price} <span className="price-unit">/mo</span></h3>
                        <p className="save web-save-badge">{plan.discount}</p>
                        <p class="save-price mb-3">Renews at {plan.samePrice}/mo</p>
                        <ul className="list-unstyled mb-4">
                          {plan.features.map((feature, index) => (
                            <li key={index} className=" features">
                              <FaCheck className="check" />{feature}
                            </li>
                          ))}
                        </ul>
                        <Link href={plan.url}>
                        <button className="plan-btn">
                          Get Started
                        </button></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <span className="consult">
          Looking to upgrade resources? Check our
            <Link href="/offshore-wordpress-hosting/" className="fw-bold"> Offshore WordPress Hosting</Link> Plans or Looking for more power? Check out our  <Link href='/offshore-vps-hosting/' className='fw-bold'> Offshore VPS Hosting</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OffShoreHostingPlan;
