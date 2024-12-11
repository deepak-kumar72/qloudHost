import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
// import { useEffect } from 'react';
// import { Tooltip } from "bootstrap";

const VpsPlan = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/offshoreVps.json"); // Fetch from public folder
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  //   tooltipTriggerList.forEach(tooltipTriggerEl => {
  //     new Tooltip(tooltipTriggerEl, {
  //       html: true, // Enable HTML content in tooltip
  //     });
  //   });
  // }, []);
    return (
        <div className="container plan-sec mt-5">

<div className="row nav nav-pills mb-5 plan-group-btn" id="pills-tab" role="tablist">
          <div className="col-6 col-md-3 nav-item px-3 mb-3" role="presentation">
            <button className="nav-link active choose-plan-btn" id="pills-one-year-tab" data-bs-toggle="pill" data-bs-target="#pills-one-year" type="button" role="tab" aria-controls="pills-one-year" aria-selected="true">1 Year</button>
          </div>
          <div className="col-6 col-md-3 nav-item  px-3" role="presentation">
            <button className="nav-link choose-plan-btn" id="pills-six-month-year-tab" data-bs-toggle="pill" data-bs-target="#pills-six-month" type="button" role="tab" aria-controls="pills-six-month" aria-selected="false">6 Month</button>
          </div>
          <div className="col-6 col-md-3 nav-item px-3" role="presentation">
            <button className="nav-link choose-plan-btn" id="pills-three-month-tab" data-bs-toggle="pill" data-bs-target="#pills-three-month" type="button" role="tab" aria-controls="pills-three-month" aria-selected="false">3 Month</button>
          </div>
          <div className="col-6 col-md-3 nav-item px-3" role="presentation">
            <button className="nav-link choose-plan-btn" id="pills-one-month-tab" data-bs-toggle="pill" data-bs-target="#pills-one-month" type="button" role="tab" aria-controls="pills-one-month" aria-selected="false">1 Month</button>
          </div>
        </div>



        <div className="tab-content" id="pills-tabContent">
          {/* 1 Year Plan */}
          <div className="tab-pane fade show active" id="pills-one-year" role="tabpanel" aria-labelledby="pills-one-year-tab" tabindex="0">
          
          <div
            className="row offshoreVps-plan justify-content-center"
            id="explore"
          >
            {data.vpsPlanData.oneYearPlans.map((plan) => (
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
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price vps-plan-price mb-5">
                    {plan.price} <span className="price-unit">/month</span>
                  </h3>
                  <p className="save save-badge">{plan.save}</p>
                  <p className="save-price mb-4">
                    Renews at {plan.yearlyPrice}
                  </p>

                  {/* <p  className="btn d-flex tooltip-btn justify-content-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title={plan.tooltipContent}>
                  <span className="blink">{plan.freeTooltip}</span>
                  
                </p> */}


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

          {/* 6 month Plan */}
          <div className="tab-pane fade" id="pills-six-month" role="tabpanel" aria-labelledby="pills-six-month-tab" tabindex="0">
            
          <div
            className="row offshoreVps-plan justify-content-center"
            id="explore"
          >
            {data.vpsPlanData.sixMonthPlans.map((plan) => (
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
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price vps-plan-price mb-3">
                    {plan.price} <span className="price-unit">/month</span>
                  </h3>
                  <p className="save save-badge">{plan.save}</p>
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

          {/* 3 Month Plan */}
          <div className="tab-pane fade" id="pills-three-month" role="tabpanel" aria-labelledby="pills-three-month-tab" tabindex="0">
           
          <div
            className="row offshoreVps-plan justify-content-center"
            id="explore"
          >
            {data.vpsPlanData.threeMonthPlans.map((plan) => (
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
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price vps-plan-price mb-3">
                    {plan.price} <span className="price-unit">/month</span>
                  </h3>
                  <p className="save save-badge">{plan.save}</p>
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

          {/* 1 Month Plan */}
          <div className="tab-pane fade" id="pills-one-month" role="tabpanel" aria-labelledby="pills-one-month-tab" tabindex="0">
          <div
            className="row offshoreVps-plan justify-content-center"
            id="explore"
          >
            {data.vpsPlanData.oneMonthPlans.map((plan) => (
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
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price vps-plan-price mb-3">
                    {plan.price} <span className="price-unit">/month</span>
                  </h3>
                  <p className="save save-badge">{plan.save}</p>
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
      </div>
  );
};


export default VpsPlan;
