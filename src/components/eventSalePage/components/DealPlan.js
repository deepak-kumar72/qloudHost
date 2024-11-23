import React from 'react';
import offshoreplanData from './offshoreplanData.js'; // Importing your plan data
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import vpsPlanData from './vpsPlanData'; 
// import { FaFreeCodeCamp } from "react-icons/fa";

const DealPlan = () => {
  return (
    <div className="hosting-plan mb-5" id='explore'>
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-4">
         Best Black Friday Cyber Monday Hosting Deals
        </h2>
     <ul class="nav nav-pills plan-group-btn mb-3 w-50 mb-5" id="pills-tab" role="tablist">
  <li class="nav-item col-6 px-3" role="presentation">
    <button class="nav-link active choose-plan-btn" id="pills-vps-tab" data-bs-toggle="pill" data-bs-target="#pills-vps" type="button" role="tab" aria-controls="pills-vps" aria-selected="true">VPS</button>
  </li>
  <li class="nav-item col-6 px-3" role="presentation">
    <button class="nav-link choose-plan-btn" id="pills-dedicated-tab" data-bs-toggle="pill" data-bs-target="#pills-dedicated" type="button" role="tab" aria-controls="pills-dedicated" aria-selected="false">Shared</button>
  </li>

</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-vps" role="tabpanel" aria-labelledby="pills-vps-tab" tabindex="0">
  
  <div className="tab-pane fade show active" id="pills-one-year" role="tabpanel" aria-labelledby="pills-one-year-tab" tabindex="0">
          
          <div
            className="row offshoreVps-plan justify-content-center"
            id="explore"
          >
            {vpsPlanData.oneYearPlans.map((plan) => (
              <div
                key={plan.id}
                className="col-12 col-md-6 col-lg-3   mb-4 explore-plan-col"
              >
                <div
                  className={`${
                    plan.popular
                      ? "popular-qloudhost-card position-relative h-100"
                      : "card-body offshore-plan-body position-relative h-100"
                  }`}
                >
                  {plan.popular && (
                    <div className="popular-badge vps-badge position-absolute">
                      Popular
                    </div>
                  )}
                  <p className='free-badge text-center'>
                  {/* <FaFreeCodeCamp className='me-3 free-icon'/> */}
                  +1 Month free</p>
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price vps-plan-price mb-5">
                    {plan.price} <span className="price-unit">/month</span>
                  </h3>
                  <p className="save save-badge save-deal-badge mb-1">{plan.save}</p>
                  <p className="save-price mb-4">
                    Renews at {plan.yearlyPrice}
                  </p>


                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2 offshoreVps-features">
                        <i className="bi bi-check-circle-fill"></i>
                        <FaCheck className="check" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.url}>
                    <button className="plan-btn vps-plan-btn">Get Started</button>
                  </Link>
                </div>
              </div>
            ))}
         
        </div>
          </div>
  </div>

  <div class="tab-pane fade" id="pills-dedicated" role="tabpanel" aria-labelledby="pills-dedicated-tab" tabindex="0">
  <div className="hosting-plan mb-5" id='explore'>
      <div className="container plan-sec mt-5">
       

      <div className="tab-pane fade show active" id="pills-three-year" role="tabpanel" aria-labelledby="pills-three-year-tab" tabindex="0">
            <div className="row home-plan justify-content-center">
              {offshoreplanData.threeYearPlans.map((plan) => (
                <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
                  <div className={`${plan.popular ? "popular-qloudhost-card position-relative h-100 p-4" : "card-body plan-body position-relative h-100"}`}>
                   
                      {plan.popular && (
                        <div className="qloud-popular-badge position-absolute">Best Value</div>
                      )}
                      <p className='free-badge text-center'>+3 Month free</p>
                        <h5 className="card-title text-center mb-3">{plan.name}</h5>
                        <h3 className='text-center starting-at'>Starting At</h3>
                        <h3 className="card-price text-center mb-5">{plan.price} <span className="price-unit">/mo</span></h3>
                        <p className="save shared-save">{plan.discount}</p>
                        <p class="save-price mb-3">Renews at {plan.samePrice}/mo</p>

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
      

      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default DealPlan
