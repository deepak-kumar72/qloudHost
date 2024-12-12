import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";

const ContactSupport = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/contactUs.json"); // Path to your JSON file in the public folder
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
    <div className="contact-banner">
      <div className="container py-5">
        <h2 className="text-center mb-5 m-auto">
          {data.support.technicalSupport.title}
        </h2>
        <div className="row gy-4 contact-container m-auto mb-5">
          {/* Technical Support Section */}
          <div className="col-12 col-md-6 col-lg-4 contact-method mb-3">
            <div className="con-support">
              <div>
                <BiSupport className="support-icon" />
              </div>
              <h4>{data.support.technicalSupport.title}</h4>
              <p className="mb-4">
                {data.support.technicalSupport.description}
              </p>
              {data.support.technicalSupport.features.map((feature, index) => (
                <p className="mb-2" key={index}>
                  <FaCheck className="me-2 content-opt" /> {feature}
                </p>
              ))}
              <Link
                href={data.support.technicalSupport.ticketLink}
                className="contact-link"
              >
                Submit Ticket
              </Link>
            </div>
          </div>

          {/* Sales Section */}
          <div className="col-12 col-md-6 col-lg-8 contact-method mb-3">
            <div className="container-fluid">
              <div className="row gy-4">
                <div className="col-12 mb-4 d-flex">
                  <div className="email-us d-flex justify-content-between w-100">
                    <div className="">
                      <h4>{data.support.sales.title}</h4>
                      <p className="mb-2 support-mail">
                        {data.support.sales.email}
                      </p>
                      <Link
                        href={data.support.sales.connectLink}
                        onClick={(e) => handleTawkToggle(e)}
                        className="contact-link"
                      >
                        Connect with Sales #
                      </Link>
                    </div>
                    <div>
                      <Image
                        src="/assets/sales.svg"
                        alt="sales"
                        className="w-75 h-100"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Billing Section */}
              <div className="row">
                <div className="col-12 col-lg-6 contact-method mb-3">
                  <div className="con-billing">
                    <h4 className="mb-4">{data.support.billing.title}</h4>
                    <p className="mb-2 support-mail">
                      {data.support.billing.email}
                    </p>
                  </div>
                </div>

                {/* Live Chat Section */}
                <div className="col-12 col-lg-6 contact-method mb-3">
                  <div className="live-chat">
                    <h4>{data.support.liveChat.title}</h4>
                    <p className="mb-4">{data.support.liveChat.description}</p>
                    <Link
                      href={data.support.liveChat.chatLink}
                      onClick={(e) => handleTawkToggle(e)}
                      className="contact-link"
                    >
                      Live Chat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Section */}
        <div className="row looking-more">
          <div className="col-md-8">
            <div className="">
              <h3 className="fw-bold">{data.support.more.title}</h3>
              <p className="">{data.support.more.description}</p>
              <Link href={data.support.more.buttonLink} className="btn more-btn">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <Image
              src="/assets/looking-for-more.svg"
              alt="looking more"
              className="w-75 h-100"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
