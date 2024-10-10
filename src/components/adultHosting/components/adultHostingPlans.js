import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";

const plansData = [
  {
    id: 1,
    name: 'VPS ENTRY',
    price: '$18.99',
    yearlyPrice: "$4.99/mo",
    save: "SAVE 30%",
    features: ['4 CPU', '8 GB RAM', '120 GB NVMe SSD', '1.75 TB Bandwidth', 'Free Control Panel', 'Hosted in Netherlands'],
    url: ""
  },
  {
    id: 2,
    name: 'VPS VALUE',
    price: '$46.99',
    yearlyPrice: "$4.99/mo",
    save: "SAVE 30%",
    features: ['4 CPU', '8 GB RAM', '120 GB NVMe SSD', '1.75 TB Bandwidth', 'Free Control Panel', 'Hosted in Netherlands'],
    url: "",
    popular: true
  },
  {
    id: 3,
    name: 'VPS BUSINESS',
    price: '$55.99',
    yearlyPrice: "$4.99/mo",
    save: "SAVE 30%",
    features: ['4 CPU', '8 GB RAM', '120 GB NVMe SSD', '1.75 TB Bandwidth', 'Free Control Panel', 'Hosted in Netherlands'],
    url: "",
  },
  {
    id: 4,
    name: 'VPS ENTERPRISE',
    price: '$79.99',
    yearlyPrice: "$4.99/mo",
    save: "SAVE 30%",
    features: ['4 CPU', '8 GB RAM', '120 GB NVMe SSD', '1.75 TB Bandwidth', 'Free Control Panel', 'Hosted in Netherlands'],
    url: ""
  },
];


const AdultHostingPlans = () => {


  return (
    <div className="hosting-plan mb-5">
    <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Adult VPS Hosting Plans & Pricing</h2>
      <p className="text-center mb-5 planHead-con m-auto">Unlock Peak Performance and Unparalleled Security with VPS Hosting for Adult Websites. Choose from Linux or Windows Operating Systems and experience the ultimate hosting solution for your website or application.</p>
      
      <div className="row offshoreVps-plan justify-content-center" id='plan1'>
        {plansData.map((plan) => (
          <div key={plan.id} className="col-12 col-md-6 col-lg-3   mb-4 explore-plan-col">
          <div className={`${plan.popular ? "popular-qloudhost-card" : ""}`}>
  <div className="card-body offshore-plan-body position-relative">
    {plan.popular && (
      <div className="popular-badge vps-badge position-absolute">Popular</div>
    )}
    <div className="">
      <h5 className="card-title mt-3 mb-3">{plan.name}
      </h5>
      <h3 className="card-price vps-plan-price mb-3">{plan.price} <span className="price-unit">/month</span></h3>
      <p className="save mb-1">{plan.save}</p>
      <p className="save-price mb-4">Yearly at <del>{plan.yearlyPrice}</del></p>
      <ul className="list-unstyled mb-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2 offshoreVps-features">
            <i className="bi bi-check-circle-fill"></i><FaCheck className="check"/> {feature}
          </li>
        ))}
      </ul>
      <button className="plan-btn vps-plan-btn" >
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
      <div className="text-center mt-3">
        <span className="consult">Looking for more power? Check our DMCA Ignored Offshore Dedicated Server Plans <Link to="" className=" fw-bold">Dedicated Server</Link>Plans</span>
      </div>
    </div>
    </div>
  );
};


export default AdultHostingPlans;
