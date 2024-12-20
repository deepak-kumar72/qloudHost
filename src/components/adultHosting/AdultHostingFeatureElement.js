import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/adultHosting.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const AdultHostingFeatureElement = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
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
