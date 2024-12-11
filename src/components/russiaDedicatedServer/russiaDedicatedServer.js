import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent'
import RussiaDedicatedPlan from './components/russiaDedicatedPlan'
import QlodHostServices from '../commonComponent/qlodHostServices'
import InstallationPanel from '../commonComponent/installationPanel'
import FAQsSection from '../commonComponent/faqSection'
import EnterpriseGrade from '../commonComponent/enterpriseGrade'
import WebsiteCover from '../commonComponent/websiteCover'
  
 
  

const RussiaDedicatedServer = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/russiaDedicated.json"); // Fetch from public folder
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
      <RussiaDedicatedPlan/>
      <EnterpriseGrade
        heading="Enterprise-Grade DMCA Ignored Dedicated Servers"
        subHeading="Lease a dependable and cheap dmca ignored dedicated hosting with unmetered resources for your business, 
        and enjoy unparalleled processing power coupled with top-tier security for your critical applications. 
        We provide top-notch hardware, incredibly fast network speeds, and round-the-clock support at budget-friendly rates.
         Whether you’re hosting a website or scripting a site, choose QloudHost for an exceptional experience:"
      />
      <QlodHostServices
      heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features} />
      <InstallationPanel
        title="Fast OS/Admin Panel Installation!"
        description="Revamp high-quality possibilities effectively instead of focusing solely on innovative ideas.
Utilize advanced technology security measures to ensure accurate information dissemination."
        buttonText="Get Started Now"
        url='explore'
        panelOptions={[
          { name: 'cPanel', img: '/assets/icon/cPanel.png' },
          { name: 'DirectAdmin', img: '/assets/icon/directAdmin.png' },
          { name: 'CyberPanel', img: '/assets/icon/cyberPanel.png'},
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'debian', img: '/assets/icon/debain.png' },
        ]}
      />
      <WebsiteCover/>
      <FAQsSection
        faqs={data.faqsData} 
      />
    </div>
  )
}

export default RussiaDedicatedServer
