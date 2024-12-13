import React, { useState, useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const QloudHostGurantees = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/about.json"); // Fetch from public folder
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
    return <div></div>;
  }

  return (
    <div className="paid-method-banner py-5">
      <div className="container">
        <h2 className="text-center mb-3 m-auto">{data.data.heading}</h2>
        <p className="text-center mb-5">
        {data.data.subHeading}
        </p>

        <div className="row mb-4">
          {data.data.service.map((service) => (
            <div key={service.id} className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body about-gurantee">
                  <div className="mb-3">
                  <span className="check-symbol">
                      <FaRegCircleCheck className="me-2 option-icon" />
                    </span>
                  </div>
                  <h5 className="method-title mb-3">{service.title}</h5>
                  <p className="card-method-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="btn-primary m-auto d-flex justify-content-center"
        >
          <button className="btn-primary start-now-btn enterprise-btn me-3">
            Get Started Now
            <i className="ms-4 start-now-icon">→</i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QloudHostGurantees;
