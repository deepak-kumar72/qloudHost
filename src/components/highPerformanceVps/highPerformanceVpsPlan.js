import React, { useState, useEffect } from "react";
import Link from "next/link";
import VpsPlan from "../commonComponent/vpsPlan";



const HighPerformanceVpsPlan = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/highPerformanceVps.json"); // Fetch from public folder
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
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
          {data.highPerformancevpsPlan.title}
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
        {data.highPerformancevpsPlan.description}
        </p>
        <VpsPlan/>
        {/* vps Plan Data */}

        
        <div className="text-center mt-3">
          <span className="consult"> {data.highPerformancevpsPlan.additionalText.map((part, idx) => {
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
          })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HighPerformanceVpsPlan;
