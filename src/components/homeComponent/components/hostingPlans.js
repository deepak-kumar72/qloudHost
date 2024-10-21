// HostingPlans.js
import React from "react";
import { Link } from "react-router-dom";
import "../home.css"; // Custom CSS for additional styling if needed
import { FaCheck } from "react-icons/fa6";

// plansData.js
const plansData = [
  {
    id: 1,
    title: "SHARED",
    description:
      "The easiest and most affordable way to start and grow your website.",
    price: "$3.50",
    yearlyPrice: "$4.99/mo",
    save: "SAVE 30%",
    features: [
      "1 Website",
      "1 GB RAM",
      "10 GB NVMe SSD",
      "150 GB Bandwidth",
      "Direct Admin Panel",
    ],
    url: "/offshore-web-hosting/",
    popular: false,
  },
  {
    id: 2,
    title: "VPS",
    description: "The perfect pairing of power and resources.",
    price: "$18.99",
    yearlyPrice: "$21.99/mo",
    save: "SAVE 14%",
    features: [
      "2 CPU",
      "4 GB RAM",
      "50 GB NVMe SSD",
      "1 TB Bandwidth",
      "Free Control Panel",
    ],
    url: "/offshore-vps-hosting/",
    popular: true, // This plan is marked as popular
  },
  {
    id: 3,
    title: "DEDICATED",
    description: "Perfect Custom Solution for your Needs",
    price: "$129",
    yearlyPrice: "$159.00/mo",
    save: "SAVE 19%",
    features: [
      "Ryzen 9 3900X(12c/24t)",
      "64 GB RAM DDR4",
      "960 GB NVMe SSD",
      "50 TB Bandwidth",
      "1IPv4 address",
    ],
    url: "/offshore-dedicated-servers/",
    popular: false,
  },
];

const HostingPlans = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5" id="hostingPlan">
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
              className="col-12 col-md-6 col-lg-4   mb-4 explore-plan-col"
            >
              <div
                className={`${
                  plan.popular
                    ? "popular-card h-100  position-relative"
                    : "h-100 card-body plan-body"
                }`}
              >
                {plan.popular && (
                  <div className="popular-badge position-absolute">Popular</div>
                )}
                <h5 className="card-title mb-3">
                  OFFSHORE <span>{plan.title}</span>
                </h5>
                <p className="card-text plan-desc mb-2">{plan.description}</p>
                <h3 className="card-price">
                  {plan.price} <span className="price-unit">/month</span>
                </h3>
                <p className="save">{plan.save}</p>
                <p className="save-price mb-4">
                  Yearly at <del>{plan.yearlyPrice}</del>
                </p>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-3 features">
                      <i className="bi bi-check-circle-fill"></i>
                      <FaCheck className="check" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to={plan.url}>
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
            <Link to="" className=" fw-bold">
              GET FREE CONSULTATION
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HostingPlans;
