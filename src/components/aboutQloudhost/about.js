import React, { useState, useEffect } from "react";
import HeroSection from '../privacyPolicy/heroSection'
import AboutFeatures from './components/aboutFeature'
import QloudHostGurantees from './components/qloudHostGurantees'
// import InstallationPanel from '../commonComponent/installationPanel';
import TechnologyPartners from './components/technologyPartners';
import Resources from '../homeComponent/components/resources';

const About = () => {
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

export default About
