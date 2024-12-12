import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const OffShoreHostingPlan = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/webHosting.json"); // Fetch from public folder
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

  return (
    <div className="hosting-plan mb-5" id="explore">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">Best Cheap Offshore Web Hosting Plans</h2>
        <p className="text-center mb-5 planHead-con m-auto">
          Browse through our offshore Web Hosting Packages designed for simplicity, High Performance, and top-notch security.
          Get started with a plan that suits your requirements the best!
        </p>

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
              {data.webHostingPlan.threeYearPlans.map((plan) => (
                <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
                  <div className={`${plan.popular ? "popular-qloudhost-card position-relative h-100 p-4" : "card-body plan-body position-relative h-100"}`}>
                    {plan.popular && (
                      <div className="qloud-popular-badge position-absolute">Best Value</div>
                    )}

                    <h5 className="card-title text-center mb-3">{plan.name}</h5>
                    <h3 className='text-center starting-at'>Starting At</h3>
                    <h3 className="card-price text-center mb-3">{plan.price} <span className="price-unit">/mo</span></h3>
                    <p className="save">{plan.discount}</p>
                    <p className="save-price mb-3">Renews at {plan.samePrice}/mo</p>

                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2 features">
                          <FaCheck className="check" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={plan.url}>
                      <button className="plan-btn">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1 Year Plan */}
          <div className="tab-pane fade" id="pills-one-year" role="tabpanel" aria-labelledby="pills-one-year-tab" tabindex="0">
            <div className="row home-plan justify-content-center">
              {data.webHostingPlan.oneYearPlans.map((plan) => (
                <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
                  <div className={`${plan.popular ? "popular-qloudhost-card position-relative h-100 p-4" : "card-body plan-body position-relative h-100"}`}>
                    {plan.popular && (
                      <div className="qloud-popular-badge position-absolute">Popular</div>
                    )}

                    <h5 className="card-title text-center mb-3">{plan.name}</h5>
                    <h3 className='text-center starting-at'>Starting At</h3>
                    <h3 className="card-price text-center mb-3">{plan.price} <span className="price-unit">/mo</span></h3>
                    <p className="save">{plan.discount}</p>
                    <p className="save-price mb-3">Renews at {plan.samePrice}/mo</p>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="features">
                          <FaCheck className="check" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={plan.url}>
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
              {data.webHostingPlan.oneMonthPlans.map((plan) => (
                <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
                  <div className={`${plan.popular ? "popular-qloudhost-card h-100 position-relative p-4" : "card-body plan-body position-relative h-100"}`}>
                    {plan.popular && (
                      <div className="qloud-popular-badge position-absolute">Popular</div>
                    )}
                    <h5 className="card-title text-center mb-3">{plan.name}</h5>
                    <h3 className='text-center starting-at'>Starting At</h3>
                    <h3 className="card-price text-center mb-3">{plan.price} <span className="price-unit">/mo</span></h3>
                    <p className="save web-save-badge">{plan.discount}</p>
                    <p className="save-price mb-3">Renews at {plan.samePrice}/mo</p>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="features">
                          <FaCheck className="check" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={plan.url}>
                      <button className="plan-btn">
                        Get Started
                      </button>
                    </Link>
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
