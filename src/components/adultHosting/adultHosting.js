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
    {img: images.privacyprotection,
      title: "100% Privacy Protection",
      description:"Get impenetrable security and full data privacy with QloudHost Adult hosting servers. Sounds quite an affirmative statement, Right? But that’s true because we minimize our customer’s visibility to make your footprints untraceable on the internet.",
      link: "",
    },
    {img: images.fairAndaffordable,
      title: "Fair & Affordable",
      description:"QloudHost provides you the most affordable Offshore DMCA Ignored Adult Hosting plans to run your Adult Websites because we understand the value of your hard-earned money. Our plans are focused on providing you with well-balanced features to exclude unnecessary things and decrease the cost.",
      link: "",
    },
    {img: images.fullRootAcces,
      title: "Full Root Access",
      description:"Get root level control to your server to customize it according to your needs and requirements. Isn’t it amazing? But how will this feature benefit your website? Simple, with root access, you are allowed to create, modify, customize or delete files of your website without seeking our permission.",
      link: "",
    },
    {img: images.uptime,
      title: "99.99% uptime guaranteed.",
      description:"Our first priority is to provide you services with quality that’s why our all plans come with a guaranteed uptime of 99.99%. So let your website into our safe hands and we will ensure the availability of your website on the internet.",
      link: "",
    },
    {img: images.freeWebsitemigration,
      title: "Free Website Migration",
      description:"Had a really bad experience with your previous service provider? Don’t worry! We have built a dedicated team of technical experts to migrate your website to quality services without causing any data loss.",
      link: "",
    },
    {img: images.weeklyBackup1,
      title: "Weekly Backup",
      description:"QloudHost has created a smart data backup feature to make your website’s data safer and more secure. But how? Simple, For Shared Hosting, we provide alternate day backup for 7 Days. (Included free) Whereas for VPS, Weekly backup available (1 Snapshot per week), will charge extra.",
      link: "",
    },
    
    
    
  ];
  const faqsData = [
    {
      question: "What is Adult Web Hosting and it's benefits ?",
      answer: `Adult Web Hosting refers to a specialized hosting service designed to cater to the unique needs of websites that contain adult content. It provides a secure and optimized environment for hosting explicit material, ensuring compliance with legal regulations and industry standards.
<br>
The benefits of Adult Web Hosting include- Enhanced Performance, Improved Security, Content Flexibility and Expert Support
<br>
Experience the advantages of Adult Web Hosting with QloudHost, where we combine reliability, performance, and privacy to empower your adult website’s success.`
    },
    {
      question: "Which Adult server will suit my project best?",
      answer: `At Qloudhost, we understand the importance of choosing the right Adult Web Hosting server for your project. Consider factors like performance, scalability, operating system compatibility, control panel options, network connectivity, security measures, and customer support. 
<br>
Our team is here to guide you in finding the ideal VPS server that meets your project’s requirements.`
    },
    {
      question: "Can I upgrade my Adult Web Hosting plan later?",
      answer: `Yes! At QloudHost, we understand that your hosting needs may evolve over time. That’s why we provide the flexibility to upgrade your Adult Web Hosting plan whenever you require additional resources or features.
<br>
Whether you need more storage, increased bandwidth, or enhanced performance, our scalable hosting solutions allow for seamless upgrades.
<br>
Simply get in touch with our support team, and they will assist you in upgrading your plan to accommodate your growing needs.`
    },
    {
      question: "Do I need technical knowledge to benefit from QloudHost Adult Web Hosting Plans?",
      answer: `No, you do not necessarily need technical knowledge to benefit from QloudHost Adult hosting. QloudHost provides a user-friendly control panel with it’s VPS hosting Plans, which means you can handle a maximum number of tasks for yourself also.
<br>
However, it can be helpful to have some technical knowledge or experience in managing servers, especially if you want to customize your VPS hosting environment or troubleshoot any issues that may arise. In any case, QloudHost offers support and resources to assist you with any technical concerns.`
    },
    {
      question: "Can I host multiple websites within one Adult VPS Hosting plan?",
      answer: `Absolutely! With our Adult VPS Hosting plan, you can effortlessly host multiple websites under one roof. 
<br>
Enjoy the convenience and flexibility of managing all your adult websites within a single hosting solution`
    },
   
  ];

const AdultHosting = () => {
  return (
    <div>
      <HeroComponent
         title="High Performance Adult VPS and Dedicated Servers"
        description="Unlock 100% reliable and secure Adult Hosting in the Netherlands with 99.99% uptime and 24/7 support. Perfect for Adult Tube, Adult Streaming Websites. Host your adult website today!"
        button1Text="Get Started Now"
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.adultVpsDedicatedServer}
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
        url='explore'
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
      heading="Why Choose QloudHost Adult Web Hosting?"
      content="Looking for some good reasons to choose QloudHost? Here’s the reason of our confidence. "
      features={features} />
      <Testimonials/>
      <FAQsSection
      faqs={faqsData} 
      />

    </div>
  )
}

export default AdultHosting;
