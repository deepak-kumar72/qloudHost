import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import Testimonials from "@/components/commonComponent/testimonial";
import FeatureElement from "@/components/ffmpegHosting/featureElement";
import FFmpegFeaturesYouGet from "@/components/ffmpegHosting/ffmpegFeatureYouGet";
import FFmpegTechnicalSpecification from "@/components/ffmpegHosting/ffmpegTechincalSpecification";
import FFmpegVpsPlan from "@/components/ffmpegHosting/ffmpegVpsPlan";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import React, { useState, useEffect } from "react";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

const FFmpeg = () => {
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
    return <div></div>;
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
         <ChatNow/>
    </div>
  )
}

export default FFmpeg;
