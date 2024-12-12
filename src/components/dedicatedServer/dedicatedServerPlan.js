import React, { useState, useEffect } from "react";
import Link from "next/link";
import DedicatedPlan from "../commonComponent/dedicatedPlan";

const DedicatedServerPlan = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dedicatedServer.json"); // Fetch from public folder
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
    <div className="hosting-plan mb-5">
      <div className="plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">{data.planSection.heading}</h2>
        <p className="text-center mb-5 planHead-con m-auto">{data.planSection.subHeading}</p>

        <DedicatedPlan />

        <div className="text-center mt-3">
          <span className="consult">
          {data.planSection.consultationText.map((part, idx) => {
                        if (part.type === "text") {
                          return <span key={idx}>{part.content}</span>;
                        } else if (part.type === "link") {
                          return (
                            <Link key={idx} href={part.url} className="fw-bold">
                              {part.content}
                            </Link>
                          );
                        } 
                        return null;
                      })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DedicatedServerPlan;
