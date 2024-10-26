import React from "react";
import HeroComponent from "../commonComponent/heroComponent";
import images from "../../constants/images";
import TechnicalSpecification from "../commonComponent/technicalSpecification";
import OffshoreVpsPlan from "./components/offshoreVpsPlan";
import InstallationPanel from "../commonComponent/installationPanel";
import QlodHostServices from "../commonComponent/qlodHostServices";
import Testimonials from "../commonComponent/testimonial";
import PrivacyHardwarePage from "../offShoreVps/components/privacyHardwarePage";
import FeaturesYouGet from "./components/featuresYouGet";
import FAQsSection from "../commonComponent/faqSection";

const options = [
  "Faster Site Speeds",
  "Maximum Security",
  "Choice of Control Panel",
  "24/7 Expert Support",
];

const features = [
  {
    img: images.privacyprotection,
    title: "100% Privacy Protection",
    description:
      "Get impenetrable security and full data privacy with QloudHost offshore hosting servers. Sounds quite an affirmative statement, Right? But that’s true because we minimize our customer’s visibility to make your footprints untraceable on the internet.",
    link: "",
  },
  {
    img: images.fairAndaffordable,
    title: "Fair & Affordable",
    description:
      "QloudHost provides you the most affordable DMCA Ignored VPS plans to run your offshore hosting servers because we understand the value of your hard-earned money. Our plans are focused on providing you with well-balanced features to exclude unnecessary things and decrease the cost.",
    link: "",
  },
  {
    img: images.fullRootAcces,
    title: "Full Root Access",
    description:
      "Get root level control to your server to customize it according to your needs and requirements. Isn’t it amazing? But how will this feature benefit your website? Simple, with root access, you are allowed to create, modify, customize or delete files of your website without seeking our permission.",
    link: "",
  },
  {
    img: images.uptime,
    title: "99.99% uptime guaranteed.",
    description:
      "Our first priority is to provide you services with quality that’s why our all plans come with a guaranteed uptime of 99.9%. So let your website into our safe hands and we will ensure the availability of your website on the internet.",
    link: "",
  },
  {
    img: images.websiteMigration,
    title: "Free Website Migration",
    description:
      `Had a really bad experience with your previous service provider? Don’t worry! We have built a
       dedicated team of technical experts to migrate your website to quality services without causing
        any data loss.`,
    link: "",
  },
  {
    img: images.weeklyBackup1 ,
    title: "Weekly Backup",
    description:
      "QloudHost has created a smart data backup feature to make your website’s data safer and more secure. But how? Simple, For Shared Hosting, we provide alternate day backup for 7 Days. (Included free) Whereas for VPS, Weekly backup available (1 Snapshot per week), will charge extra.",
    link: "",
  },
];

const faqsData = [
  {
    question: "What is offshore VPS Hosting?",
    answer:
      "Offshore VPS is a special type of virtual private servers that is located outside of your country’s jurisdiction. This means that your data and your server are both physically and legally outside of your country’s control.",
  },
  {
    question: "What is the cost for an offshore VPS Hosting?",
    answer:
      "Unlike the other service providers, our focus is on both quality and affordability because we understand the value of your money. That’s why our Cheap offshore hosting plans start with just $18.99/month, making it the most Cheapest Offshore VPS Hosting in the market.",
  },
  {
    question: "Will I be able to upgrade my offshore VPS Server?",
    answer: `Yes, We provide you with resilient VPS hosting offshore plans which allow you to upgrade your server resources anytime with just a few clicks. In addition, you can also <a href="/offshore-dedicated-server/" class="faq-link">upgrade your plans</a> to get optimum performance and blazing fast loading speed.`,
  },
  {
    question:
      "I bought your offshore VPS Hosting, when will they be activated?",
    answer:
      "QloudHost Offshore Linux and Offshore Windows VPS provides you with an instant setup means that your servers will be ready to use right after you finish the purchase.",
  },
  {
    question: "What are the benefits of Offshore VPS hosting?",
    answer: `Offshore VPS hosting is becoming increasingly popular for those looking for a reliable and secure hosting solution. By hosting a website or application on a virtual private server located outside of their country of residence, users can benefit from enhanced security, better performance, and greater flexibility. See the benefits of Offshore VPS Hosting Servers and decide for yourself if it’s the right call for you. <a href="" class="faq-link">https://qloudhost.com/blog/benefits-of-dmca-ignored-hosting/</a>`,
  },
  {
    question: "Can I get full admin access to my offshore VPS Hosting Server?",
    answer:
      "Definitely, our offshore VPS hosting servers come with full root access, which provides you with the ability to customize your files and resources as per your needs. In addition, you can also create, modify, upgrade or delete your website with just a few clicks.",
  },
];


const OffshoreVps = () => {
  return (
    <div>
      <HeroComponent
        title="Best Cheap Offshore VPS Hosting"
        description="Reliable Offshore VPS with KVM Virtualization, Dedicated NVMe SSD, and full root access. Enjoy instant setup, untraceable footprints, and complete data protection to host all your applications with blazing-fast loading times."
        button1Text="Get Started Now"
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.vpsHosting}
        moneyBackText="14-Day Money-Back Guarantee"
        options={options}
      />
      <OffshoreVpsPlan />
      <TechnicalSpecification />
      <InstallationPanel
        title="Available Operating Systems"
        description="Work with your desired Operating system without any errors!"
        buttonText="Get Started Now"
        url="explore"
        panelOptions={[
          { name: "AlmaLinux", img: images.almaLinux },
          { name: "Rockey Linux", img: images.rockyLinux },
          { name: "Debian", img: images.debian },
          { name: "Ubuntu", img: images.ubuntu },
          { name: "Windows", img: images.windowIcon },
        ]}
      />
      <PrivacyHardwarePage />
      <QlodHostServices
        heading="What You Get with Your Offshore VPS Server"
        content="Looking for some good reasons to choose Qloudhost?  Here’s the reason of our confidence. "
        features={features}
      />
      <FeaturesYouGet />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
    </div>
  );
};

export default OffshoreVps;
