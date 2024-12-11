import React, { useState, useEffect } from "react";
import HeroComponent from "../commonComponent/heroComponent";
import DedicatedNetherlandPlan from "./component/dedicatedNetherlandPlan";
import QlodHostServices from "../commonComponent/qlodHostServices";
import InstallationPanel from "../commonComponent/installationPanel";
import FAQsSection from "../commonComponent/faqSection";
import EnterpriseGrade from "../commonComponent/enterpriseGrade";
import WebsiteCover from "../commonComponent/websiteCover";



const DedicatedServerNetherland = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dedicatedServerNetherland.json"); // Fetch from public folder
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
  const { heroComponent, installationPanel } = data;
  return (
    <div>
      <HeroComponent {...heroComponent} />
      <DedicatedNetherlandPlan />
      <EnterpriseGrade
        heading={data.enterPriseGrade.heading}
        subHeading={data.enterPriseGrade.subHeading}
      />
      <QlodHostServices heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}

      />
      <InstallationPanel {...installationPanel} />
      <WebsiteCover />
      <FAQsSection faqs={data.faqsData} />
    </div>
  );
};

export default DedicatedServerNetherland;
