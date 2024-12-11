import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent';
import HighPerformanceVpsPlan from './components/highPerformanceVpsPlan';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import VpsFeatureElement from './components/vpsFeatureElement';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FAQsSection from '../commonComponent/faqSection';
import WebHostingGurantees from '../offShoreHosting/components/webHostingGurantees';

const features = [
    {img: '/assets/serviceImg/privacy-protection_1.svg',
      title: "100% Privacy Protection",
      description:"Get impenetrable security and full data privacy with QloudHost offshore hosting servers. Sounds quite an affirmative statement, Right? But that’s true because we minimize our customer’s visibility to make your footprints untraceable on the internet.",
      link: "",
    },
    {img: '/assets/serviceImg/fair-and-affordable.svg',
      title: "Fair & Affordable",
      description:`QloudHost provides you the most affordable <a href='/dmca-ignored-vps/' class='faq-link'>DMCA Ignored VPS</a> plans to run your offshore hosting servers because we understand the value of your hard-earned money. Our plans are focused on providing you with well-balanced features to exclude unnecessary things and decrease the cost.`,
      link: "",
    },
    {img: '/assets/serviceImg/full-root-access_1.svg',
      title: "Full Root Access",
      description: "Get root level control to your server to customize it according to your needs and requirements. Isn’t it amazing? But how will this feature benefit your website? Simple, with root access, you are allowed to create, modify, customize or delete files of your website without seeking our permission.",
      link: "",
    },
    {img: '/assets/feature/uptime.svg',
      title: "99.9% uptime guaranteed.",
      description: "Our first priority is to provide you services with quality that’s why our all plans come with a guaranteed uptime of 99.9%. So let your website into our safe hands and we will ensure the availability of your website on the internet.",
      link: "",
    },
    {img: '/assets/serviceImg/website-migration.svg',
      title: "Free Website Migration",
      description: `Had a really bad experience with your previous service provider? Don’t worry! We have built a <a href='https://qloudhost.com/contact-us/' class='faq-link'>dedicated team</a> of technical experts to migrate your website to quality services without causing any data loss.`,
      link: "",
    },
    {img: '/assets/serviceImg/weekly-backup_1.svg',
      title: "Weekly Backup",
      description: "QloudHost has created a smart data backup feature to make your website’s data safer and more secure. But how? Simple, For Shared Hosting, we provide alternate day backup for 7 Days. (Included free) Whereas for VPS, Weekly backup available (1 Snapshot per week), will charge extra.",
      link: "",
    },
    
  ];

 

const HighPerformanceVps = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/highPerformanceVps.json"); // Fetch from public folder
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
  const { heroComponent, installationPanel, hostingGurantees } = data;
  return (
    <div>
      <HeroComponent {...heroComponent}

      />
      <HighPerformanceVpsPlan/>
      <WebHostingGurantees
      {...hostingGurantees}
      />
      <TechnicalSpecification/>
      <InstallationPanel
      {...installationPanel}
      />
      <VpsFeatureElement/>
      <QlodHostServices
        heading="What You Get with Your High Performance VPS Server"
        content="Looking for some good reasons to choose QloudHost? Here’s the reason of our confidence. "
        features={features} />
      <Testimonials/>
      <FAQsSection
        faqs={data.faqsData} 
      />
    </div>
  )
}

export default HighPerformanceVps
