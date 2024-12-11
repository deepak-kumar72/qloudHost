import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent';
import StreamingServerPlan from './components/streamingServerPlan';
import InstallationPanel from '../commonComponent/installationPanel';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import StreamingServerQuality from './components/streamingServerQuality';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FAQsSection from '../commonComponent/faqSection';
import PopularStreamingUse from './components/popularStreamingUse';
import CustomSolution from './components/customSolution';
import Guarantees from './components/qloudHostGurantees';
import Link from "next/link";



const Streaming = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/streaming.json"); // Fetch from public folder
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
    <HeroComponent {...heroComponent}

      />
      <StreamingServerPlan/>
      <CustomSolution
        solTitle="Need Custom Solution Media Streaming Offshore Servers"
        solText="Server solutions that scale with your business to deliver exceptional performance on even the most demanding Streaming, IPTV media streaming projects."
      />
      <Guarantees
        subHeading="Boost your website performance with world-class Best & Cheap offshore streaming servers
          and guaranteed performance."
      />
      <TechnicalSpecification/>
      <InstallationPanel
        title="Operating Systems"
        description="Install your desired OS in just a matter of seconds!"
        buttonText="Get Started Now"
        url='#explore'
        panelOptions={[
          { name: 'AlmaLinux', img: '/assets/icon/almaLinux.png'},
          { name: 'Rocky Linux', img: '/assets/icon/rockyLinux.png'},
          { name: 'Debian', img: '/assets/icon/debain.png'},
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'Windows', img: '/assets/icon/window-icon.png' },
        ]}
      />
      <StreamingServerQuality/>
      <QlodHostServices 
       heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features} />
      <PopularStreamingUse/>
      <Testimonials/>
      <FAQsSection
        faqs={data.faqsData} 
      />
    </div>
  )
}

export default Streaming;
