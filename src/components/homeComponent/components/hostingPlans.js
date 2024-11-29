import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import homeData from "../../../data/home.json"; // Adjust path as necessary

const HostingPlans = () => {
  const plansData = homeData.plansData; // Access plansData from the JSON

  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5" id="explore">
        <h2 className="text-center m-auto mb-3">
          Best DMCA Ignored Hosting Server Plans for You!
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
          Get award-winning Best Cheap DMCA Ignored hosting and protect your
          identity on the internet at the cheapest price in the market.
        </p>

        <div className="row home-plan justify-content-center">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className="col-12 col-md-6 col-lg-4 mb-5 explore-plan-col"
            >
              <div
                className={`${
                  plan.popular
                    ? "popular-card h-100 position-relative"
                    : "h-100 card-body plan-body position-relative"
                }`}
              >
                {plan.popular && (
                  <div className="popular-badge position-absolute">Popular</div>
                )}
                <h5 className="card-title mb-4">
                  OFFSHORE <span>{plan.title}</span>
                </h5>
                <p className="card-text plan-desc mb-3">{plan.description}</p>
                <h3 className="card-price mb-4">
                  {plan.price} <span className="price-unit">/month</span>
                </h3>
                <p
                  className={`${
                    plan.popular
                      ? "save save-popular save-popular-badge"
                      : "save save-home-plan"
                  }`}
                >
                  {plan.save}
                </p>
                <h4 className="mb-3 top-specification">Specifications</h4>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-3 features">
                      <FaCheck className="check" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link href={plan.url}>
                  <button className="plan-btn">Get Started</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <span className="consult">
            Not sure which Offshore DMCA Ignored hosting plan is right for you?
            We can help.{" "}
            <Link href="/contact-us/" className="fw-bold">
              GET FREE CONSULTATION NOW
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HostingPlans;
