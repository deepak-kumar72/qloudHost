
import React, { useState, useEffect } from "react";
import DedicatedPlan from "../commonComponent/dedicatedPlan";

// import DedicatedPlan from '../../commonComponent/dedicatedPlan';

const DedicatedAdultPlan = () => {
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
    return <div></div>;
  }

  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">{data.dedicatedPlan.title}</h2>
      <p className="text-center mb-5 planHead-con m-auto">{data.dedicatedPlan.description}</p>
      
       <DedicatedPlan/>
      </div>
    </div>
  );
};

export default DedicatedAdultPlan;

  