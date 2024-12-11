import React, { useState, useEffect } from "react";
import HeroComponent from "../commonComponent/heroComponent";
import DmcaDedicatedPlan from "./components/dmcaDedicatedServerPlan";
import QlodHostServices from "../commonComponent/qlodHostServices";
import FAQsSection from "../commonComponent/faqSection";
import DedicatedHostingSolution from "./components/dedicatedHostingSolution";
import InstallationPanel from "../commonComponent/installationPanel";
import EnterpriseGrade from "../commonComponent/enterpriseGrade";
import WebsiteCover from "../commonComponent/websiteCover";
import Link from "next/link";


const DmcaDedicatedServer = () => {
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

  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, qloudHostGurantees, customSol, enterpriseGrade} = data;
  return (
    <div>
      <HeroComponent {...heroComponent}
      />
      <DmcaDedicatedPlan />
      <EnterpriseGrade
         {...enterpriseGrade}
      />
      <QlodHostServices
          heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features}
      />
      <DedicatedHostingSolution />
      <InstallationPanel
       {...installationPanel}
      />
      <WebsiteCover/>
      <FAQsSection faqs={data.faqsData}  />
    </div>
  );
};

export default DmcaDedicatedServer;
