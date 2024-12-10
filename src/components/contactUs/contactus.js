import React, { useState, useEffect } from "react";
import HeroSection from '../privacyPolicy/heroSection'
import ContactSupport from './components/contactSupport'
// import ContactUsForm from './components/contactUsForm'
import ContactCompo from './components/contactCompo';

const Contactus = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/contactUs.json"); // Path to your JSON file in the public folder
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
  const { heroSection } = data;
  return (
    <div>
    <HeroSection {...heroSection}   
    />
    <ContactSupport/>
    <ContactCompo/>
    </div>
  )
}

export default Contactus
