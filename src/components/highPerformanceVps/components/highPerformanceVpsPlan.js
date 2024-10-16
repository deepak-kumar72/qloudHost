import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";

const vpsPlansData = [
    {
      id: 1,
      name: 'VPS ENTRY',
      price: '18.99',
      yearlyPrice: "$21.99/mo",
      save: "Save14%",
      features: ['2 CPU', '4 GB RAM', '50 GB NVMe SSD', '1 TB Bandwidth', 'Free Control Panel*', 'Hosted in Netherlands'],
      url: "https://my.qloudhost.com/index.php?rp=/store/vps/entry-plan"
    },
    {
      id: 2,
      name: 'VPS VALUE',
      price: '46.99',
      yearlyPrice: "$54.99/mo",
      save: "Save14%",
      features: ['4 CPU', '8 GB RAM', '120 GB NVMe SSD', '1.75 TB Bandwidth', 'Free Control Panel*', 'Hosted in Netherlands'],
      url: "https://my.qloudhost.com/index.php?rp=/store/vps/value-plan",
      popular: true
    },
    {
      id: 3,
      name: 'VPS BUSINESS',
      price: '55.99',
      yearlyPrice: "$65.99/mo",
      save: "Save14%",
      features: ['6 CPU', '12 GB RAM', '150 GB NVMe SSD', '2 TB Bandwidth', 'Free Control Panel*', 'Hosted in Netherlands'],
      url: "https://my.qloudhost.com/index.php?rp=/store/vps/business-plan",
    },
    {
      id: 4,
      name: 'VPS ENTERPRISE',
      price: '79.99',
      yearlyPrice: "$88.99/mo",
      save: "Save14%",
      features: ['8 CPU', '16 GB RAM', '200 GB NVMe SSD', '2.5 TB Bandwidth', 'Free Control Panel*', 'Hosted in Netherlands'],
      url: "https://my.qloudhost.com/index.php?rp=/store/vps/enterprise-plan"
    },
  ];

const HighPerformanceVpsPlan = () => {

  return (
    <div className="hosting-plan mb-5">
    <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Our High-Performance VPS Plans & Pricing</h2>
      <p className="text-center mb-5 planHead-con m-auto">The performance of your websites and applications is crucial. That’s why we offer next-generation high performance VPS hosting, perfect for businesses needing extra memory and processing power.</p>
      
      <div className="row offshoreVps-plan justify-content-center" id='plan1'>
        {vpsPlansData.map((plan) => (
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
      <p className="save-price mb-4">Was <del>{plan.yearlyPrice}</del></p>
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
        <span className="consult">Looking for more power? Check our DMCA <Link to="" className=" fw-bold">Ignored OffShore Dedicated Server </Link>Plans</span>
      </div>
    </div>
    </div>
  );
};

export default HighPerformanceVpsPlan;
