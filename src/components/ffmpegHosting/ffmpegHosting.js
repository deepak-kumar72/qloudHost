import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent'
import FFmpegVpsPlan from './components/ffmpegVpsPlan';
import WebHostingGurantees from '../offShoreHosting/components/webHostingGurantees';
import FFmpegTechnicalSpecification from './components/ffmpegTechincalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import FeatureElement from './components/featureElement';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FFmpegFeaturesYouGet from './components/ffmpegFeatureYouGet';
import FAQsSection from '../commonComponent/faqSection';
import { LuShieldCheck } from "react-icons/lu";

 

const FFmpegHosting = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/ffmpegHosting.json"); // Fetch from public folder
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
  const { heroComponent, installationPanel, hostingGurantees } = data;
  return (
    <div>
      <HeroComponent {...heroComponent}
         
      />
      <FFmpegVpsPlan/>
      <WebHostingGurantees
      {...hostingGurantees} />
      <FFmpegTechnicalSpecification/>

      <InstallationPanel
        {...installationPanel}
      />
      <FeatureElement/>
      <QlodHostServices
        heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features}
      />
      <FFmpegFeaturesYouGet/>
      <Testimonials/>
      <FAQsSection
        faqs={data.faqsData} 
      />
    </div>
    
  )
}

export default FFmpegHosting;
