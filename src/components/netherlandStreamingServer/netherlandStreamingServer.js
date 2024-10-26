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
import NetherLandStreamingFeature from './components/netherlandStreamingFeature';

const options = [
    "Scalable Resources", 
    "Full Admin Access", 
    "Strong Infrastructure", 
    "NVMe Setup"
  ];

  const features = [
    {img: images.nobufferStream,
      title: "No Buffer & Stream Live",
      description:"Our Enterprise streaming servers and Netherlands location, we guarantee a buffer-free streaming experience. Our offshore DMCA Ignored streaming servers are meticulously engineered to manage high volumes of traffic, ensuring swift and efficient streaming performance.",
      link: "",
    },
    {img: images.anonymousService,
      title: "100% Anonymous Service",
      description:"We are running our offshore streaming servers at the best locations that are especially popular for offshore hosting services and help us to decrease your visibility on the internet making you untraceable.",
      link: "",
    },
    {img: images.osChoice,
      title: "OS Choice",
      description:"All thanks to our resilient server that is compatible with all the Operating systems, we can offer you a wide range of options to choose and work with your desired OS anytime and anywhere!!",
      link: "",
    },
    {img: images.ddos,
      title: "DDoS Protection",
      description:"Our servers come with the best and industry-standard security features that will help you to save your website against illegitimate traffic and ensure your maximum availability on the internet. .",
      link: "",
    },
    {img: images.uptime,
      title: "99.99% Uptime",
      description:"Why go anywhere else when you get maximum uptime here? Yes!! Our services come with a 99.99% uptime guarantee to provide full assurance of your availability on the internet.",
      link: "",
    },
    {img: images.techSupport,
      title: "24/7 Tech Support",
      description:"We have built a dedicated team of technical experts that are working 24*7 to help you at every stage of your journey and ensure that you can set up your offshore streaming servers without any errors!",
      link: "",
    },
    
    
  ];
  
  const faqsData = [
    {
      question: "What is Netherlands Offshore streaming server?",
      answer: `A Netherlands offshore streaming server typically refers to a server located in the Netherlands but operated by a company or individual from outside the country. These servers are often chosen for various reasons, such as privacy, legal considerations, or specific business requirements.`
    },
    {
      question: "Can I have an Additional IPv4 for Media IPTV Streaming?",
      answer: `Yes, you can request an extra IPv4 address for your Media IPTV streaming. You Just need to open a Ticket for an Additional IPV4.`
    },
    {
      question: "How Long Does It Take for Offshore Streaming Server Setup?",
      answer: `Once you finish the payment, our team of technical experts will immediately start working on your servers to complete the setup as soon as possible, and your servers will be ready to use within 3-5 days.`
    },
    {
      question: "Are Your Offshore Streaming Servers Managed?",
      answer: `No, our offshore media streaming servers are unmanaged to ensure that you get complete resilience and customisation options with your servers so that you can customise your resources as per your needs and requirements. `
    },
    {
      question: "Can I Upgrade my DMCA Ignored Streaming Servers?",
      answer: `Yes, Along with our normal offshore Hosting plans, we also offer you upgraded plans that comes with more powerful resources and features. You can anytime shift to our upgraded plans without any complex formalities. `
    },
    {
      question: "What Payment Methods Do You Accept?",
      answer: `We use multiple payment methods such as PayPal, debit card, credit card, UPI and much more to ensure that you can easily avail our services from any country with any method you are comfortable!`
    },
  
  ];

const NetherlandStreamingServer = () => {
  return (
    <div>
    <HeroComponent
        title="Netherlands Streaming Servers"
        description="Host your media or IPTV site in Amsterdam with powerful Netherlands servers. Enjoy uninterrupted streaming, 100% uptime, white label IP, and unmetered port access."
        button1Text="Get Started Now"
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.netherlandStreamingServer}
        moneyBackText="14-Day Money-Back Guarantee"
        options={options} // Pass the options to the HeroComponent
      />
      <NetherLandStreamingPlan/>
      <OpenTicket/>
      <Guarantees/>
      <TechnicalSpecification/>
      <InstallationPanel
        title="Operating Systems"
        description="Install your desired OS in just a matter of seconds!"
        buttonText="Get Started Now"
        url='explore'
        panelOptions={[
          { name: 'cPanel', img: images.cpanel },
          { name: 'CyberPanel', img: images.cyberPanel},
          { name: 'Ubuntu', img: images.ubuntu },
          { name: 'Windows', img: images.windowIcon },
          { name: 'Debian', img: images.debian},
        ]}
      />
      <NetherLandStreamingFeature/>
      <QlodHostServices 
      heading="Why Choose Offshore Netherlands Streaming Servers"
      content="Well, the clear and confident answer is our features that are mentioned below! "
      features={features} />
      <PopularStreamingUse/>
      <FAQsSection
        faqs={faqsData} 
      />
      
    </div>
    
  )
}

export default NetherlandStreamingServer
