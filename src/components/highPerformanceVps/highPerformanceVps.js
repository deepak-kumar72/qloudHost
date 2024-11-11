import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import HighPerformanceVpsPlan from './components/highPerformanceVpsPlan';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import VpsFeatureElement from './components/vpsFeatureElement';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FAQsSection from '../commonComponent/faqSection';
import WebHostingGurantees from '../offShoreHosting/components/webHostingGurantees';

const options = [
  "Unparalleled Performance",
  "Maximum Security",
  "Weekly Backup",
  "24*7 Expert Support"
];
const features = [
    {img: '/assets/serviceImg/privacy-protection_1.svg',
      title: "100% Privacy Protection",
      description:"Get impenetrable security and full data privacy with QloudHost offshore hosting servers. Sounds quite an affirmative statement, Right? But that’s true because we minimize our customer’s visibility to make your footprints untraceable on the internet.",
      link: "",
    },
    {img: '/assets/serviceImg/fair-and-affordable.svg',
      title: "Fair & Affordable",
      description:`QloudHost provides you the most affordable <a href='/dmca-ignored-vps/' class='faq-link'>DMCA Ignored VPS</a> plans to run your offshore hosting servers because we understand the value of your hard-earned money. Our plans are focused on providing you with well-balanced features to exclude unnecessary things and decrease the cost.`,
      link: "",
    },
    {img: '/assets/serviceImg/full-root-access_1.svg',
      title: "Full Root Access",
      description: "Get root level control to your server to customize it according to your needs and requirements. Isn’t it amazing? But how will this feature benefit your website? Simple, with root access, you are allowed to create, modify, customize or delete files of your website without seeking our permission.",
      link: "",
    },
    {img: '/assets/feature/uptime.svg',
      title: "99.9% uptime guaranteed.",
      description: "Our first priority is to provide you services with quality that’s why our all plans come with a guaranteed uptime of 99.9%. So let your website into our safe hands and we will ensure the availability of your website on the internet.",
      link: "",
    },
    {img: '/assets/serviceImg/website-migration.svg',
      title: "Free Website Migration",
      description: `Had a really bad experience with your previous service provider? Don’t worry! We have built a <a href='https://qloudhost.com/contact-us/' class='faq-link'>dedicated team</a> of technical experts to migrate your website to quality services without causing any data loss.`,
      link: "",
    },
    {img: '/assets/serviceImg/weekly-backup_1.svg',
      title: "Weekly Backup",
      description: "QloudHost has created a smart data backup feature to make your website’s data safer and more secure. But how? Simple, For Shared Hosting, we provide alternate day backup for 7 Days. (Included free) Whereas for VPS, Weekly backup available (1 Snapshot per week), will charge extra.",
      link: "",
    },
    
  ];

  const faqsData = [
    {
      question: "Why choose QloudHost's High-Performance VPS Hosting?",
      answer: `QloudHost’s VPS hosting is built on state-of-the-art AMD EPYC platforms with ultra-fast NVMe SSD storage, offering exceptional speed and reliability. Perfect for businesses needing robust hosting unaffected by DMCA constraints.`
    },
    {
      question: "What are the benefits of high performace vps hosting?",
      answer: `Offshore High performance VPS with QloudHost provides enhanced privacy, data security, and freedom from restrictive local regulations. This is ideal for hosting content that requires more flexibility in terms of legal jurisdiction and DMCA policies.`
    },
    {
      question: "How does QloudHost ensure 99.9% uptime?",
      answer: `We achieve 99.9% uptime through redundant infrastructure, including multiple data centers in Amsterdam, Netherlands locations, failover technology, and proactive server management to ensure that your VPS is always running smoothly.`
    },
    {
      question: "Can I customize my VPS hosting plan?",
      answer: `Absolutely! QloudHost offers Customizable High-Performance VPS hosting plans to fit any requirement, including adjustable memory, CPU, and storage options. Tailor your server to match your specific needs and scale as your business grows.`
    },
    {
      question: "What kind of support can I expect from QloudHost?",
      answer: `QloudHost provides 24/7 customer support with a dedicated team of experts ready to assist you with any technical issues or queries you might have. Our goal is to ensure your hosting experience is seamless and trouble-free.`
    },
    {
      question: "Can I get full admin access to my High-performance VPS Hosting Server?",
      answer: `Definitely, our high-performance VPS hosting servers come with full root access, which allows you to customise your files and resources according to your needs. In addition, you can create, modify, upgrade, or delete your website with just a few clicks.`
    },
  ];

const HighPerformanceVps = () => {
  return (
    <div>
      <HeroComponent
      subTitle='High Performace VPS '
    title="Robust High-Performance VPS Server"
        description="Experience top-tier VPS hosting with QloudHost! Enjoy AMD EPYC servers, blazing NVMe storage, and premium Amsterdam connectivity. Customize freely and boost performance. Sign up now for unbeatable speed and reliability!"
        button1Text="Get Started Now"
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/high-performance-vps-server.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options} // Pass the options to the HeroComponent
      />
      <HighPerformanceVpsPlan/>
      <WebHostingGurantees
      title='Why choose QloudHost as your High Performance VPS?'
        subHeading="Boost your website performance with world-class Best High-Performance DMCA Ignored servers and guaranteed performance."
      />
      <TechnicalSpecification/>
      <InstallationPanel
        title="Available Operating Systems"
        description="Work with your desired Operating system without any errors!"
        buttonText="Get Started Now"
        url='explore'
        panelOptions={[
          { name: 'AlmaLinux', img: '/assets/icon/almaLinux.png' },
          { name: 'RockyLinuc', img: '/assets/icon/rockyLinux.png'},
          { name: 'Debian', img: '/assets/icon/debain.png'},
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'Windows', img: '/assets/icon/window-icon.png' },
        ]}
      />
      <VpsFeatureElement/>
      <QlodHostServices
        heading="What You Get with Your High Performance VPS Server"
        content="Looking for some good reasons to choose QloudHost? Here’s the reason of our confidence. "
        features={features} />
      <Testimonials/>
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  )
}

export default HighPerformanceVps
