import QloudGuarantees from "@/components/adultHosting/qloudGurantees";
import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import FAQsSection from "@/components/commonComponent/faqSection";
import NeitherlandVpFeatureElement from "@/components/neitherlandOffshoreVps/neitherlandVpsFeatureElement";
import NeitherLandOffshoreVpsPlan from "@/components/neitherlandOffshoreVps/neitherlandVpsPlan";
import React, { useState, useEffect } from "react";
import ChatNow from "@/components/commonComponent/chatNow";

const VpsNetherlands = () => {
  const [data, setData] = useState(); // State to store the JSON data

  const getData = async () => {
    try {
      const response = await fetch("/data/vpsneitherlandoffshore.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <div></div>;
  }

  const { heroComponent, installationPanel } = data;
  return (
    <div>
       <HeroComponent {...heroComponent} />
      <NeitherLandOffshoreVpsPlan />

      <QloudGuarantees
        subHeading="Boost your website performance with world-class Best & Cheap Netherlands offshore VPS Hosting servers and guaranteed performance."
      />
      <TechnicalSpecification />
      <InstallationPanel {...installationPanel}
      />
      <NeitherlandVpFeatureElement/>
      <QlodHostServices
         heading={data.featureHeading.Heading}
         content={data.featureHeading.subHeading}
        features={data.features} />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow/>
    </div>
  )
}

export default VpsNetherlands
