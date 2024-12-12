import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import CustomSolution from "@/components/streamingServer/customSolution";
import PopularStreamingUse from "@/components/streamingServer/popularStreamingUse";
import Guarantees from "@/components/streamingServer/qloudHostGurantees";
import StreamingServerPlan from "@/components/streamingServer/streamingServerPlan";
import StreamingServerQuality from "@/components/streamingServer/streamingServerQuality";
import React, { useState, useEffect } from "react";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

const StreamingServer = () => {
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
<ChatNow/>

    </div>
  )
}

export default StreamingServer
