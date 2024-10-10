import React from 'react'
import HeroComponent from '../commonComponent/heroComponent'
import images from '../../constants/images'
import OffWordpressPlan from './components/offshoreWordpressPlan'
import Guarantees from '../streamingServer/components/qloudHostGurantees'
import WordpressFeatureElement from './components/wordpressFeatureElement'
import QlodHostServices from '../commonComponent/qlodHostServices'
import FAQsSection from '../commonComponent/faqSection'

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

const OffshoreWordPressHosting = () => {
  return (
    <div>
       <HeroComponent
        title="Enhanced Privacy Offshore WordPress Hosting"
        description="Whether WordPress powers your blog, web App or Business site, our Affordable 100% DMCA Ignored Offshore WordPress Hosting is fully optimised for top speed and reliability."
        button1Text="Get Started Now"
        button1Link=""
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.heroImage2}
        moneyBackText="14-Day Money-Back Guarantee"
      />
      <OffWordpressPlan/>
      <Guarantees
         subHeading="Allow our Best & Cheap Offshore hosting in Netherlands to exceed your expectations."
      />
      <WordpressFeatureElement/>
      <QlodHostServices
      heading="What You Get with Your Offshore VPS Server"
      content="Looking for some good reasons to choose Qloudhost?  Here’s the reason of our confidence. "
      features={features} />
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  )
}

export default OffshoreWordPressHosting
