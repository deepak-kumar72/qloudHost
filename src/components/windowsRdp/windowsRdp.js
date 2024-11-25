import React from 'react'
import HeroComponent from '../commonComponent/heroComponent'
import WindowsRdpPlan from './components/windowsRdpPlan';
import ChooseQloudHost from './components/chooseQloudHost';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import AvailableWos from './components/availabelWos';
import QlodHostServices from '../commonComponent/qlodHostServices';
import FAQsSection from '../commonComponent/faqSection';
import Testimonials from '../commonComponent/testimonial';
import RdpFeatureBanner from './components/rdpfeaturebanner';

const options = [
    "Netherlands Location", 
    "Full Admin Access", 
    "Strong Infrastructure", 
    "Instant Setup"
  ];

  const features = [
    {img: '/assets/serviceImg/privacy-protection_1.svg',
      title: "100% Privacy Protection",
      description:"Get impenetrable security and full data privacy with QloudHost offshore Windows VPS hosting. Sounds quite an affirmative statement, Right? But that’s true because we minimize our customer’s visibility to make your footprints untraceable on the internet.",
      link: "",
    },
    {img: '/assets/serviceImg/fair-and-affordable.svg',
      title: "Fair & Affordable",
      description:"QloudHost provides you with the most affordable DMCA Ignored Windows VPS plans to run your offshore servers because we understand the value of your hard-earned money. Our plans focus on providing you with well-balanced features to exclude unnecessary things and decrease costs.",
      link: "",
    },
    {img: '/assets/serviceImg/full-root-access_1.svg',
      title: "Full Root Access",
      description: "Get root-level control of your windows server to customize it according to your needs and requirements. Isn’t that amazing? But how will this feature benefit your website? Simple: With root access, you are allowed to create, modify, customize, or delete files on your website without seeking our permission.",
      link: "",
    },
    {img: '/assets/feature/uptime.svg',
      title: "99.9% uptime guaranteed.",
      description: "Our first priority is to provide you with quality services, so all our plans come with a guaranteed uptime of 99.9%. So, let us take care of your website and ensure its availability on the Internet.",
      link: "",
    },
    {img: '/assets/serviceImg/website-migration.svg',
      title: "Free Website Migration",
      description: "Had a really bad experience with your previous Windows VPS service provider? Don’t worry! We have built a dedicated team of technical experts to migrate your website to quality services without causing any data loss.",
      link: "",
    },
    {img: '/assets/serviceImg/weekly-backup_1.svg',
      title: "Weekly Backup",
      description: "QloudHost has created a smart data backup feature to make your website’s data safer and more secure. But how? Simple: We provide an alternate-day backup for 7 Days for VPS. A weekly backup (1 snapshot per week) is available, and it will charge extra.",
      link: "",
    },
    
  ];
  const faqsData = [
    {
      question: "What are the benefits of Offshore Windows VPS hosting?",
      answer: "The benefits of Offshore Windows VPS Hosting services are that you get DMCA–ignored servers with enhanced privacy, you can host content without any copyright issue, get Full root admin access and incredible scalability as well."
    },
    {
      question: "Will the Windows License be activated in my VPS?",
      answer: "Absolutely Yes! The Windows License will be activated soon in your virtual server as soon as the payment is processed and VPS is deployed. "
    },
    {
      question: "Can I host unlimited sites with the Offshore DMCA Ignored Windows VPS plan?",
      answer: "Yes! You can host unlimited websites with the Offshore DMCA ignored Windows VPS plan. "
    },
    {
      question: "Do you offer Microsoft RDP?",
      answer: "Absolutely Yes! We do offer Microsoft RDP plans letting the users remotely access the servers and make configurations without any hassle."
    },
    {
      question: "Will I get a Dedicated IP and full admin access?",
      answer: "Yes! Along with dedicated RAM and NVMe storage drive, users even get a dedicated IP address ensuring an isolated hosting environment plus Full root admin access for making configuration as per the need. "
    },
    {
      question: "Can I downgrade or upgrade my offshore VPS plan for Windows any time?",
      answer: "Yes! Our offshore Windows VPS plans are highly scalable. You can upgrade or downgrade the web resources any time to meet the growing needs of your websites. "
    },
    {
      question: "I bought your offshore Windows VPS Hosting, when will they be activated?",
      answer: "Great! Your Offshore Windows VPS hosting service gets activated soon after the payment is done. "
    },
  ];

const WindowsRdp = () => {
  return (
    <div>
      <HeroComponent
      subTitle='Offshore Windows VPS RDP'
        title="Best Offshore Windows VPS RDP"
        description="Discover blazing-fast, secure offshore Windows VPS hosting with KVM virtualization, NVMe SSDs, and full root access. Instant RDP, seamless app performance, and 24/7 expert support—optimized for your needs."
        button1Text="Get Started Now"
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/robust-offshore-windows-vps-hosting.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options} 
      />
      <WindowsRdpPlan/>
      <ChooseQloudHost/>
      <TechnicalSpecification/>
      <AvailableWos/>
      <QlodHostServices
        heading="What You Get with Your Offshore Windows VPS Hosting"
      content="Looking for some good reasons to choose QloudHost? Here’s the reason of our confidence."
      features={features} 
      />
      <RdpFeatureBanner/>
      <Testimonials/>
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  )
}

export default WindowsRdp 
