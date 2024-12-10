import React, { useState, useEffect } from "react";
import HeroComponent from "../commonComponent/heroComponent";
import FAQsSection from "../commonComponent/faqSection";
import QlodHostServices from "../commonComponent/qlodHostServices";
import GetPaidMethod from "./getPaidMethod";

const Affiliate = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/affiliate.json"); // Path to your JSON file in the public folder
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

  // Destructure data for cleaner usage
  const { heroComponent, qlodHostServices } = data;

  return (
    <div>
      <HeroComponent {...heroComponent}
      />
      <GetPaidMethod />
      <QlodHostServices {...qlodHostServices}
      />
      <FAQsSection faqs={data.faqs} />
    </div>
  );
};

export default Affiliate;
