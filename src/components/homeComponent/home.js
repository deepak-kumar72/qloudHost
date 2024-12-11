
import React, { useState, useEffect } from "react";
import HeroComponent from "../commonComponent/heroComponent";
import HostingPlans from "./components/hostingPlans";
import TechnicalSpecification from "../commonComponent/technicalSpecification";
import QloudHostFeatures from "./components/qloudHostFeatures";
import QlodHostServices from "../commonComponent/qlodHostServices";
import InstallationPanel from "../commonComponent/installationPanel";
import Services from "../homeComponent/components/services";
import Resources from "./components/resources";
import FAQsSection from "../commonComponent/faqSection";
import BlogSection from "./components/blogSection";
import Testimonials from "../commonComponent/testimonial";
import ChatNow from "../commonComponent/chatNow";


const Home = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/home.json"); // Fetch from public folder
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
      <HeroComponent
        {...heroComponent} 
      />
      <HostingPlans />
      <TechnicalSpecification />
      <QloudHostFeatures />
      <InstallationPanel {...installationPanel}
      />
      <QlodHostServices
         heading={data.featureHeading.Heading}
         content={data.featureHeading.subHeading}
        features={data.features} // Use JSON data
      />
      <Services servicesData={data.servicesData1} /> {/* Use JSON data */}
      <BlogSection />
      <Resources />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} /> {/* Use JSON data */}
      <ChatNow/>
    </div>
  );
};

export default Home;
