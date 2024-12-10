import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const EnterpriseGrade = ({heading, subHeading}) => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dedicatedServer.json"); // Path to your JSON file in the public folder
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching enterprise grade data:", error);
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
    <div className='service-section'>
      <div className="container my-5 py-5">
        <h2 className="text-center text-white mb-3 m-auto w-100">
        {heading}
        </h2>
        <p className="text-center text-white mb-4 planHead-con m-auto">
        {subHeading}
        </p>
        <div className='mb-3'>
          <p className="text-white grade-opt">
            {data.enterPriseGrade.features.map((feature, index) => (
              <span key={index} className="d-block">
                <FaCheck className="me-2 content-opt" /> {feature}
              </span>
            ))}
          </p>
        </div>

        <div className='row'>
          {data.enterPriseGrade.sections.map((section, index) => (
            <div key={index} className="col-md-12 col-lg-6 mb-4">
              <div className="card h-100 shadow-sm AffordableCon-card d-flex p-3">
                <div className='affordable-card-title'>{section.title}</div>
                <div className='card-text affordable-card-desc'>{section.description}</div>
              </div>
            </div>
          ))}
        </div>

        <Link href={data.enterPriseGrade.button.link} passHref className="btn-primary m-auto d-flex justify-content-center">
            <button className="btn-primary start-now-btn enterprise-btn me-3">
              {data.enterPriseGrade.button.text}
              <FaArrowRight className="ms-4 start-now-icon" />
            </button>
        </Link>
      </div>
    </div>
  );
};

export default EnterpriseGrade;
