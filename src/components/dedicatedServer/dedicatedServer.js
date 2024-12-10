import React, { useState, useEffect } from "react";
import HeroComponent from "../commonComponent/heroComponent";
import QlodHostServices from "../commonComponent/qlodHostServices";
import InstallationPanel from "../commonComponent/installationPanel";
import Testimonials from "../commonComponent/testimonial";
import FAQsSection from "../commonComponent/faqSection";
import DedicatedServerPlan from "./components/dedicatedServerPlan";
import EnterpriseGrade from "../commonComponent/enterpriseGrade";
import DedicatedHostingSolution from "../dmcaDedicatedServers/components/dedicatedHostingSolution";
import WebsiteCover from "../commonComponent/websiteCover";




const DedicatedServer = () => {
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

  // Destructure data for cleaner usage
  const { heroComponent, installationPanel } = data;
  return (
    <div>
      <HeroComponent {...heroComponent}
      />
      <DedicatedServerPlan />
      <EnterpriseGrade
      heading={data.enterPriseGrade.heading}
      subHeading={data.enterPriseGrade.subHeading}
      />
      <QlodHostServices
      heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features}
      />
      <DedicatedHostingSolution />
      <InstallationPanel {...installationPanel}
      />
      <WebsiteCover />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
    </div>
  );
};

export default DedicatedServer;
