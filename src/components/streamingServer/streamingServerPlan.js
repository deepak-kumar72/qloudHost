
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
  

const StreamingServerPlan = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/streaming.json"); // Fetch from public folder
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
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Reliable Offshore Streaming Servers Plans!</h2>
      <p className="text-center mb-5 planHead-con m-auto">Tell us your needs, and we will prepare a Best offshore streaming servers according to your needs.</p>
      
        <div className="row qloudHost-plan streaming-plan justify-content-center m-auto" id='explore'>
          {data.streamingplansData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-6 explore-plan-col">
            <div
                className={`${plan.popular ? "popular-qloudhost-card h-100 position-relative" : "card-body offshore-plan-body position-relative h-100"}`}
              >
                {plan.popular && (
                  <div className="popular-badge streaming-badge position-absolute">Popular</div>
                )}
               
                <div>
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price qloudHostplan-price mb-3">{plan.price} <span className="price-unit">{plan.time}</span></h3>

                  {plan.onDemand && (
                  <div className="best-streaming mb-2">On Demand</div>
                )}

                  <p className="fw-bold mb-3">{plan.save} <span className="save-price ms-3"><del>{plan.yearlyPrice}</del></span></p>
                  <Link href={plan.url} className='dedicated-plan-btn'>
                  <button className="plan-btn dedicated-plan-btn d-flex justify-content-between mb-4">
                    Buy Now <FaArrowRight className=""/>
                  </button></Link>
                  <h4 className='mb-3 top-feature'>Top Features</h4>
                  <ul className="list-unstyled mb-4 streaming-server-feature">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2 qloudHostPlan-features">
                        <FaCheck className="check" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamingServerPlan;

  