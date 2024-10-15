import React from 'react';
import images from '../../constants/images';
import HeroComponent from '../commonComponent/heroComponent';
import NetherLandStreamingPlan from './components/netherlandStreamingPlan';
import OpenTicket from './components/openTicket';
import Guarantees from '../streamingServer/components/qloudHostGurantees';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import FAQsSection from '../commonComponent/faqSection';
import QlodHostServices from '../commonComponent/qlodHostServices';
import PopularStreamingUse from '../streamingServer/components/popularStreamingUse';

const options = [
    "Scalable Resources", 
    "Full Admin Access", 
    "Strong Infrastructure", 
    "NVMe Setup"
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
      answer: "DMCA ignored web hosting is especially popular when privacy and data security are concerned. It allows you to host your website with untraceable footprints and post any content(DMCA ignored content) without getting any arbitrary troubles"
    },
    {
      question: "Where are your servers based?",
      answer: "We have created our servers in the Netherlands to provide you with untraceable hosting services and let you enjoy your full privacy. We chose the Netherlands because it is one of the best and most popular DMCA Ignored countries."
    },
    {
      question: "Which countries follow DMCA?",
      answer: "Since the World Intellectual Property Organization backs DMCA, it is strictly followed in almost every country, including the USA, Europe, Japan, India, China etc. In simple words, approximately 95% of countries take DMCA law very seriously."
    },
    {
      question: "What can you host with our Offshore Hosting Services?​",
      answer: "Our cheapest offshore hosting plans are specially designed to protect your identity and privacy. So that you can host any DMCA ignored content on your website, and we will ensure that your identity is untraceable on the internet"
    },
    {
      question: "Which country ignores DMCA?​​",
      answer: "Despite DMCA being an international law, many countries do not follow it and let you create DMCA Ignored hosting servers to bypass the country-specific restrictions and host your website with untraceable footprints. Some of which are mentioned below. Netherlands, Luxembourg Bulgaria, Russia, Hong Kong, Singapore, Malaysia"
    },
    {
      question: "What Are The Benefits Of DMCA Ignored Hosting?​​",
      answer: `DMCA ignored hosting may be the right choice for you if you’re looking for a reliable host. This type of hosting service can offer a variety of benefits that can help protect your website and ensure smooth operation. DMCA ignored VPS has one of its main benefits: it offers greater privacy and security for your site. These providers aren’t bound by the Digital Millennium Copyright Act, which means they have more flexibility and freedom in hosting content. This allows you to host any content without fear of legal consequences. To understand more in detail, refer this blogpost: <a href="https://qloudhost.com/blog/benefits-of-dmca-ignored-hosting/">https://qloudhost.com/blog/benefits-of-dmca-ignored-hosting/</a>`
    },
    {
      question: "How do you handle DMCA complaints?​",
      answer: "To provide you with a Best & Cheap DMCA Ignored Server, we created offshore servers in the Netherlands to ignore all the DMCA Takedown notices against your website. In simple words, we do not take any action unless we find anything suspicious."
    },
    {
      question: "What is your Uptime Guarantee?",
      answer: "We provide you with unhindered performance with 99.9% uptime guaranteed to ensure the maximum availability of your website."
    },
  
  ];

const NetherlandStreamingServer = () => {
  return (
    <div>
    <HeroComponent
        title="Netherlands Streaming Servers"
        description="Host your media or IPTV site in Amsterdam with powerful Netherlands servers. Enjoy uninterrupted streaming, 100% uptime, white label IP, and unmetered port access."
        button1Text="Get Started Now"
        button1Link="#hostingPlan"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.heroImage2}
        moneyBackText="14-Day Money-Back Guarantee"
        options={options} // Pass the options to the HeroComponent
      />
      <NetherLandStreamingPlan/>
      <OpenTicket/>
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
          { name: 'Debian', img: images.centos },
        ]}
      />
      <QlodHostServices 
      heading="Why Choose QloudHost for Your DMCA Ignored Hosting Needs?"
      content="Experience our superior support, robust infrastructure, and unmatched reliability. We are the trusted choice for DMCA Ignored critical websites and apps. Count on us to deliver excellence every step of the way. Join our satisfied customers today!"
      features={features} />
      <PopularStreamingUse/>
      <FAQsSection
        faqs={faqsData} 
      />
      
    </div>
    
  )
}

export default NetherlandStreamingServer
