
import React, { useState, useEffect } from "react";
import Link from "next/link";

import DedicatedPlan from '../commonComponent/dedicatedPlan';

const DmcaDedicatedPlan = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dmcaDedicatedServer.json"); // Fetch from public folder
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
    <div className="hosting-plan mb-5" id="explore">
      <div className=" plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">{data.dedicatedPlan.title}</h2>
      <p className="text-center mb-5 planHead-con m-auto">{data.dedicatedPlan.description}</p>
      
        <DedicatedPlan/>
        <div className="text-center mt-3">
          <span className="consult"> {data.dedicatedPlan.additionalText.map((part, idx) => {
            if (part.type === "text") {
              return <span key={idx}>{part.content}</span>;
            } else if (part.type === "link") {
              return (
                <Link key={idx} href={part.url} className="faq-link">
                  {part.content}
                </Link>
              );
            }
            return null;
          })}</span>
        </div>
      </div>
    </div>
  );
};

export default DmcaDedicatedPlan;

  