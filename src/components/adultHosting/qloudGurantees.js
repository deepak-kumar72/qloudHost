import React, { useState, useEffect } from "react";
import Image from "next/image";

function QloudGuarantees({ subHeading }) {
  const [data, setData] = useState(null);

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/adultHosting.json"); // Fetch JSON data from public folder
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
    <div className="container my-5">
      <div className="py-4">
        <h2 className="text-center mb-4 w-100">{data.qloudHostGurantees.heading}</h2>
        <p className="text-center mb-5">{subHeading}</p>
        <div className="row guarantees-box rounded">
          {data.qloudHostGurantees.guarantees.map((item, index) => (
            <div
              className={`col-md-4 ${index < 2 ? "mb-4 mb-md-0" : ""} guarantee-item d-flex`}
              key={index}
            >
              <div className="p-3">
                <div className="icon mb-3">
                  <Image
                    src={item.icon}
                    alt={item.altText}
                    className="qloudGurantee-img"
                    width={1000}
                    height={1000}
                  />
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
              {index < 2 && <div className="gurantee-seprator" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QloudGuarantees;
