import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import images from '../../constants/images';
import AdultHostingPlans from './components/adultHostingPlans';
import DedicatedAdultPlan from './components/dedicatedAdultPlans';
import CustomSolution from '../streamingServer/components/customSolution';
import Guarantees from '../streamingServer/components/qloudHostGurantees';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FAQsSection from '../commonComponent/faqSection';
import AdultHostingFeatureElement from './components/AdultHostingFeatureElement';

const options = [
  "Dedicated IP",
  "Weekly Backup",
  "Netherlands Location",
  "24/7 Expert Support",
];

const features = [
    {img: images.ssd,
      title: "Hosted in Netherlands",
      description:"With our DMCA Ignored Hosting, we offer top-notch security and privacy for your website on the internet.",
      link: "/read-more",
    },
    {img: images.ssd,
      title: "Fastest SSD Servers",
      description:"With our DMCA Ignored Hosting, we offer top-notch security and privacy for your website on the internet.",
      link: "/read-more",
    },
    {img: images.ssd,
      title: "Free Website Migration",
      description: "If you already have a website, let us make your life easier by transferring it for free!",
      link: "/read-more",
    },
    {img: images.ssd,
      title: "Money-Back Guarantee",
      description: "With our DMCA Ignored Hosting, we offer top-notch security and privacy for your website on the internet.",
      link: "/read-more",
    },
    {img: images.ssd,
      title: "99.9% Uptime Commitment",
      description: "With our DMCA Ignored Hosting, we offer top-notch security and privacy for your website on the internet.",
      link: "/read-more",
    },
    {img: images.ssd,
      title: "Hosted in Neitherlands",
      description: "With our DMCA Ignored Hosting, we offer top-notch security and privacy for your website on the internet",
      link: "/read-more",
    },
    
  ];
  const faqsData = [
    {
      question: "What is DMCA ignore hosting?",
      answer: "We provide you with unhindered performance with 99.9% uptime guaranteed to ensure the maximum availability of your website."
    },
    {
      question: "Where are your servers based?",
      answer: "Our servers are strategically located to provide the best performance for your needs."
    },
    {
      question: "Where are your servers based?",
      answer: "Our servers are strategically located to provide the best performance for your needs."
    },
    {
      question: "Where are your servers based?",
      answer: "Our servers are strategically located to provide the best performance for your needs."
    },
  ];

const AdultHosting = () => {
  return (
    <div>
      <HeroComponent
         title="High Performance Adult VPS and Dedicated Servers"
        description="Unlock 100% reliable and secure Adult Hosting in the Netherlands with 99.99% uptime and 24/7 support. Perfect for Adult Tube, Adult Streaming Websites. Host your adult website today!"
        button1Text="Get Started Now"
        button1Link=""
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.heroImage2}
        moneyBackText="14-Day Money-Back Guarantee"
         options={options} // Pass the options to the HeroComponent
      />
      <AdultHostingPlans/>
      <DedicatedAdultPlan/>
      <CustomSolution
        solTitle="Need Custom Solutions Adult Dedicated Servers?"
        solText="Expand Adult Websit’s with DMCA Ignored Servers across your entire Organization. Enjoy unbeatable features, dedicated account and priority support."
      />
      <Guarantees
        subHeading="Boost your website performance with world-class Best & Cheap Adult Web Hosting servers and guaranteed performance."
      />
      <TechnicalSpecification/>
      <InstallationPanel
        title="Operating Systems"
        description="Work with your desired Operating system without any errors!"
        buttonText="Get Started Now"
        panelOptions={[
          { name: 'AlmaLinux', img: images.cpanel },
          { name: 'RockeyLinux', img: images.directAdmin },
          { name: 'Debian', img: images.cyberPanel},
          { name: 'Ubuntu', img: images.ubuntu },
          { name: 'Windows', img: images.centos },
        ]}
      />
      <AdultHostingFeatureElement/>
      <QlodHostServices
      heading="Why Choose QloudHost for Your DMCA Ignored Hosting Needs?"
      content="Experience our superior support, robust infrastructure, and unmatched reliability. We are the trusted choice for DMCA Ignored critical websites and apps. Count on us to deliver excellence every step of the way. Join our satisfied customers today!"
      features={features} />
      <Testimonials/>
      <FAQsSection
      faqs={faqsData} 
      />

    </div>
  )
}

export default AdultHosting;
