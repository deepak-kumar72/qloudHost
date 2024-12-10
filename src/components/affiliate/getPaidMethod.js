import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const GetPaidMethod = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/data/affiliate.json"); // Path to JSON file
      const jsonData = await response.json();
      setData(jsonData.getPaidMethod);  // Set the correct path to the data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;  // Handle loading state
  }

  // Destructure the data
  const { heading, description, steps = [], buttonText, buttonLink } = data;

  return (
    <div className="paid-method-banner py-5"> {/* Set the background color to match the image */}
      <div className="container">
        <h2 className="text-center mb-3 m-auto">{heading}</h2>
        <p className="text-center mb-5">{description}</p>

        <div className="row" id="#explore">
          {steps && steps.length > 0 ? (
            steps.map((step) => (
              <div key={step.id} className="col-md-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <div className="mb-3">
                      <span className="check-symbol"><FaRegCircleCheck className="me-2 option-icon" /></span>
                    </div>
                    <h5 className="method-title">{step.title}</h5>
                    <p className="card-method-text">{step.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No steps available.</p>
          )}
        </div>

        {/* Signup Button */}
        <div className="mt-4 text-center">
          <Link href={buttonLink} className="btn start-now-btn ">
            {buttonText} <FaArrowRight className="ms-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetPaidMethod;
