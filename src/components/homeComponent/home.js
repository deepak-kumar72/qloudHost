import React from "react";
import HeroComponent from "../commonComponent/heroComponent";
import heroImage from "../../assets/Frame/hero1.png";
import HostingPlans from "./components/hostingPlans";
import TechnicalSpecification from "../commonComponent/technicalSpecification";
import QloudHostFeatures from "./components/qloudHostFeatures";
import QlodHostServices from "../commonComponent/qlodHostServices";
import InstallationPanel from "../commonComponent/installationPanel";
import images from '../../constants/images';
import Services from "../commonComponent/services";
import Resources from "./components/resources";
import FAQsSection from "../commonComponent/faqSection";
import BlogSection from "./components/blogSection";


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

const Home = () => {
  return (
    <div>
      <HeroComponent
        title="Powerful Secure & Best DMCA Ignored Hosting"
        description="Get the Best for your website with QloudHost’s DMCA Ignored hosting packages. Join over 3000+ customers who rely on us for a robust offshore DMCA Ignored server foundation."
        button1Text="Get Started Now"
        button1Link=""
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={heroImage}
        moneyBackText="14-Day Money-Back Guarantee"
      />
      <HostingPlans />
      <TechnicalSpecification />
      <QloudHostFeatures />
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
      <QlodHostServices 
      heading="Why Choose QloudHost for Your DMCA Ignored Hosting Needs?"
      content="Experience our superior support, robust infrastructure, and unmatched reliability. We are the trusted choice for DMCA Ignored critical websites and apps. Count on us to deliver excellence every step of the way. Join our satisfied customers today!"
      features={features} />
      <Services/>
      <BlogSection/>
      <Resources/>
      <FAQsSection/>
    </div>
  );
};

export default Home;
