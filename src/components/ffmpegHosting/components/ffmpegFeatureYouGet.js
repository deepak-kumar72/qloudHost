import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const FFmpegFeaturesYouGet = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/ffmpegHosting.json"); // Fetch from public folder
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
    <div className="container vps-page">
      {/* Heading Section */}
      <div className="text-center my-5"></div>

      {/* Content Section */}
      <div className="row align-items-center vps-features">
        <div className="col-lg-5 mb-4">
          <h2 className="m-auto mb-3 w-100 vps-feature-heading">
            What Sets QloudHost Affordable FFmpeg VPS Hosting Apart?
          </h2>
          <Image
            src="/assets/What-Sets-QloudHost-Affordable-FFmpeg.png"
            alt="VPS Server"
            className="vps-image d-flex m-auto h-100"
            width={1000}
            height={1000}
          />
        </div>

        {/* Features List */}
        <div className="col-lg-7">
          {data.featuresFeatureGet.map((feature, index) => (
            <div className="mb-4" key={index}>
              <span>
                <span className="feature-head">{feature.heading}</span>:{" "}
                {feature.description}
              </span>
            </div>
          ))}
          <Link href="explore" smooth={true} duration={200} className="btn-primary">
            <button className="btn-primary start-now-btn me-3">
              Launch Your Project
              <FaArrowRight className="ms-4 start-now-icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FFmpegFeaturesYouGet;
