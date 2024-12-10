import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import VpsPlan from "../../commonComponent/vpsPlan";

const AdultHostingPlans = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/adultHosting.json"); // Fetch from public folder
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
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
          {data.vpsPlan.title}
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
          {data.vpsPlan.description.map((part, idx) => {
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
        </p>

        <VpsPlan />
        <div className="text-center mt-3">
          <span className="consult">
          {data.vpsPlan.additionalText.map((part, idx) => {
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

export default AdultHostingPlans;
