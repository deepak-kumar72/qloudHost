import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import DmcaFeatureElement from "@/components/dmcaIgnoredVps/dmcaFeatureElement";
import React, { useState, useEffect } from "react";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import DmcaIgnoredVpsPlan from "@/components/dmcaIgnoredVps/dmcaIgnoredVpsPlan";

const DmcaVps = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dmcaIgnoredVps.json"); // Fetch from public folder
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
      <HeroComponent {...heroComponent} />
      <DmcaIgnoredVpsPlan/>
<WebHostingGurantees {...hostingGurantees}
/>
<TechnicalSpecification />
<InstallationPanel
{...installationPanel}
/>
<DmcaFeatureElement />
<QlodHostServices
heading={data.featureHeading.Heading}
content={data.featureHeading.subHeading}
features={data.features}
/>
<Testimonials />
<FAQsSection faqs={data.faqsData} />
<ChatNow/>
    </div>
  )
}

export default DmcaVps
