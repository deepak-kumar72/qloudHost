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
    description: "The easiest and most affordable way to start and grow your website.",
    price: "$3.50",
    yearlyPrice: "$4.99/mo",
    save: "SAVE 30%",
    features: ["1 Website", "1 GB RAM", "10 GB NVMe SSD", "150 GB Bandwidth", "Direct Admin Panel"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    id: 2,
    title: "VPS",
    description: "The perfect pairing of power and resources.",
    price: "$3.50",
    yearlyPrice: "$4.99/mo",
    save: "SAVE 30%",
    features: ["1 Website", "1 GB RAM", "10 GB NVMe SSD", "150 GB Bandwidth", "Direct Admin Panel"],
    buttonText: "Get Started",
    popular: true, // This plan is marked as popular
  },
  {
    id: 3,
    title: "DEDICATED",
    description: "Perfect Custom Solution for your Needs",
    price: "$3.50",
    yearlyPrice: "$4.99/mo",
    save: "SAVE 30%",
    features: ["1 Website", "1 GB RAM", "10 GB NVMe SSD", "150 GB Bandwidth", "Direct Admin Panel"],
    url: "",
    popular: false,
  }
];


const HostingPlans = () => {
  return (
    <div className="hosting-plan mb-5">
    <div className="container mt-5">
      <h2 className="text-center mb-3">Best DMCA Ignored Hosting Server Plans for You!</h2>
      <p className="text-center w-75 mb-5 planHead-con m-auto">Get award-winning Best Cheap DMCA Ignored hosting and protect your identity on the internet at the cheapest price in the market.</p>
      
      <div className="row">
        {plansData.map((plan) => (
          <div key={plan.id} className="col-4 mb-4 ">
          <div className={`${plan.popular ? "popular-card" : ""}`}>
  <div className="card-body plan-body position-relative">
    {plan.popular && (
      <div className="popular-badge position-absolute">Popular</div>
    )}
    <div className="">
      <h5 className="card-title mb-3">OFFSHORE <span>{plan.title}</span>
      </h5>
      <p className="card-text mb-2">{plan.description}</p>
      <h3 className="card-price">{plan.price} <span className="price-unit">/month</span></h3>
      <p className="save">{plan.save}</p>
      <p className="save-price mb-4">Yearly at <del>{plan.yearlyPrice}</del></p>
      <ul className="list-unstyled mb-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-3 features">
            <i className="bi bi-check-circle-fill"></i><FaCheck className="check"/> {feature}
          </li>
        ))}
      </ul>
      <button className="plan-btn">
        <Link 
          to={plan.url} 
        >
          Get Started
        </Link>
      </button>
    </div>
  </div>
</div>
</div>
        ))}
        
      </div>
      <div className="text-center mt-4">
        <span className="consult">Not sure which Offshore DMCA Ignored hosting plan is right for you? We can help. <Link to="" className=" fw-bold">GET FREE CONSULTATION</Link></span>
      </div>
    </div>
    </div>
  );
};

export default HostingPlans;
