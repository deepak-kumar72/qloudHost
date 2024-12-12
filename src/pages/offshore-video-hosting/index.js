import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Guarantees from "@/components/streamingServer/qloudHostGurantees";
import VideocustomSolution from "@/components/videoHosting/videoCustomSol";
import VideoHostingFeatureElement from "@/components/videoHosting/videoHostingFeatureElement";
import VideoHostingPlan from "@/components/videoHosting/videoHostingPlan";
import React, { useState, useEffect } from "react";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

const OffshoreVideo = () => {
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
<ChatNow/>
    </div>
  )
}

export default OffshoreVideo
