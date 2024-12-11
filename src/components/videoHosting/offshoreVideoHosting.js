import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent';
import VideoHostingPlan from './components/videoHostingPlan';
import VideocustomSolution from './components/videoCustomSol';
import Guarantees from '../streamingServer/components/qloudHostGurantees';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import QlodHostServices from '../commonComponent/qlodHostServices';
import FAQsSection from '../commonComponent/faqSection';
import VideoHostingFeatureElement from './components/videoHostingFeatureElement';
import Link from "next/link";



const OffshoreVideoHosting = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/videohosting.json"); // Fetch from public folder
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
      <HeroComponent {...heroComponent} />

      <VideoHostingPlan />

      <VideocustomSolution />

      <Guarantees
        subHeading={data.Guarantees.subHeading}
      />
      <TechnicalSpecification />

      <InstallationPanel {...installationPanel}
      />

      <VideoHostingFeatureElement />

      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <FAQsSection faqs={data.faqsData} />
    </div>

  )
}

export default OffshoreVideoHosting
