import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import heroImage from "../../assets/Frame/heroFrame.png";
import StreamingServerPlan from './components/streamingServerPlan';
import InstallationPanel from '../commonComponent/installationPanel';
import images from '../../constants/images';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import StreamingServerQuality from './components/streamingServerQuality';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FAQsSection from '../commonComponent/faqSection';
import ChatNow from '../commonComponent/chatNow';
import PopularStreamingUse from './components/popularStreamingUse';
import CustomSolution from './components/customSolution';
import Guarantees from './components/qloudHostGurantees';

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

const Streaming = () => {
  return (
    <div>
    <HeroComponent
    title="Robust offshore Streaming Server"
        description="Host your IPTV or movie site offshore in Amsterdam with powerful DMCA-ignored streaming servers. Get 100% uptime, unmetered ports, white-label IP, and a fully redundant network. Secure, reliable, and unshared."
        button1Text="Get Started Now"
        button1Link=""
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={heroImage}
        moneyBackText="14-Day Money-Back Guarantee"
      />
      <StreamingServerPlan/>
      <CustomSolution/>
      <Guarantees/>
      <TechnicalSpecification/>
      <InstallationPanel
        title="Fast OS/Admin Panel Installation!"
        description="No matter! Whether you wish to work with Linux, Windows, Cent OS, Debian or any other popular OS, get it installed on your server
with just a few clicks. In addition, Our DMCA Ignored VPS Hostingare compatible with all the Control panels available in the market so
that you can manage your website files with full control!"
        buttonText="Get Started Now"
        panelOptions={[
          { name: 'cPanel', img: images.cpanel },
          { name: 'DirectAdmin', img: images.directAdmin },
          { name: 'CyberPanel', img: images.cyberPanel},
          { name: 'Ubuntu', img: images.ubuntu },
          { name: 'CentOS', img: images.centos },
        ]}
      />
      <StreamingServerQuality/>
      <QlodHostServices 
      heading="Why Choose QloudHost for Your DMCA Ignored Hosting Needs?"
      content="Experience our superior support, robust infrastructure, and unmatched reliability. We are the trusted choice for DMCA Ignored critical websites and apps. Count on us to deliver excellence every step of the way. Join our satisfied customers today!"
      features={features} />
      <PopularStreamingUse/>
      <Testimonials/>
      <FAQsSection
        faqs={faqsData} 
      />
      <ChatNow/>
    </div>
  )
}

export default Streaming;
