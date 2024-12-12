
import AboutFeatures from '@/components/aboutQloudhost/aboutFeature';
import QloudHostGurantees from '@/components/aboutQloudhost/qloudHostGurantees';
import TechnologyPartners from '@/components/aboutQloudhost/technologyPartners';
import Resources from '@/components/homeComponent/resources';
import HeroSection from '@/components/privacyPolicy/heroSection';
import React, { useState, useEffect } from "react";


const AboutPage = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/about.json"); // Fetch from public folder
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
      <HeroSection
      {...heroComponent}    
      />
      <AboutFeatures/>
      <QloudHostGurantees/>
      <TechnologyPartners/>
      <Resources />
    </div>
  )
}

export default AboutPage;
