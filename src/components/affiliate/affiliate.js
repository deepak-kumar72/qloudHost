import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import FAQsSection from '../commonComponent/faqSection';
import QlodHostServices from '../commonComponent/qlodHostServices';
import GetPaidMethod from './getPaidMethod';

const features = [
    {img: '/assets/serviceImg/free-registration.svg',
      title: "Free Registration",
      description:"Anyone can join our affiliate programme, refer to their audience or friends and earn real money directly to their bank account under a transparent method.",
      link: "",
    },
    {img: '/assets/serviceImg/high-conversion-rate.svg',
      title: "High Conversion Rate",
      description:"Since we are a reputed brand people prefer our services more than any other service provider. That service has a really impressive conversion rate.",
      link: "",
    },
    {img: '/assets/serviceImg/advanced-tracking-url.svg',
      title: "Advanced Tracking URLs",
      description:"We provide you with powerful Real time tracking tools that will provide you insightful report with every details so that you can monitor your progress and withdraw your amount",
      link: "",
    },
    {img: '/assets/serviceImg/eye-catchy-ads.svg',
      title: "Eye-Catchy Ads Banners",
      description:"You will also get attractive ad banners that you can use on your blog, video or any content to promote our services and gain more audience.",
      link: "",
    },
    {img: '/assets/serviceImg/easy-to-use.svg',
      title: "Easy to Use Dashboard",
      description:"We have built our affiliate dashboard very easy to use and well labeled. Hence no matter whether you are a beginner or a pro marketer, you can easily start your earnings.",
      link: "",
    },
    {img: '/assets/serviceImg/affiliate-support.svg',
      title: "24/7 Affiliate Support",
      description:"But what if you are still stuck in your journey? Well, No problem! We will provide you with a dedicated affiliate manager that guides you at every step of your journey.",
      link: "",
    },
    
    
    
  ];
  
  const faqsData = [
    {
      question: "What is an Affiliate Referral Program?",
      answer: `Affiliate referral programmes allow you to earn real money with every sale you make. In simple words, it is a form of mouth to mouth advertisement/promotion technique that is made via a unique referral link and the partner get paid or rewarded with every successful referral.`
    },
    {
      question: "How does QloudHost Affiliate Program Work?",
      answer: `Its working is very easy to understand, suppose you joined our affiliate programme and promoted us on your platform where you have a huge audience base. In that case you will get paid 20% for every qualified sale as a commission. Without paying any money as investment or enrollment!`
    },
    {
      question: "Do I need to pay to join the QloudHost referral program?",
      answer: `No, we don’t charge any kind of investment enrollment, security or additional charges because our affiliate programmes are designed to support you and make you capable of earning real money to fulfill your dreams without looking at your wallet or bank account.`
    },
    {
      question: "How to refer to a client using affiliate links?",
      answer: `Simple, you just sign up on an affiliate page with genuine details such as email address, contact, account details etc., create your own referral links and paste it on your blog, video or any other content where you have a good amount of audience. After that you just have to count your money on our console!`
    },
    {
      question: "Can I ever get a discount coupon for my clients?",
      answer: `Yes, We will also provide you with a discount coupon that you can use to attract more audience to click on your links. One more interesting aspect it is that you can any time request for a coupon and our team will design a coupon for your audience*.`
    },
    {
      question: "I'm still confused and need some human help?",
      answer: `We have built a dedicated team of experts that guide you at every step of your journey to ensure that you get better reach and more clicks to your referral links for a good payment. The more audience you will get the more money you can earn.`
    },
    {
      question: "For Which Services do I get a 20% Commission?",
      answer: `We offer a 20% Affiliate Commission on all Hosting plans. This includes Shared Hosting, WordPress Hosting and VPS.`
    },
    {
      question: "If the client placed the order using my referral link, will I get the commission?",
      answer: `Yes, You will get an instant commission of 20% for each qualified sale directly to your Affiliate Dashboard account.`
    },
    
    
  
  ];

const Affiliate = () => {
  return (
    <div>
      <HeroComponent
      subTitle='Best DMCA Ignored Hosting Affiliate'
        title="Earn Money with QloudHost"
        description="Make extra money easily! Sign up for free and start earning by promoting us. For every client you refer, you’ll get 20% per sale! It’s a simple way to boost your income—no hassle, just rewards! Don’t miss out on this opportunity. Join now and start making money today!"
        button1Text="Get Started Now"
        button1Link="#explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/heroImg_affiliate.webp'
        moneyBackText="14-Day Money-Back Guarantee"
      />
      <GetPaidMethod/>
       <QlodHostServices
      heading="Why Choose QloudHost for Your DMCA Ignored Hosting Needs?"
      content="Experience our superior support, robust infrastructure, and unmatched reliability. We are the trusted choice for DMCA Ignored critical websites and apps. Count on us to deliver excellence every step of the way. Join our satisfied customers today!"
      features={features} />
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  )
}

export default Affiliate
