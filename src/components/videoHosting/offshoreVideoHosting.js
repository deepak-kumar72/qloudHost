import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import VideoHostingPlan from './components/videoHostingPlan';
import VideocustomSolution from './components/videoCustomSol';
import Guarantees from '../streamingServer/components/qloudHostGurantees';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import QlodHostServices from '../commonComponent/qlodHostServices';
import FAQsSection from '../commonComponent/faqSection';
import VideoHostingFeatureElement from './components/videoHostingFeatureElement';
import Link from "next/link";

const options = [
  "Fast, Secure, Reliable",
  "DDoS Protection",
  "Strong Infrastructure",
  "Netherlands Location"
];

const features = [
    {img: '/assets/serviceImg/no-buffer-stream.svg',
      title: "No Buffer Stream",
      description:"Worried about the performance of your video streaming website? Just sit and relax! Because we run robust servers equipped with the latest and most powerful hardware technologies in the market.",
      link: "",
    },
    {img: '/assets/serviceImg/use-your-player.svg',
      title: "Use Your Player",
      description:`Although we provide you with a pre-built video player, our <a href='/' class='faq-link'>DMCA Ignored servers</a> are resilient enough to allow you the installation of your favorite video player without any restriction and buffering neither.`,
      link: "",
    },
    {img: '/assets/serviceImg/embeds.svg',
      title: "Unlimited Embeds & Plays",
      description:"There is no limit on the number of videos you can post and play on your website, all thanks to the robust servers we are using for the services, which allows you to use unrestricted resources.",
      link: "",
    },
    {img: '/assets/serviceImg/privacy-protection_1.svg',
      title: "100% Privacy Protection",
      description:"QloudHost provides you with top-notch security features such firewall, offshore servers and much more to ensure your 100% privacy and untraceable footprints on the internet. .",
      link: "",
    },
    {img: '/assets/feature/uptime.svg',
      title: "99.9% Uptime Guaranteed",
      description:"We are confident to share with you that our server uptime is 99.9%, and we ensure that it should be maintained for maximum availability of your website on the internet.",
      link: "",
    },
    {img: '/assets/serviceImg/support.svg',
      title: "24/7 Support",
      description:"Our team of technical experts is working 24*7 to solve your queries and help you at every stage of your journey. In addition, they constantly monitor your website’s resources to ensure uptime and performance.",
      link: "",
    },
   
   
    
  ];
  const faqsData = [
    {
      question: "What is video hosting?",
      answer: <>Video hosting is nothing but an optimized server, especially for <Link href='/offshore-streaming-server/' className='faq-link'>video streaming</Link>  websites or OTT kind of platforms. For example, there are many movie streaming websites that offer paid as well as free movies to watch or download. These websites use video hosting services to host their website and get a bufferless experience!</>
    },
    {
      question: "What are the content restrictions on offshore VPS servers?",
      answer: "Normal web hosting services allow you to host a streaming website on their servers, but they do not allow you to post DMCA Ignored content or adult content and posting such kind of content on their servers can cause your website termination or arbitrary troubles too.  Hence, offshore video hosting services are used to host the website because they allow you to host DMCA Ignored content."
    },
    {
      question: "Where are your servers based?",
      answer: "Our offshore  hosting services are specially built for DMCA Ignored content, so you can enjoy our services without facing any arbitrary actions. DMCA Ignored content includes copyrighted, illegal, adult content etc."
    },
    {
      question: "Can I get full admin access to my offshore VPS servers?",
      answer: <>Definitely, our <Link href='/offshore-vps-hosting/' className='faq-link'>offshore hosting servers</Link> come with full root access, which provides you with the ability to customize your files and resources as per your needs. In addition, you can also create, modify, upgrade or delete your website with just a few clicks.</>
    },
    {
      question: "Can I host Adult video content on QloudHost?",
      answer: "Yes….!  We allow you to post adult content on our offshore video hosting server with untraceable footprints and impenetrable security."
    },
    {
      question: "I bought your offshore VPS servers, when will they be activated?",
      answer: "QloudHost provides you with an instant setup means that your servers will be ready to use right after you finish the purchase."
    },
  ];

const OffshoreVideoHosting = () => {
  return (
    <div>
      <HeroComponent
      subTitle='Offshore Video Hosting'
      title="100% DMCA Offshore Video Hosting"
        description="Optimize your adult, tube, copyrighted, and offshore content with our Offshore Video Hosting. Enjoy top speed and reliability for your web app, business site, or video platform."
        button1Text="Get Started Now"
        button1Link="#explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/DMCA-Offshore-video-hosting.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options}
      />
      <VideoHostingPlan/>
      <VideocustomSolution/>
      <Guarantees
        subHeading="Boost your website performance with world-class offshore Video Hosting for Adult & DMCA Ignored Content and guaranteed performance."
      />
      <TechnicalSpecification/>
      <InstallationPanel
        title="Operating Systems"
        description="QloudHost is offering you multiple OS options to choose from so that you can work with the Operating system you relish the most."
        buttonText="Get Started Now"
        url='#explore'
        panelOptions={[
          { name: 'AlmaLinux', img: '/assets/icon/almaLinux.png' },
          { name: 'RockeyLinux', img: '/assets/icon/rockyLinux.png' },
          { name: 'debian', img: '/assets/icon/debain.png'},
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png'},
          { name: 'Windows', img: '/assets/icon/window-icon.png' },
        ]}
      />
      <VideoHostingFeatureElement/>
      <QlodHostServices
        heading="Offshore Adult Video Hosting Unbelievable Features"
      content="Looking for some good reasons to choose QloudHost? Here’s the reason of our confidence. "
      features={features} 
      />
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
    
  )
}

export default OffshoreVideoHosting
