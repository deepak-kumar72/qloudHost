import React from "react";
import HeroComponent from "../commonComponent/heroComponent";
import images from "../../constants/images";
import TechnicalSpecification from "../commonComponent/technicalSpecification";
import OffshoreVpsPlan from "./components/offshoreVpsPlan";
import InstallationPanel from "../commonComponent/installationPanel";
import QlodHostServices from "../commonComponent/qlodHostServices";
import Testimonials from "../commonComponent/testimonial";
import PrivacyHardwarePage from "../offShoreVps/components/privacyHardwarePage";
import FeaturesYouGet from "./components/featuresYouGet";
import Services from "../commonComponent/services";
import FAQsSection from "../commonComponent/faqSection";

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

  const servicesData1 = [
    {
      id: 1,
      imgUrl: images.web,
      title: "New Website?",
      description: "Create your website, host it on our servers and scale your business to the next level with just a few clicks!",
      buttonText: "Get Started Now",
      buttonLink: "#",
      iconClass: "bi-globe",
    },
    {
      id: 1,
      imgUrl: images.migration,
      title: "Migration?",
      description: "Not happy with your existing service provider? Transfer your website to our quality services at no cost!",
      buttonText: "Get Started Now",
      buttonLink: "#",
      iconClass: "bi-arrow-repeat",
    },
  
  ];

const OffshoreVps = () => {
  return (
    <div>
      <HeroComponent
        title="Best Cheap Offshore VPS Hosting"
        description="Reliable Offshore VPS with KVM Virtualization, Dedicated NVMe SSD, and full root access. Enjoy instant setup, untraceable footprints, and complete data protection to host all your applications with blazing-fast loading times."
        button1Text="Get Started Now"
        button1Link=""
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.heroImage2}
        moneyBackText="14-Day Money-Back Guarantee"
      />
      <OffshoreVpsPlan/>
      <TechnicalSpecification/>
      <InstallationPanel
        title="Available Operating Systems"
        description="Work with your desired Operating system without any errors!"
        buttonText="Get Started Now"
        panelOptions={[
          { name: 'AlmaLinux', img: images.cpanel },
          { name: 'Rockey Linux', img: images.directAdmin },
          { name: 'Debian', img: images.cyberPanel},
          { name: 'Ubuntu', img: images.ubuntu },
          { name: 'Windows', img: images.centos },
        ]}
      />
      <PrivacyHardwarePage/>
      <QlodHostServices
      heading="What You Get with Your Offshore VPS Server"
      content="Looking for some good reasons to choose Qloudhost?  Here’s the reason of our confidence. "
      features={features} />
      <Services servicesData={servicesData1} />
      <FeaturesYouGet/>
      <Testimonials/>
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  );
};

export default OffshoreVps;
