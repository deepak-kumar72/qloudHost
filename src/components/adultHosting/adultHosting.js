import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent';
import AdultHostingPlans from './components/adultHostingPlans';
import DedicatedAdultPlan from './components/dedicatedAdultPlans';
import CustomSolution from '../streamingServer/components/customSolution';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FAQsSection from '../commonComponent/faqSection';
import AdultHostingFeatureElement from './components/AdultHostingFeatureElement';

import QloudGuarantees from './components/qloudGurantees';




const AdultHosting = () => {
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
    return <div>Loading...</div>;
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

    </div>
  )
}

export default AdultHosting;
