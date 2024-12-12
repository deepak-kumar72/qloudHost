// pages/index.js
// import Home from "../components/homeComponent/home";
import React, { useState, useEffect } from "react";
import '../styles/Home.module.css'
import HeroComponent from "@/components/commonComponent/heroComponent";
import HostingPlans from "@/components/homeComponent/hostingPlans";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QloudHostFeatures from "@/components/homeComponent/qloudHostFeatures";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import Services from "@/components/homeComponent/services";
import BlogSection from "@/components/homeComponent/blogSection";
import Resources from "@/components/homeComponent/resources";
import Testimonials from "@/components/commonComponent/testimonial";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";


export default function HomePage() {
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
      <HeroComponent {...heroComponent} />
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
      <FAQsSection faqs={data.faqsData} />
      <ChatNow/>
    </div>
  )
}
