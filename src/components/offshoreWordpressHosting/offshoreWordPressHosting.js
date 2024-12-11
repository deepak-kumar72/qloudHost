import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent'
import OffWordpressPlan from './components/offshoreWordpressPlan'
import WordpressFeatureElement from './components/wordpressFeatureElement'
import QlodHostServices from '../commonComponent/qlodHostServices'
import FAQsSection from '../commonComponent/faqSection'
import WebHostingGurantees from '../offShoreHosting/components/webHostingGurantees'
import Link from "next/link";


const OffshoreWordPressHosting = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/wordprssHosting.json"); // Fetch from public folder
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
      <HeroComponent
     {...heroComponent}
      />
      <OffWordpressPlan />
      <WebHostingGurantees
      title='QloudHost Guarantees'
        subHeading="Allow our Best & Cheap Offshore hosting in Netherlands to exceed your expectations."
      />
      <WordpressFeatureElement />
      <QlodHostServices
            heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features} />
      <FAQsSection
        faqs={data.faqsData} 
      />
    </div>
  )
}

export default OffshoreWordPressHosting
