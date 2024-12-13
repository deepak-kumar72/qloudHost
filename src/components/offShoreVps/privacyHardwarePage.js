import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const PrivacyHardwarePage = () => {
  const [data, setData] = useState(null); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/offshoreVps.json"); // Fetch from public folder
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

  const { privacy, hardware } = data;

  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <Image
              src={privacy.image}
              alt={privacy.title}
              className="img-fluid"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2>{privacy.title}</h2>
            {privacy.description.map((paragraph, index) => (
              <p key={index}>
                {paragraph.includes("be anonymous on the internet") ? (
                  <>
                    {paragraph.split("be anonymous on the internet")[0]}
                    <Link href={privacy.additionalLink.url} className="faq-link">
                      {privacy.additionalLink.text}
                    </Link>
                    {paragraph.split("be anonymous on the internet")[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
            <Link href={privacy.ctaLink} smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                {privacy.ctaText} <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <Image
              src={hardware.image}
              alt={hardware.title}
              className="img-fluid"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-md-6 order-md-1 feature-element-sec">
            <h2 className="mb-3 w-100">{hardware.title}</h2>
            {hardware.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <Link href={hardware.ctaLink} smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                {hardware.ctaText} <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyHardwarePage;
