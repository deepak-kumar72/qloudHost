import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/dedicatedServer.json"); // Replace with your actual URL
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const WebsiteCover = ({ data }) => {
  if (!data) {
    return <div></div>; // Better fallback UI
  }

  const ServiceSection = ({ data }) => {
    const { heading, servicesData } = data;

    return (
      <div className="service-section">
        <div className="container py-5">
          <h2 className="text-center text-white mb-4 m-auto w-100">{heading}</h2>
          <div className="row service-section1">
            {servicesData.map((service) => (
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
                        <Link
                          href={service.buttonLink}
                          className="btn start-now-btn start-now mt-3"
                        >
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

  return (
    <div>
      <ServiceSection data={data} />
    </div>
  );
};

export default WebsiteCover;
