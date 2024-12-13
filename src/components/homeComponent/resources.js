import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Resources = () => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/home.json"); // Adjust the path if needed
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div></div>;
  }

  const { qloudhostPlans } = data;

  // Get the first plan from the array (assuming there's only one group of plans)
  const { heading, subHeading, hostingPlans } = qloudhostPlans[0];

  return (
    <div className="resource-section p-1">
      <div className="container my-4">
        <h2 className="text-center mb-3 m-auto">{heading}</h2>
        <p className="text-center w-75 m-auto mb-5 sub-heading">{subHeading}</p>
        <div className="row justify-content-center">
          {hostingPlans.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card text-center resource-card">
                <div className="card-body resource-body">
                  <span className="badge-title">{plan.title}</span>
                  <h3 className="mt-4 hosting-price mb-3">
                    {plan.price}
                    <small>{plan.period}</small>
                  </h3>
                  <p className="text-muted mb-4">Renews at Same Price</p>
                  <p className="plan-resource-desc mb-4">{plan.description}</p>
                  <Link href={plan.url}>
                    <button className="btn w-100 start-free-btn fw-bold">
                      {plan.buttonText}
                    </button>
                  </Link>
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
