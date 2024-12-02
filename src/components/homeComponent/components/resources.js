import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const hostingPlans = [
  {
    id: 1,
    title: 'OFFSHORE WEB HOSTING',
    price: '$3.50',
    period: '/month',
    description: 'Best & Cheap offshore hosting for bloggers, businesses, and Startups site.',
    buttonText: 'Get started for free',
    url: "/offshore-web-hosting/",
  },
  {
    id: 2,
    title: 'OFFSHORE WORDPRESS HOSTING',
    price: '$18.99',
    period: '/month',
    description: 'Fully Optimized for WordPress Offshore Hosting for top speed and cheap price',
    buttonText: 'Get started for free',
    url: "/offshore-wordpress-hosting/",
  },
  {
    id: 3,
    title: 'OFFSHORE VPS HOSTING',
    price: '$129',
    period: '/month',
    description: 'Robust and Flexible For large & growing Business sites with more room to Play.',
    buttonText: 'Get started for free',
    url: "/offshore-vps-hosting/",
  },
];

const Resources = () => {
  return (
    <div className='resource-section p-1'>
    <div className="container my-4">
      <h2 className="text-center mb-3 m-auto">Resources and Insights</h2>
      <p className="text-center w-75 m-auto mb-5 sub-heading">
        Experience our superior support, robust infrastructure, and unmatched reliability. We are the trusted choice for DMCA ignored critical websites and apps.
      </p>
      <div className="row justify-content-center">
        {hostingPlans.map((plan) => (
          <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-center resource-card">
              <div className="card-body resource-body">
                <span className="badge-title">{plan.title}</span>
                <h3 className='mt-4 hosting-price mb-3'>
                  {plan.price}
                  <small>{plan.period}</small>
                </h3>
                <p className="text-muted mb-4">Renews at Same Price</p>
                <p className='plan-resource-desc mb-4'>{plan.description}</p>
                <Link 
          href={plan.url}> <button className="btn w-100 start-free-btn fw-blod">
                
        {plan.buttonText}</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Resources;
