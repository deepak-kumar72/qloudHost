import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent'
import WindowsRdpPlan from './components/windowsRdpPlan';
import ChooseQloudHost from './components/chooseQloudHost';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import AvailableWos from './components/availabelWos';
import QlodHostServices from '../commonComponent/qlodHostServices';
import FAQsSection from '../commonComponent/faqSection';
import Testimonials from '../commonComponent/testimonial';
import RdpFeatureBanner from './components/rdpfeaturebanner';




const WindowsRdp = () => {

  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/windowrdp.json"); // Fetch from public folder
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
      <WindowsRdpPlan />

      <ChooseQloudHost />
      <TechnicalSpecification />
      <AvailableWos />

      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />

      <RdpFeatureBanner />

      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
    </div>
  )
}

export default WindowsRdp 
