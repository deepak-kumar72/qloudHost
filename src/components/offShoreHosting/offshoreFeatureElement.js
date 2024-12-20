import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/webHosting.json"); // Replace with your actual URL
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const OffshoreFeatureElement = ({ data }) => {
  if (!data) {
    return <div></div>; // Better fallback UI
  }

  const FeatureSection = ({ features }) => (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`row align-items-center mb-2 ${
              feature.reverseOrder ? "flex-row-reverse" : ""
            }`}
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
              {feature.buttonText && feature.buttonLink && (
                <Link href={feature.buttonLink}>
                  <button className="btn start-now-btn mt-3">
                    {feature.buttonText} <FaArrowRight className="ms-2" />
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return <FeatureSection features={data.webHostingfeatures} />;
};

export default OffshoreFeatureElement;
