import React from "react";
import HeroComponent from "../commonComponent/heroComponent";
import OffShoreHostingPlan from "./components/offShoreHostingPlan";
import TechnicalSpecification from "../commonComponent/technicalSpecification";
import OffshoreFeatureElement from "./components/offshoreFeatureElement";
import QlodHostServices from "../commonComponent/qlodHostServices";
import Testimonials from "../commonComponent/testimonial";
import FAQsSection from "../commonComponent/faqSection";
import WebHostingGurantees from "./components/webHostingGurantees";
import Link from "next/link";


const options = [
  "NVMe SSD Storage",
  "100% Privacy",
  "LiteSpeed Server",
  "1-Click Install",
];

const features = [
  {
    img: '/assets/serviceImg/one-click-installs.svg',
    title: "One-click Installs",
    description: (
    
        `Easily install popular apps like <a href='/offshore-wordpress-hosting/' class="faq-link ">WordPress</a>, Joomla, and Drupal with our
        one-click web hosting service. Enjoy fast performance and seamless
        integration with your favorite applications.`
    ),
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/weekly-backup_1.svg',
    title: "Weekly Backups",
    description:
      "QloudHost has created a smart data backup feature to make your website’s data safer and more secure. For Shared Hosting, we provide alternate day backup for 7 Days. (Included free) Whereas for VPS, Weekly backup available (1 Snapshot per week), will charge extra.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/powered-by-direct-admin.svg',
    title: "Powered by DirectAdmin",
    description:
      "Easily manage your hosting account with our popular and powerful web hosting control panel. Enjoy user-friendly point-and-click management, updated security features, and more.",
    link: "/read-more",
  },
  {
    img: '/assets/feature/uptime.svg',
    title: "99.9% uptime guaranteed.",
    description:
      "Our first priority is provide you industry-leading uptime performance with our business-class hosting solutions. Get a 99.9% uptime guarantee and the peace of mind that your website will always be up and running",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/lightning-fast-storage.svg',
    title: "Lightning-Fast Storage",
    description:
      "Experience lightning-fast data storage with our enterprise-class Nvme SSD storage arrays, which power our shared server plans for reliable performance. Enjoy fast and secure hosting with our state-of-the-art infrastructure.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/privacy-protection_1.svg',
    title: "100% Privacy Protection",
    description:
      "Data privacy is paramount. Our secure servers have advanced security features to protect your website from malicious attacks. Trust us for reliable and secure web hosting solutions.",
    link: "/read-more",
  },
];

const faqsData = [
  {
    question: "What is offshore Web Hosting?",
    answer:
      <><Link href='/offshore-web-hosting/' className="faq-link">Offshore web hosting</Link> refers to the practice of hosting your website, data, or application in a data center located outside your country of origin. This approach offers numerous benefits, such as enhanced privacy, increased security, and the ability to host content that may be restricted in certain regions. Offshore hosting is particularly useful for those looking to host copyrighted or <Link href='/' className="faq-link">DMCA</Link> content, as well as websites that may be vulnerable to hacking attempts. By choosing an offshore web hosting, you can enjoy greater flexibility, increased security, and improved performance for your website or application.</>,
  },
  {
    question: "How to know which web hosting plan I should choose?",
    answer: <>Before you choose the best shared web hosting plan for your website, there are many things to take into consideration.
      <ul>
          <li>What amount of traffic do you expect to see your site receive?</li>
          <li>What information do you need from your website visitors?</li>
          <li>How many websites are you able to host?</li>
          <li>What technical skills are you able to use to manage your website server?</li>
          <li>What is your website storage and bandwidth needs? What extra features/ support do your website require from your hosting plan ?</li>
      </ul>   </>,
  },
  {
    question: "What is the difference between Shared vs Offshore VPS Hosting?",
    answer:
      <>Offshore Web Hosting plans allow you to host your website with other users. This means that your website will not receive a certain amount of resources (RAM or CPU). Offshore VPS Hosting offers more bandwidth and space to handle a greater traffic flow to your website. You can expand your website with <Link href='/offshore-vps-hosting/' className="faq-link">Offshore VPS Hosting</Link> servers.  This allows you to easily scale up your website as it develops. VPS Hosting gives users more control, so you can modify your control configuration as much as you like.</>,
  },
  {
    question: "With all these hosting plans, how do I choose the right one?",
    answer:
      <>If you have a small website or you are just starting out, shared hosting is a good option. However, if you need more power, you may want to consider an <Link href='/offshore-vps-hosting' className="faq-link">offshore VPS</Link>. There are many choices available, which can be overwhelming, but we can help you find the best option for your business and website. You can speak with an expert today to get the answers you need.</>,
  },
  {
    question: "How Can I Upgrade My Account if I Need To?",
    answer:
      <><Link href='/' className="faq-link">QloudHost</Link> makes upgrading your web hosting service a breeze. Our <Link href='/offshore-vps-hosting/' className="faq-link">upgrade</Link> process is seamless, ensuring that your website remains accessible without any downtime. Rest assured that you won’t have to deal with frustrating browsing experiences or revenue loss.</>,
  },
  {
    question: "Where are your servers located?",
    answer:
      <>As a leading Best & Cheap offshore web hosting provider, we take pride in delivering top-notch hosting solutions. Our servers are located in the Netherlands, in partnership with a trusted offshore data center.</>,
  },
  {
    question: "Do You Offer a Script Auto-Installer?",
    answer:
      <>Yes, <Link href='/' className="faq-link">QloudHost</Link> has a custom-developed tool that allows you to install 400+ apps on your website in a One-click. Our auto-installer makes it faster and easier to try out different scripts and find the best ones for your website.</>,
  },
];

const OffShorewebHosting = () => {
  return (
    <div>
      <HeroComponent
      subTitle='Buy Offshore Web Hosting'
        title="Best Offshore Web Hosting"
        description="Boost your online presence with LiteSpeed optimized offshore web hosting, high-class security, and 24/7 expert support from a reliable and trusted DMCA Ignored web hosting company Hosted in Amsterdam, Netherlands"
        button1Text="Get Started Now"
        button1Link="#explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/dmca-cheap-offshore-web-hosting.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options}
      />
      <OffShoreHostingPlan />
      <WebHostingGurantees 
      title='QloudHost Guarantees'
      subHeading="Allow our Best & Cheap Offshore hosting in Netherlands to exceed your expectations." />
      <TechnicalSpecification />
      <OffshoreFeatureElement />
      <QlodHostServices
        heading="Why Choose QloudHost For Offshore Web Hosting?"
        content="Looking for some good reasons to choose QloudHost? Here’s the reason of our confidence."
        features={features}
      />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
    </div>
  );
};

export default OffShorewebHosting;
