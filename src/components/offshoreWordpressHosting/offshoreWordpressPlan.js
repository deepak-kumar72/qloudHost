import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";


const OffWordpressPlan = ({data}) => {
  
  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div></div>;
  }
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
          Powerfull Offshore WordPress Hosting Plans
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
          Grow your business with hassle-free Cheap Offshore WordPress Hosting,
          reliable performance. Our WordPress-optimized hosting is designed to
          scale as your website grows.
        </p>

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


        <div className="tab-content" id="pills-tabContent">
          {/* 3 Year Plan */}
          <div className="tab-pane fade show active" id="pills-three-year" role="tabpanel" aria-labelledby="pills-three-year-tab" tabindex="0">
          <div className="row home-plan justify-content-center" id="explore">
          {data.wordpressPlan.threeYearPlans.map((plan) => (
            <div
              key={plan.id}
              className="col-12 col-md-6 col-lg-4  mb-4 explore-plan-col"
            >
              <div
                className={`${
                  plan.popular ? "popular-qloudhost-card h-100" : "h-100"
                }`}
              >
                <div className="card-body plan-body position-relative">
                  {plan.popular && (
                    <div className="popular-badge position-absolute">
                      Popular
                    </div>
                  )}
                  <div className="">
                    <h5 className="card-title mb-3">{plan.title}</h5>
                    <p className="card-text plan-desc mb-3">
                      {plan.description}
                    </p>
                    <h3 className="card-price mb-3">
                      {plan.price} <span className="price-unit">/month</span>
                    </h3>
                    
                      <p className="save mb-1">{plan.save}</p>
                      <p className="save-price mb-4">
                        Renews at {plan.originalPrice}
                      </p>
                    
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="mb-2 features wordpress-features"
                        >
                          <i className="bi bi-check-circle-fill"></i>
                          <FaCheck className="check" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={plan.url}>
                      <button className="plan-btn">Get Started</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>

          {/* 1 Year Plan */}
          <div className="tab-pane fade" id="pills-one-year" role="tabpanel" aria-labelledby="pills-one-year-tab" tabindex="0">
          <div className="row home-plan justify-content-center" id="explore">
          {data.wordpressPlan.oneYearPlans.map((plan) => (
            <div
              key={plan.id}
              className="col-12 col-md-6 col-lg-4   mb-4 explore-plan-col"
            >
              <div
                className={`${
                  plan.popular ? "popular-qloudhost-card h-100" : "h-100"
                }`}
              >
                <div className="card-body plan-body position-relative">
                  {plan.popular && (
                    <div className="popular-badge position-absolute">
                      Popular
                    </div>
                  )}
                  <div className="">
                    <h5 className="card-title mb-3">{plan.title}</h5>
                    <p className="card-text plan-desc mb-3">
                      {plan.description}
                    </p>
                    <h3 className="card-price mb-3">
                      {plan.price} <span className="price-unit">/month</span>
                    </h3>
                    <p className="save mb-1">{plan.save}</p>
                      <p className="save-price mb-4">
                        Renews at {plan.originalPrice}
                      </p>

                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="mb-2 features wordpress-features"
                        >
                          <i className="bi bi-check-circle-fill"></i>
                          <FaCheck className="check" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={plan.url}>
                      <button className="plan-btn">Get Started</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>

          {/* 1 Month Plan */}
          <div className="tab-pane fade" id="pills-one-month" role="tabpanel" aria-labelledby="pills-one-month-tab" tabindex="0">
          <div className="row home-plan justify-content-center" id="explore">
          {data.wordpressPlan.oneMonthPlans.map((plan) => (
            <div
              key={plan.id}
              className="col-12 col-md-6 col-lg-4   mb-4 explore-plan-col"
            >
              <div
                className={`${
                  plan.popular ? "popular-qloudhost-card h-100" : "h-100"
                }`}
              >
                <div className="card-body plan-body position-relative">
                  {plan.popular && (
                    <div className="popular-badge position-absolute">
                      Popular
                    </div>
                  )}
                  <div className="">
                    <h5 className="card-title mb-3">{plan.title}</h5>
                    <p className="card-text plan-desc mb-3">
                      {plan.description}
                    </p>
                    <h3 className="card-price mb-3">
                      {plan.price} <span className="price-unit">/month</span>
                    </h3>
                     <p className="save mb-1">{plan.save}</p>
                      <p className="save-price mb-4">
                        Renews at {plan.originalPrice}
                      </p>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="mb-2 features wordpress-features"
                        >
                          <i className="bi bi-check-circle-fill"></i>
                          <FaCheck className="check" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={plan.url}>
                      <button className="plan-btn">Get Started</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>


        
        <div className="text-center mt-3">
          <span className="consult">
            Looking to upgrade resources? Check our Offshore VPS Hosting Plans
            or Looking for more power? Check out our{" "}
            <Link href="/offshore-dedicated-servers/" className=" fw-bold">
              Offshore Dedicated Servers →
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OffWordpressPlan;
