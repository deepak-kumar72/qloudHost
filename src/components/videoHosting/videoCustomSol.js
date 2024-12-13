import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const VideocustomSolution = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/videohosting.json"); // Fetch from public folder
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
    <div className="py-5 custom-sol mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12  customSol-text">
            <h3 className="mb-4">
              {data.VideocustomSolution.Heading}
            </h3>
            <p>
              {data.VideocustomSolution.subHeading}
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 m-auto text-center">
            <Link href="/contact-us/">
              <button className=" start-now-btn custom-sol-btn">
                Contact Us <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideocustomSolution;
