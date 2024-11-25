import React from 'react'
import HeroComponent from '../commonComponent/heroComponent'
import OffWordpressPlan from './components/offshoreWordpressPlan'
import WordpressFeatureElement from './components/wordpressFeatureElement'
import QlodHostServices from '../commonComponent/qlodHostServices'
import FAQsSection from '../commonComponent/faqSection'
import WebHostingGurantees from '../offShoreHosting/components/webHostingGurantees'
import Link from "next/link";

const options = [
  "Dedicated IP",
  "1 Click WP Install",
  "Weekly Backup",
  "24/7 Expert Support"
];
const features = [
  {
    img: '/assets/serviceImg/one-click-installs.svg',
    title: "One-click Installs",
    description: "Easily install popular apps like WordPress, Joomla, and Drupal with our one-click web hosting service. Enjoy fast performance and seamless integration with your favorite applications.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/weekly-backup_1.svg',
    title: "Weekly Backups",
    description: "QloudHost has created a smart data backup feature to make your website’s data safer and more secure. For Shared Hosting, we provide alternate day backup for 7 Days.(Included free) Whereas for VPS, Weekly backup available (1 Snapshot per week), will charge extra.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/powered-by-direct-admin.svg',
    title: "Powered by DirectAdmin",
    description: "Easily manage your hosting account with our popular and powerful web hosting control panel. Enjoy user-friendly point-and-click management, updated security features, and more.",
    link: "/read-more",
  },
  {
    img: '/assets/feature/uptime.svg',
    title: "99.9% uptime guaranteed.",
    description: "Our first priority is provide you industry-leading uptime performance with our business-class hosting solutions. Get a 99.9% uptime guarantee and the peace of mind that your website will always be up and running.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/lightning-fast-storage.svg',
    title: "Lightning-Fast Storage",
    description: "Experience lightning-fast data storage with our enterprise-class Nvme SSD storage arrays, which power our shared server plans for reliable performance. Enjoy fast and secure hosting with our state-of-the-art infrastructure.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/privacy-protection_1.svg',
    title: "100% Privacy Protection",
    description: "Data privacy is paramount. Our secure servers have advanced security features to protect your website from malicious attacks. Trust us for reliable and secure web hosting solutions.",
    link: "/read-more",
  },

];

const faqsData = [
  {
    question: "What is Offshore WordPress Hosting?",
    answer: <><Link href="/offshore-wordpress-hosting/" class="faq-link"> Offshore WordPress hosting</Link> is a type of web hosting where your WordPress website is hosted outside of your country of residence. This means that the hosting company is located in a different country, often with different laws and regulations than your own. This type of hosting is often used by website owners who want to protect their privacy or who need to host content that may not be legal in their own country.</>
  },
  {
    question: "How can I set up WordPress hosting?",
    answer: <>It’s simple: <Link href="https://my.qloudhost.com/login" class="faq-link">sign up</Link>, pick the right Offshore WP plan, and let our system do the rest work for you. You’ll be immediately redirected to the latest version of the WordPress platform, and through there, log in with your QloudHost DirectAdmin Panel Details. Now all you need to do is pick a lightweight WordPress theme and start downloading any of the hundreds of plugins available to start customising your website.</>
  },
  {
    question: "Why should I choose Offshore WordPress hosting?",
    answer: "Good News, It’s an Easy Process. We offer free Offshore Wordpress hosting migration and all the aspects related to migrating all your files from another web host to QloudHost WP Hosting for free. You simply need to provide us with the details of your current hosting account. For that, you can Just Open a Ticket and provide your previous Hosting Login Details we will transfer them for you free of cost."
  },
  {
    question: "How do I transfer my WordPress site to QloudHost?",
    answer: <>Good News, It’s an Easy Process. We offer <Link href="https://my.qloudhost.com/submitticket.php?step=2&deptid=2" className='faq-link'>free Offshore Wordpress hosting migration</Link>  and all the aspects related to migrating all your files from another web host to QloudHost WP Hosting for free. You simply need to provide us with the details of your current hosting account. For that, you can Just <Link href="" className='faq-link'>Open a Ticket</Link>  and provide your previous Hosting Login Details we will transfer them for you free of cost.</>
  },
  {
    question: "Is WordPress Premium the right plan for me?",
    answer: "Absolutely. No matter if you are a newbie or an experienced WordPress user, WordPress Premium has everything you need to build and grow your professional WordPress website."
  },
  {
    question: "Can I get a free SSL certificate with my WordPress hosting plan?",
    answer: "Yes, We Do offer Free SSL Certificates on all our WordPress Hosting Plans, where you can also install a free SSL certificate on your website right away."
  },
  {
    question: "What is your money-back guarantee?",
    answer: "We offer a 14-days money-back guarantee on all plans. Try our reliable and cheap WordPress Offshore hosting and due to some reason it doesn’t suit your needs, we’ll give you a full refund. s."
  },
];

const OffshoreWordPressHosting = () => {
  return (
    <div>
      <HeroComponent
      subTitle='WordPress Optimized Hosting '
        title="Buy Offshore WordPress Hosting"
        description="Whether WordPress powers your blog, web App or Business site, our Affordable 100% DMCA Ignored Offshore WordPress Hosting is fully optimised for top speed and reliability."
        button1Text="Get Started Now"
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/offshore-wordpress-hosting.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options} // Pass the options to the HeroComponent
      />
      <OffWordpressPlan />
      <WebHostingGurantees
      title='QloudHost Guarantees'
        subHeading="Allow our Best & Cheap Offshore hosting in Netherlands to exceed your expectations."
      />
      <WordpressFeatureElement />
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
