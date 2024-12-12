import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import AvailableWos from "@/components/windowsRdp/availabelWos";
import ChooseQloudHost from "@/components/windowsRdp/chooseQloudHost";
import RdpFeatureBanner from "@/components/windowsRdp/rdpfeaturebanner";
import WindowsRdpPlan from "@/components/windowsRdp/windowsRdpPlan";
import React, { useState, useEffect } from "react";
import FAQsSection from "@/components/commonComponent/faqSection";

const WindowsVps = () => {
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
  const { heroComponent} = data;
  return (
    <div>
       <HeroComponent {...heroComponent} />
      <WindowsRdpPlan />

      <ChooseQloudHost />
      <TechnicalSpecification />
      <AvailableWos/>

      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />

      <RdpFeatureBanner />

      <Testimonials/>
      <FAQsSection faqs={data.faqsData} />
    </div>
  )
}

export default WindowsVps
