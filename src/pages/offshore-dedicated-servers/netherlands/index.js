import EnterpriseGrade from "@/components/commonComponent/enterpriseGrade";
import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import WebsiteCover from "@/components/commonComponent/websiteCover";
import DedicatedNetherlandPlan from "@/components/dedicatedServerNetherland.js/dedicatedNetherlandPlan";
import FAQsSection from "@/components/commonComponent/faqSection";
import React, { useState, useEffect } from "react";
import ChatNow from "@/components/commonComponent/chatNow";

const DedicatedNetherlands = () => {
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
    return <div></div>;
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
      <ChatNow/>
    </div>
  )
}

export default DedicatedNetherlands
