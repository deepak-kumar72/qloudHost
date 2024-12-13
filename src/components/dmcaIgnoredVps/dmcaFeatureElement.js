import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const DmcaFeatureElement = () => {
  const [data, setData] = useState(null); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dmcaIgnoredVps.json"); // Fetch from public folder
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
        {data.sections.map((section, index) => (
          <div className="row align-items-center mb-3" key={index}>
            <div
              className={`col-md-6 ${
                index % 2 === 0 ? "mb-4 text-center" : "order-md-2 mb-3 text-center"
              }`}
            >
              <Image
                src={section.image.src}
                alt={section.image.alt}
                className="img-fluid"
                width={1000}
                height={1000}
              />
            </div>
            <div
              className={`col-md-6 ${
                index % 2 === 0 ? "feature-element-sec" : "order-md-1 feature-element-sec"
              }`}
            >
              <h2>{section.heading}</h2>
              <p>{section.description}</p>
              <Link href="#explore" className="btn-primary">
                <button className="btn start-now-btn mt-3">
                  {section.buttonText} <FaArrowRight className="ms-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DmcaFeatureElement;
