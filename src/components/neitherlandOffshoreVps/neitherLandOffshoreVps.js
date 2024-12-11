import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent';
import NeitherLandOffshoreVpsPlan from './components/neitherlandVpsPlan';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import FAQsSection from '../commonComponent/faqSection';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import NeitherlandVpFeatureElement from './components/neitherlandVpsFeatureElement';
import Link from "next/link";
import QloudGuarantees from '../adultHosting/components/qloudGurantees';




const NeitherLandOffshoreVps = () => {
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
    return <div>Loading...</div>;
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
      <NeitherlandVpFeatureElement />
      <QlodHostServices
         heading={data.featureHeading.Heading}
         content={data.featureHeading.subHeading}
        features={data.features} />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
    </div>
  )
}

export default NeitherLandOffshoreVps
