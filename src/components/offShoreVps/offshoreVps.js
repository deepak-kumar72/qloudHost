import React, { useState, useEffect } from "react";
import HeroComponent from "../commonComponent/heroComponent";
import TechnicalSpecification from "../commonComponent/technicalSpecification";
import OffshoreVpsPlan from "./components/offshoreVpsPlan";
import InstallationPanel from "../commonComponent/installationPanel";
import QlodHostServices from "../commonComponent/qlodHostServices";
import Testimonials from "../commonComponent/testimonial";
import PrivacyHardwarePage from "../offShoreVps/components/privacyHardwarePage";
import FeaturesYouGet from "./components/featuresYouGet";
import FAQsSection from "../commonComponent/faqSection";
import Link from "next/link";
import WebHostingGurantees from "../offShoreHosting/components/webHostingGurantees";



const OffshoreVps = () => {
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
      <OffshoreVpsPlan />
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
    </div>
  );
};

export default OffshoreVps;
