import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const MoneyBack = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/coupons.json"); // Path to your JSON file in the public folder
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
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7 chat-sec">
            <h3>{data.moneyBack.title}</h3>
            <p>{data.moneyBack.description}</p>
          </div>
          <div className="col-md-5 m-auto text-center">
            <Link href={data.moneyBack.buttonLink}>
              <button className="start-now-btn">
                {data.moneyBack.buttonText}
                <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyBack;
