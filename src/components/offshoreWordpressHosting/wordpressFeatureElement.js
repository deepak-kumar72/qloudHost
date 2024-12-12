import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const WordpressFeatureElement = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("/data/wordprssHosting.json"); // Fetch from public folder
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
        {data.wordpressFeature.map((item) => (
          <div className="row align-items-center mb-3" key={item.id}>
            <div
              className={`col-md-6 mb-4 text-center ${
                item.id % 2 === 0 ? "order-md-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="img-fluid m-auto"
                loading="lazy"
                width={1000}
                height={1000}
              />
            </div>
            <div
              className={`col-md-6 feature-element-sec ${
                item.id % 2 === 0 ? "order-md-1" : ""
              }`}
            >
              <h2 className="w-100 mb-3">{item.title}</h2>
              <p>{item.description}</p>
              {item.additionalDescription && (
                <p>{item.additionalDescription}</p>
              )}
              {item.buttonText && item.buttonLink && (
                <Link href={item.buttonLink}>
                  <button className="btn start-now-btn mt-3">
                    {item.buttonText} <FaArrowRight className="ms-2" />
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

export default WordpressFeatureElement;
