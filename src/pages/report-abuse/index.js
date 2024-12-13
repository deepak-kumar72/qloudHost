import HeroSection from "@/components/privacyPolicy/heroSection";
import ReportAbusecon from "@/components/reportAbuse/reportAbusecon";
import React, { useEffect, useState } from "react";

const ReportAbu = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/reportAbuse.json"); // Path to your JSON file in the public folder
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

  const { heroComponent } = data;
  return (
    <div>
      <HeroSection
      {...heroComponent}

      />
      <ReportAbusecon/>
    </div>
  )
}

export default ReportAbu
