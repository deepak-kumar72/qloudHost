import React, { useState, useEffect } from "react";
import Image from "next/image";

const DedicatedHostingSolution = () => {
  const [data, setData] = useState(null); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dmcaDedicatedServer.json"); // Fetch from public folder
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
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

  const { heading, content, features, image } = data.dedicatedHostingSol || {};

  return (
    <div className="service-section">
      <div className="container py-5">
        <h2 className="text-center text-white mb-3 m-auto w-100">{heading}</h2>
        <p className="text-center text-white mb-5 planHead-con m-auto">
          {content}
        </p>

        <div className="row">
          <div className="col-md-12 col-lg-6">
            <ul className="text-white sol">
              {features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-12 col-lg-6 text-center">
            <Image
              src={image?.src || ""}
              alt={image?.alt || "Image"}
              className="hostingSolImg h-100"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedHostingSolution;
