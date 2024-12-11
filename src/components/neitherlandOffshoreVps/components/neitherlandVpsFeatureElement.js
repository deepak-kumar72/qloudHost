import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NeitherlandVpFeatureElement = () => {
  const [data, setData] = useState(); // State to store the JSON data

  const getData = async () => {
    try {
      const response = await fetch("/data/vpsneitherlandoffshore.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {data.vpsnetherlandfeature.map((feature, index) => (
          <div className="row align-items-center mb-3" key={index}>
            <div
              className={`col-md-6 ${
                index % 2 === 1 ? "order-md-2" : ""
              } mb-4 text-center`}
            >
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                className="img-fluid"
                width={feature.image.width}
                height={feature.image.height}
              />
            </div>
            <div
              className={`col-md-6 ${
                index % 2 === 1 ? "order-md-1" : ""
              } feature-element-sec`}
            >
              <h2>{feature.title}</h2>
              {feature.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
              <Link href={feature.cta.link} smooth={feature.cta.smoothScroll} duration={feature.cta.scrollDuration}>
                <button className="btn start-now-btn mt-3">
                  {feature.cta.text} <FaArrowRight className="ms-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeitherlandVpFeatureElement;
