import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import images from '../../constants/images';
import DedicatedNetherlandPlan from './component/dedicatedNetherlandPlan';
import AffordableDedicatedCon from '../dedicatedServer/components/affordableDedicatedCon';
import QlodHostServices from '../commonComponent/qlodHostServices';
import InstallationPanel from '../commonComponent/installationPanel';
import Services from '../commonComponent/services';
import FAQsSection from '../commonComponent/faqSection';

const options = [
  "Strong Infrastructure", 
  "NVMe SSD Storage", 
  "Enhanced Security", 
  "Fast, Accurate Responses"
];

const features = [
  {img: images.ssd,
    title: "Powerful Configurations",
    description:"We use multiple server hardware technologies to provide powerful configuration options to choose from. No matter! Whatever plan choosing an offshore dedicated you will get the latest and one of the fastest hardware technologies with full control.",
    link: "",
  },
  {img: images.ssd,
    title: "Full Root Access",
    description:"QloudHost allows you full root access to configure and modify your server resources to make them more suitable for your website. In addition, you can change the security settings of your servers to enhance your data protection without any restrictions or interruption.",
    link: "",
  },
  {img: images.ssd,
    title: "Free Setup with All Servers",
    description:"No matter! How high are your configurations? You will get a free server setup with QloudHost offshore Web Hosting servers and no hidden charges. Pay only for what you use!",
    link: "",
  },
  {img: images.ssd,
    title: "Amsterdam, Netherlands Data Center",
    description:"We offer data center services only in Amsterdam, Netherlands but the location of your website's hosting is crucial for optimal performance. Our data centre access lets you optimize your server resources and improve your website's performance.",
    link: "",
  },
  {img: images.ssd,
    title: "24/7 Server monitoring",
    description:"We have built smart systems that constantly monitor your website and server to provide you with the automatic upgrade and update notifications. In addition, our onsite team of technical staff will always be there to physically monitor your server status.",
    link: "",
  },
  {img: images.ssd,
    title: "Managed with DirectAdmin",
    description:"Experience exceptional technical support for your DMCA Ignored Server hosting, VPS and dedicated offshore server offer with a top-notch team. Ensuring your server is managed with DirectAdmin and receive timely security patches, OS updates, and other necessary updates.",
    link: "",
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

const DedicatedServerNetherland = () => {
  return (
    <div>
      <HeroComponent
        title="Cheap Netherlands Offshore dedicated Server"
        description="Host on a powerful offshore dedicated server in the Netherlands with 99.99% uptime, full root access, low latency, Intel AMD Ryzen, top security, and multiple OS/control panel choices. Expertly assembled."
        button1Text="Get Started Now"
        button1Link="#hostingPlan"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.heroImage2}
        moneyBackText="14-Day Money-Back Guarantee"
        options={options} // Pass the options to the HeroComponent
      />
      <DedicatedNetherlandPlan/>
      <AffordableDedicatedCon/>
      <QlodHostServices
        heading="Why Choose QloudHost Dedicated Offshore Hosting?"
      content="Revamp high-quality possibilities effectively instead of focusing solely on innovative ideas.
Utilize advanced technology security measures to ensure accurate information dissemination."
      features={features} 
      />
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
      <Services servicesData={servicesData1} />
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  )
}

export default DedicatedServerNetherland
