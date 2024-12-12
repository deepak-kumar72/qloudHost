import EnterpriseGrade from "@/components/commonComponent/enterpriseGrade";
import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import WebsiteCover from "@/components/commonComponent/websiteCover";
import DedicatedHostingSolution from "@/components/dmcaDedicatedServers/dedicatedHostingSolution";
import DmcaDedicatedPlan from "@/components/dmcaDedicatedServers/dmcaDedicatedServerPlan";
import React, { useState, useEffect } from "react";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

const DmcaDedicated = () => {
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
      <DedicatedHostingSolution/>
      <InstallationPanel
       {...installationPanel}
      />
      <WebsiteCover/>
      <FAQsSection faqs={data.faqsData}  />
      <ChatNow/>
    </div>
  )
}

export default DmcaDedicated
