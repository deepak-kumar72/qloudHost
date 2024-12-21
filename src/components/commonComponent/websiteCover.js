import React, { useState, useEffect } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const WebsiteCover = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dedicatedServer.json"); // Fetch from public folder
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
    <div className="service-section">
      <div className="container py-5">
        <h2 className="text-center text-white mb-4 m-auto w-100">
          {data.heading}
        </h2>

        <div className="row service-section1">
          {data.servicesData.map((service) => (
            <div key={service.id} className="col-md-12 col-lg-6 mb-4">
              <div className="card card-banner h-100 shadow-sm">
                <div className="service-card d-flex p-3">
                  <div className="mb-3 w-25">
                    <Image
                      src={service.imgUrl}
                      alt={service.title}
                      className="serviceCard-img h-100"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div>
                    <div className="card-title">{service.title}</div>
                    {service.description.map((feature, index) => (
                      <div key={index} className="card-text service-desc mb-1">
                        <FaCheck className="me-2 cover-opt" />
                        {feature}
                      </div>
                    ))}
                    <div>
                      <Link href={service.buttonLink} className="btn start-now-btn start-now mt-3">
                        {service.buttonText} <FaArrowRight className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteCover;