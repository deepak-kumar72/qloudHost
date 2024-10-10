import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import images from '../../constants/images';
import HighPerformanceVpsPlan from './components/highPerformanceVpsPlan';
import Guarantees from '../streamingServer/components/qloudHostGurantees';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import VpsFeatureElement from './components/vpsFeatureElement';
import QloudHostFeatures from '../homeComponent/components/qloudHostFeatures';
import Testimonials from '../commonComponent/testimonial';
import FAQsSection from '../commonComponent/faqSection';

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

const HighPerformanceVps = () => {
  return (
    <div>
      <HeroComponent
    title="Robust High-Performance VPS Server"
        description="Experience top-tier VPS hosting with QloudHost! Enjoy AMD EPYC servers, blazing NVMe storage, and premium Amsterdam connectivity. Customize freely and boost performance. Sign up now for unbeatable speed and reliability!"
        button1Text="Get Started Now"
        button1Link=""
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.heroImage2}
        moneyBackText="14-Day Money-Back Guarantee"
      />
      <HighPerformanceVpsPlan/>
      <Guarantees
        subHeading="Boost your website performance with world-class Best High-Performance DMCA Ignored servers and guaranteed performance."
      />
      <TechnicalSpecification/>
      <InstallationPanel
        title="Available Operating Systems"
        description="Work with your desired Operating system without any errors!"
        buttonText="Get Started Now"
        panelOptions={[
          { name: 'AlmaLinux', img: images.cpanel },
          { name: 'RockeyLinuc', img: images.directAdmin },
          { name: 'Debian', img: images.cyberPanel},
          { name: 'Ubuntu', img: images.ubuntu },
          { name: 'Windows', img: images.centos },
        ]}
      />
      <VpsFeatureElement/>
      <QloudHostFeatures
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

export default HighPerformanceVps
