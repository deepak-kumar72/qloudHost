import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const AdultHostingFeatureElement = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/adultHosting.json"); // Fetch from public folder
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
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {data.adultfeatures.map((feature, index) => (
          <div key={index} className="row align-items-center mb-3">
            <div className={`col-md-6 ${index % 2 === 0 ? "mb-4 text-center" : "order-md-2 mb-3 text-center"}`}>
              <Image 
                src={feature.image} 
                alt={feature.imageAlt} 
                className="img-fluid m-auto" 
                width={1000} 
                height={1000} 
              />
            </div>
            <div className={`col-md-6 ${index % 2 === 0 ? "feature-element-sec" : "order-md-1 feature-element-sec"}`}>
              <h2 className='w-100 mb-3'>{feature.title}</h2>
              {feature.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              {/* {feature.link && (
                <p>
                  At any scale, we deliver high performance with our Netherlands Adult VPS & Dedicated Servers. With a single click, you can 
                  <Link href={feature.link} className='faq-link'> upgrade </Link> or downgrade your resources at any time.
                </p>
              )} */}
              <Link href="#explore" smooth={true} duration={200}>
                <button className="btn start-now-btn mt-3">
                  Get Started Now <FaArrowRight className="ms-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdultHostingFeatureElement;
