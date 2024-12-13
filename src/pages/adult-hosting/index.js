
import AdultHostingFeatureElement from '@/components/adultHosting/AdultHostingFeatureElement';
import AdultHostingPlans from '@/components/adultHosting/adultHostingPlans';
import DedicatedAdultPlan from '@/components/adultHosting/dedicatedAdultPlans';
import QloudGuarantees from '@/components/adultHosting/qloudGurantees';
import HeroComponent from '@/components/commonComponent/heroComponent';
import InstallationPanel from '@/components/commonComponent/installationPanel';
import QlodHostServices from '@/components/commonComponent/qlodHostServices';
import TechnicalSpecification from '@/components/commonComponent/technicalSpecification';
import Testimonials from '@/components/commonComponent/testimonial';
import CustomSolution from '@/components/streamingServer/customSolution';
import FAQsSection from "@/components/commonComponent/faqSection";
import React, { useState, useEffect } from "react";
import ChatNow from '@/components/commonComponent/chatNow';

const Adult = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/adultHosting.json"); // Fetch from public folder
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
  const { heroComponent, installationPanel, qloudHostGurantees, customSol} = data;
  return (
    <div>
       <HeroComponent {...heroComponent}
      />
      <AdultHostingPlans/>
      <DedicatedAdultPlan/>
      <CustomSolution {...customSol}
      />
      <QloudGuarantees subHeading={qloudHostGurantees.subHeading}
      />
      <TechnicalSpecification/>
      <InstallationPanel
       {...installationPanel}
      />
      <AdultHostingFeatureElement/>
      <QlodHostServices
       heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features} />
      <Testimonials/>
      <FAQsSection
      faqs={data.faqsData} 
      />
      <ChatNow/>
    </div>
  )
}

export default Adult;
