import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import FeaturesYouGet from "@/components/offShoreVps/featuresYouGet";
import OffshoreVpsPlan from "@/components/offShoreVps/offshoreVpsPlan";
import PrivacyHardwarePage from "@/components/offShoreVps/privacyHardwarePage";
import FAQsSection from "@/components/commonComponent/faqSection";
import React, { useState, useEffect } from "react";
import ChatNow from "@/components/commonComponent/chatNow";

const VpsHosting = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/offshoreVps.json"); // Fetch from public folder
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
       <HeroComponent
          {...heroComponent} 
      />
      <OffshoreVpsPlan/>
      <WebHostingGurantees
      title='Why choose QloudHost as your Offshore VPS provider?'
      subHeading="Boost your website performance with world-class Best Offshore hosting DMCA Ignored servers and guaranteed performance."/>
      <TechnicalSpecification />
      <InstallationPanel
       {...installationPanel}
      />
      <PrivacyHardwarePage />
      <QlodHostServices
        heading={data.featureHeading.Heading}
         content={data.featureHeading.subHeading}
        features={data.features}
      />
      <FeaturesYouGet />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow/>
    </div>
  )
}

export default VpsHosting
