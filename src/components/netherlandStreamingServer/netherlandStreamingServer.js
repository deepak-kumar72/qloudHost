import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent';
import NetherLandStreamingPlan from './components/netherlandStreamingPlan';
import OpenTicket from './components/openTicket';
import Guarantees from '../streamingServer/components/qloudHostGurantees';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import FAQsSection from '../commonComponent/faqSection';
import QlodHostServices from '../commonComponent/qlodHostServices';
import PopularStreamingUse from '../streamingServer/components/popularStreamingUse';
import NetherLandStreamingFeature from './components/netherlandStreamingFeature';


const NetherlandStreamingServer = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/netherlandStreaming.json"); // Fetch from public folder
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
      <NetherLandStreamingPlan/>
      <OpenTicket/>
      <Guarantees
        subHeading='Boost your website performance with world-class Best & Cheap Netherlands streaming servers and guaranteed performance.'
      />
      <TechnicalSpecification/>
      <InstallationPanel
        title="Operating Systems"
        description="Install your desired OS in just a matter of seconds!"
        buttonText="Get Started Now"
        url='#explore'
        panelOptions={[
          { name: 'cPanel', img: '/assets/icon/cPanel.png' },
          { name: 'CyberPanel', img: '/assets/icon/cyberPanel.png'},
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'Windows', img: '/assets/icon/window-icon.png' },
          { name: 'Debian', img: '/assets/icon/debain.png'},
        ]}
      />
      <NetherLandStreamingFeature/>
      <QlodHostServices 
      heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features} />
      <PopularStreamingUse/>
      <FAQsSection
         faqs={data.faqsData} 
      />
      
    </div>
    
  )
}

export default NetherlandStreamingServer
