import React from "react";
import HeroComponent from "../commonComponent/heroComponent";
import images from "../../constants/images";
import TechnicalSpecification from "../commonComponent/technicalSpecification";
import OffshoreVpsPlan from "./offshoreVpsPlan";
import InstallationPanel from "../commonComponent/installationPanel";
import QlodHostServices from "../commonComponent/qlodHostServices";
import Testimonials from "../commonComponent/testimonial";

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
      /><OffshoreVpsPlan/>
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
      <QlodHostServices
      heading="What You Get with Your Offshore VPS Server"
      content="Looking for some good reasons to choose Qloudhost?  Here’s the reason of our confidence. "
      features={features} />
      <Testimonials/>
    </div>
  );
};

export default OffshoreVps;
