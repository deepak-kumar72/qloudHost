import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import HighPerformanceVpsPlan from "@/components/highPerformanceVps/highPerformanceVpsPlan";
import VpsFeatureElement from "@/components/highPerformanceVps/vpsFeatureElement";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import React, { useState, useEffect } from "react";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

const HighPerformanceVpsHosting = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/highPerformanceVps.json"); // Fetch from public folder
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
  const { heroComponent, installationPanel, hostingGurantees } = data;
  return (
    <div>
      <HeroComponent {...heroComponent}

/>
<HighPerformanceVpsPlan/>
<WebHostingGurantees
{...hostingGurantees}
/>
<TechnicalSpecification/>
<InstallationPanel
{...installationPanel}
/>
<VpsFeatureElement/>
<QlodHostServices
  heading={data.featureHeading.Heading}
   content={data.featureHeading.subHeading}
  features={data.features}
   />
<Testimonials/>
<FAQsSection
  faqs={data.faqsData} 
/>
<ChatNow/>
    </div>
  )
}

export default HighPerformanceVpsHosting
