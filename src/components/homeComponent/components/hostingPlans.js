
import React from "react";
import Link from "next/link";

import { FaCheck } from "react-icons/fa6";
// import { Tooltip } from "bootstrap";

// plansData.js
const plansData = [
  {
    id: 1,
    title: "SHARED",
    description:
      "Easy and affordable for website growth.",
    price: "$3.50",
    save: "SAVE 30%",
    // freeTooltip: "+3 Months Free",
    // tooltipContent: `<h5 class='tooltip-Head text-center'>Black Friday Cyber Monday Deal</h5>Signup for 3 years and get an additional 3 months for Free.`,
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
    description: "Perfect power and resources pair.",
    price: "$18.99",
    save: "SAVE 14%",
    // freeTooltip: "+1 Month Free",
    // tooltipContent:  `<h5 class='tooltip-Head text-center'>Black Friday Cyber Monday Deal</h5>Signup for 1 year and get additional 1 Month for Free.`,
    features: [
      "2 CPU",
      "4 GB RAM",
      "50 GB NVMe SSD",
      "1 TB Bandwidth",
      "Free Control Panel",
    ],
    url: "/offshore-vps-hosting/",
    popular: true,
  },
  {
    id: 3,
    title: "DEDICATED",
    description: `Perfect Custom Solution for your Needs`,
    price: "$129",
    save: "SAVE 19%",
    features: [
      "Ryzen 9 3900X(12c/24t)",
      "64 GB RAM DDR4",
      "960 GB NVMe SSD",
      "50 TB Bandwidth",
      "1 IPv4 address",
    ],
    url: "/offshore-dedicated-servers/",
    popular: false,
  },
];

const HostingPlans = () => {
  // useEffect(() => {
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  //   tooltipTriggerList.forEach(tooltipTriggerEl => {
  //     new Tooltip(tooltipTriggerEl, {
  //       html: true, // Enable HTML content in tooltip
  //     });
  //   });
  // }, []);

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
                <p className={`${
                  plan.popular
                    ? "save save-popular save-popular-badge"
                    : "save save-home-plan"
                }`}>{plan.save}</p>
                {/* {plan.title !== "DEDICATED" && (
                <p  className="btn d-flex justify-content-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title={plan.tooltipContent}>
                  <span className="blink">{plan.freeTooltip}</span>
                  
                </p>
                )} */}
                <h4 className='mb-3 top-specification'>Specifications</h4>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-3 features">
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
