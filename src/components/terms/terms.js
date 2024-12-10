import React, { useState, useEffect } from "react";
import HeroSection from '../privacyPolicy/heroSection';
import TermOfServices from './termOfServices';

const Terms = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/terms.json"); // Path to your JSON file in the public folder
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
  return (
    <div>
       <HeroSection
      subTitle=""
        title="Terms of services"
        description="By using our services, you agree to comply with all terms outlined. We reserve the right to modify, suspend, or terminate services at any time. Unauthorized use, illegal activities, or violations of policies may lead to account suspension. Please review our terms regularly for updates."
        imageSrc='/assets/Frame/heroImg-services.webp'   
      />
      <TermOfServices/>

    </div>
  )
}

export default Terms
