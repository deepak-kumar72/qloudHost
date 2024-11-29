import React from "react";
import HeroComponent from "../commonComponent/heroComponent";
import DmcaDedicatedPlan from "./components/dmcaDedicatedServerPlan";
import QlodHostServices from "../commonComponent/qlodHostServices";
import FAQsSection from "../commonComponent/faqSection";
import DedicatedHostingSolution from "./components/dedicatedHostingSolution";
import InstallationPanel from "../commonComponent/installationPanel";
import EnterpriseGrade from "../commonComponent/enterpriseGrade";
import WebsiteCover from "../commonComponent/websiteCover";
import Link from "next/link";

const options = [
  "Flexibility and Control",
  "Multiple OS Options",
  "Fast, Secure, Reliable",
  "Multi-Layer Defense",
];

const features = [
  {
    img: '/assets/serviceImg/powerful-configration.svg',
    title: "Powerful Configurations",
    description:
      "We use multiple server hardware technologies to provide powerful configuration options to choose from. No matter! Whatever plan choosing an offshore dedicated you will get the latest and one of the fastest hardware technologies with full control.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/full-root-access_1.svg',
    title: "Full Root Access",
    description:
      "QloudHost allows you full root access to configure and modify your server resources to make them more suitable for your website. In addition, you can change the security settings of your servers to enhance your data protection without any restrictions or interruption.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/powerful-configration.svg',
    title: "Free Setup with All Servers",
    description:
      "No matter! How high are your configurations? You will get a free server setup with QloudHost offshore Web Hosting servers and no hidden charges. Pay only for what you use!",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/data-center.svg',
    title: "Amsterdam, Netherlands Data Center",
    description:
      "We offer data center services only in Amsterdam, Netherlands but the location of your website's hosting is crucial for optimal performance. Our data centre access lets you optimize your server resources and improve your website's performance.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/24x7-server-monitoring.svg',
    title: "24/7 Server monitoring",
    description:
      "We have built smart systems that constantly monitor your website and server to provide you with the automatic upgrade and update notifications. In addition, our onsite team of technical staff will always be there to physically monitor your server status.",
    link: "/read-more",
  },
  {
    img: '/assets/serviceImg/powered-by-direct-admin.svg',
    title: "Managed with DirectAdmin",
    description:
      `Experience exceptional technical support for your <a href='/' class='faq-link'> DMCA Ignored Hosting</a> hosting, VPS and dedicated offshore server offer with a top-notch team. Ensuring your server is managed with DirectAdmin and receive timely security patches, OS updates, and other necessary updates.`,
    link: "/read-more",
  },
];


const faqsData = [
  {
    question: "What is DMCA Ignored Dedicated Server?",
    answer:
      "A DMCA Ignored Dedicated Server, also known as a copyright-ignored dedicated server, is a hosting solution that disregards the Digital Millennium Copyright Act (DMCA) regulations.Unlike shared hosting, where resources are divided among multiple users, a dedicated server offers exclusive resources for a single user. This isolation helps ensure optimal speed, reliability, and privacy.",
  },
  {
    question: "Can I upgrade my VPS to an DMCA Ignored dedicated servers?",
    answer: <>Yes, We provide completely flexible <Link href='/offshore-vps-hosting/' className="faq-link">offshore VPS servers</Link>  that can be easily upgraded to as many resources as possible! You just need to <Link href='/contact-us/' className="faq-link">contact our team</Link> of highly trained experts, explain your needs and they will upgrade your servers easily to the best managed DMCA Ignored dedicated server without any hidden charges.</>,
  },
  {
    question:
      "Do you offer free migration for your DMCA Ignored dedicated server?",
    answer: <>Yes, We offer completely free-of-cost migration for up to 5 GB* without causing any data loss. Moreover, we do not put any additional charges or hidden charges, but in case your website files have surpassed 5GB of data, then it will be chargeable as guided by our <Link href='/privacy-policy/' className="faq-link"> policies</Link>.</>,
  },
  {
    question: "How many websites can I host on an DMCA dedicated server?",
    answer: `It totally depends upon your website’s files. For example, if you are planning to host a high-traffic blogging or business website that contains multiple posts, high graphics images and videos, then we will recommend you host only 1 or 2 websites on our DMCA Ignored Dedicated servers in Netherlands Offshore Location.`,
  },
  {
    question: "What can QloudHost DMCA Ignored dedicated Hosting be used for?",
    answer: `QloudHost offshore dedicated hosting provider with high performance at a low price while being suitable for a number of use cases: Hosting business applications and websites, pre-production environments, gaming, Pharmaceutical Websites and more. For resource-intensive production needs, we recommend our next-generation Cheapest Offshore best DMCA Dedicated server hosting. These include more services, offering more options, and an advanced network.`,
  },
  {
    question: "What are the Benefits of DMCA Offshore dedicated server hosting?",
    answer: <>If you are planning to <Link href='https://qloudhost.com/blog/host-a-website-anonymously/' className="faq-link"> host your website without losing your anonymity</Link>, then choosing an offshore DMCA Dedicated server will be the best pick for you!! Moreover, we mentioned some more points below that will help you to understand everything in detail.
<ul><li>Full privacy assurance</li>
<li>Unmetered resources</li>
<li>Full content flexibility</li>
<li>Fully DMCA ignored</li>
<li>No arbitrary actions caused</li>
<li>Freedom of Speech</li></ul>
See the <Link href='https://qloudhost.com/blog/benefits-of-offshore-dedicated-server-hosting/' className="faq-link">benefits of DMCA Dedicated Servers</Link> and decide for yourself if it’s the right call for you.</>,
  },
  {
    question: "How do I get started with DMCA Ignored dedicated server?",
    answer: `To get started with our DMCA Server, you just need to choose your favourite reliable offshore web hosting plan, enter your authentic details and checkout! Your servers will be ready to use in just a few days, all thanks to our instant activation policy.`,
  },
  {
    question: "Does QloudHost provide managed DMCA Ignored dedicated servers?",
    answer: `On account of providing full flexibility and root access with our cheap dmca dedicated server hosting solution, we don’t provide Fully managed dedicated servers. Hence, you completely customise your servers as per your needs and requirements.`,
  },
  {
    question: "How long will it take for my cheap DMCA Ignored dedicated server to be ready?",
    answer: `As explained above in the above FAQ, we offer our services to the market with an instant activation policy. Hence, after you finished the payment, your DMCA Ignored hosting services will be ready to use in 5-7 Working days.`,
  },
];

const DmcaDedicatedServer = () => {
  return (
    <div>
      <HeroComponent
      subTitle='Buy DMCA Ignored Dedicated Server'
        title="Best DMCA Ignored Dedicated Server"
        description="Supercharge your site with QloudHost’s DMCA Ignored dedicated servers! Enjoy top-tier security, performance, and control—all at an unbeatable price. Focus on growth while we handle the rest."
        button1Text="Get Started Now"
        button1Link="#explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/dmca-ignored-dedicated-server.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options}
      />
      <DmcaDedicatedPlan />
      <EnterpriseGrade
        heading="Enterprise-Grade DMCA Ignored Dedicated Servers"
        subHeading="Lease a dependable and cheap dmca ignored dedicated hosting with unmetered resources for your business, 
        and enjoy unparalleled processing power coupled with top-tier security for your critical applications. 
        We provide top-notch hardware, incredibly fast network speeds, and round-the-clock support at budget-friendly rates.
         Whether you’re hosting a website or scripting a site, choose QloudHost for an exceptional experience:"
      />
      <QlodHostServices
        heading="Why Choose QloudHost DMCA Ignored Server?"
        content="Revamp high-quality possibilities effectively instead of focusing solely on innovative ideas.
Utilize advanced technology security measures to ensure accurate information dissemination."
        features={features}
      />
      <DedicatedHostingSolution />
      <InstallationPanel
        title="Fast OS/Admin Panel Installation!"
        description="No matter! Whether you wish to work with Linux, Windows, Cent OS, Debian or any other popular OS, get it installed on your server
with just a few clicks. In addition, Our DMCA Ignored VPS Hostingare compatible with all the Control panels available in the market so
that you can manage your website files with full control!"
        buttonText="Get Started Now"
        url='#explore'
        panelOptions={[
          { name: "cPanel", img: '/assets/icon/cPanel.png' },
          { name: "DirectAdmin", img: '/assets/icon/directAdmin.png' },
          { name: "CyberPanel", img: '/assets/icon/cyberPanel.png'},
          { name: "Ubuntu", img: '/assets/icon/ubuntu.png'},
          { name: "Debian", img: '/assets/icon/debain.png'},
        ]}
      />
      <WebsiteCover/>
      <FAQsSection faqs={faqsData} />
    </div>
  );
};

export default DmcaDedicatedServer;
