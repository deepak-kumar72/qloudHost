import React, { useState, useEffect } from "react";
import HeroSection from "./heroSection";
import Policies from "./policies";

const PrivacyPolicy = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/privacyPolicy.json"); // Path to your JSON file in the public folder
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

  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent}
      />
      <Policies />
    </div>
  );
};

export default PrivacyPolicy;
