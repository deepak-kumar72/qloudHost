import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";

const VpsFeatureElement = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/highPerformanceVps.json"); // Fetch from public folder
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
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {data.featuresElement.map((feature, index) => (
          <div
            key={index}
            className={`row align-items-center mb-3 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
          >
            <div className="col-md-6 mb-4 text-center">
              <Image
                src={feature.image}
                alt={feature.alt}
                className="img-fluid m-auto"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-md-6 feature-element-sec">
              <h2 className="w-100 mb-3">{feature.title}</h2>
              <p>{feature.description}</p>
              {feature.button && (
                <Link href={feature.button.link} smooth={true} duration={200}>
                  <button className="btn start-now-btn mt-3">
                    {feature.button.text} <FaArrowRight className="ms-2" />
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VpsFeatureElement;
