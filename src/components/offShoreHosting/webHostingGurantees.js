import React, { useState, useEffect } from "react";
import Image from "next/image";

function WebHostingGurantees({title, subHeading }) {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/webHosting.json"); // Fetch from public folder
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
    <div className="container my-5">
      <div className="p-4">
        <h2 className="text-center mb-4 w-100">{title}</h2>
        <p className="text-center mb-5">{subHeading}</p>
        <div className="row guarantees-box rounded">
          {data.webHostingGurantees.guarantees.map((guarantee, index) => (
            <div key={index} className={`col-md-4 mb-4 mb-md-0 guarantee-item d-flex`}>
              <div className="p-3">
                <div className="icon mb-3">
                  <Image
                    src={guarantee.icon}
                    alt={guarantee.alt}
                    className="qloudGurantee-img"
                    height={1000}
                    width={1000}
                  />
                </div>
                <h5>{guarantee.title}</h5>
                <p>{guarantee.description}</p>
              </div>
              {index < data.webHostingGurantees.guarantees.length - 1 && <div className="gurantee-seprator" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebHostingGurantees;
