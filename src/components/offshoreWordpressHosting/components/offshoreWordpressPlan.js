import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

const plansData = [
  {
    id: 1,
    title: "WordPress Starter",
    description: "The ideal WP Hosting for Started Website!",
    price: "$4.39",
    originalPrice: "$6.28",
    save: "Save 30%",
    features: [
      "1 Website",
      "10 GB NVMe SSD",
      "1 GB RAM",
      "3 Email",
      "150 GB Bandwidth",
      "5 Subdomain",
      "DirectAdmin Panel",
      "LiteSpeed",
      "Support - Chat, Ticket & Email",
      "Softaculous",
    ],
    url:"https://my.qloudhost.com/store/wordpress-hosting/wp-starter"
  },
  {
    id: 2,
    title: "WordPress Business",
    description: "A growth businesses with more room to play.",
    price: "$6.96",
    originalPrice: "$9.94",
    save: "Save 30%",
    features: [
      "2 Websites",
      "20 GB NVMe SSD",
      "2 GB RAM",
      "5 Email",
      "300 GB Bandwidth",
      "10 Subdomain",
      "DirectAdmin Panel",
      "LiteSpeed",
      "Support - Chat, Ticket & Email",
      "Softaculous",
    ],
    url:"https://my.qloudhost.com/store/wordpress-hosting/wp-business"
  },
  {
    id: 3,
    title: "WordPress Premium",
    description: "Advanced features for running an High-traffic WP website.",
    price: "$11.89",
    originalPrice: "$16.98",
    save: "Save 30%",
    features: [
      "10 Websites",
      "50 GB NVMe SSD",
      "3 GB RAM",
      "15 Email",
      "500 GB Bandwidth",
      "20 Subdomain",
      "DirectAdmin Panel",
      "LiteSpeed",
      "Support - Chat, Ticket & Email",
      "Softaculous",
    ],
    url:"https://my.qloudhost.com/store/wordpress-hosting/wp-premium"
  },
];

const OffWordpressPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">Powerfull Offshore WordPress Hosting Plans</h2>
        <p className="text-center mb-5 planHead-con m-auto">Grow your business with hassle-free Cheap Offshore WordPress Hosting, reliable performance.
          Our WordPress-optimized hosting is designed to scale as your website grows.</p>

        <div className="row home-plan justify-content-center" id='explore'>
          {plansData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4   mb-4 explore-plan-col">
              <div className={`${plan.popular ? "popular-qloudhost-card h-100" : "h-100"}`}>
                <div className="card-body plan-body position-relative">
                  {plan.popular && (
                    <div className="popular-badge position-absolute">Popular</div>
                  )}
                  <div className="">
                    <h5 className="card-title mb-3">{plan.title}
                    </h5>
                    <p className="card-text plan-desc mb-2">{plan.description}</p>
                    <h3 className="card-price">{plan.price} <span className="price-unit">/month</span></h3>
                    <div className="d-flex">
                    <p className="save me-3">{plan.save}</p>
                    <p className="save-price mb-4"> <del>{plan.originalPrice}</del></p>
                    </div>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2 features wordpress-features">
                          <i className="bi bi-check-circle-fill"></i><FaCheck className="check" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                        to={plan.url}>
                    <button className="plan-btn">
                      
                        Get Started
                      
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="text-center mt-3">
          <span className="consult">Looking to upgrade resources? Check our Offshore VPS Hosting Plans or Looking for more power? Check out our <Link to="" className=" fw-bold">Offshore Dedicated Servers →</Link></span>
        </div>
      </div>
    </div>
  );
};

export default OffWordpressPlan;
