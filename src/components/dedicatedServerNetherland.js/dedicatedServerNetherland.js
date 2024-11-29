import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import DedicatedNetherlandPlan from './component/dedicatedNetherlandPlan';
import QlodHostServices from '../commonComponent/qlodHostServices';
import InstallationPanel from '../commonComponent/installationPanel';
import FAQsSection from '../commonComponent/faqSection';
import EnterpriseGrade from '../commonComponent/enterpriseGrade';
import WebsiteCover from '../commonComponent/websiteCover';

const options = [
  "Strong Infrastructure", 
  "NVMe SSD Storage", 
  "Enhanced Security", 
  "Fast, Accurate Responses"
];

const features = [
  {img: '/assets/serviceImg/powerful-configration.svg',
    title: "Powerful Configurations",
    description:"We use multiple server hardware technologies to provide powerful configuration options to choose from. No matter! Whatever plan choosing an offshore dedicated you will get the latest and one of the fastest hardware technologies with full control.",
    link: "",
  },
  {img: '/assets/serviceImg/full-root-access_1.svg',
    title: "Full Root Access",
    description:"QloudHost allows you full root access to configure and modify your server resources to make them more suitable for your website. In addition, you can change the security settings of your servers to enhance your data protection without any restrictions or interruption.",
    link: "",
  },
  {img: '/assets/serviceImg/freesetup.svg',
    title: "Free Setup with All Servers",
    description:"No matter! How high are your configurations? You will get a free server setup with QloudHost offshore Web Hosting servers and no hidden charges. Pay only for what you use!",
    link: "",
  },
  {img: '/assets/serviceImg/data-center.svg',
    title: "Amsterdam, Netherlands Data Center",
    description:"We offer data center services only in Amsterdam, Netherlands but the location of your website's hosting is crucial for optimal performance. Our data centre access lets you optimize your server resources and improve your website's performance.",
    link: "",
  },
  {img: '/assets/serviceImg/24x7-server-monitoring.svg',
    title: "24/7 Server monitoring",
    description:"We have built smart systems that constantly monitor your website and server to provide you with the automatic upgrade and update notifications. In addition, our onsite team of technical staff will always be there to physically monitor your server status.",
    link: "",
  },
  {img: '/assets/serviceImg/powered-by-direct-admin.svg',
    title: "Managed with DirectAdmin",
    description:"Experience exceptional technical support for your DMCA Ignored Server hosting, VPS and dedicated offshore server offer with a top-notch team. Ensuring your server is managed with DirectAdmin and receive timely security patches, OS updates, and other necessary updates.",
    link: "",
  },
  
];


const faqsData = [
  {
    question: "What is Netherlands Offshore dedicated server?",
    answer: `An Netherlands Offshore dedicated server is refers to a type of web hosting service where an individual or organization rents an entire physical server that is located in the Netherlands,
     and that server is used exclusively for their own website or applications. And the term offshore means your netherlands offshore dedicated server is located in offshore location where client 
     host their site with data privacy and legal considerations or different rules regulation.`
  },
  {
    question: "Can I upgrade my Dedicated server to higher plan?",
    answer: `Yes, you can upgrade your current Offshore dedicated server in Netherlands with your choice custom CPU, RAM, Storage and bandwidth.`
  },
  {
    question: "Do you offer free migration for your DMCA Ignored dedicated server?",
    answer: `Yes, We do offer completely free-of-cost migration for up to 5 GB* without causing any data loss. Moreover, we do not put any additional charges or hidden charges, but in case your website files have more data then 5GB, then it will be chargeable as guided by our policies.`
  },
  {
    question: "How many Dedicated IP Offered by you?",
    answer: `We Offer 1 IPv4 with Our Netherlands offshore dedicated server. Moreover if you need Additional IP Address then open a Support Ticket.`
  },
  {
    question: "What can QloudHost Offshore dedicated Hosting be used for?",
    answer: <>QloudHost Offshore Netherlands Dedicated Server is used for many resource-intensive production needs- 
    <ul>
    <li>Desire for data security</li>
    <li>evading government surveillance, and avoiding censorship.</li>
    <li>Prioritize strong data protection and free speech.</li>
    <li>Emphasize security and anonymity for the website.</li>
    <li>Keep host location private.</li>
    <li>Value speech freedom regardless of location.</li>
    <li>Prefer hosting in a country with robust internet infrastructure.</li>
    <li>Useful for blogs, forums, and content prone to censorship.</li>
    <li>Pharmaceutical companies can use DMCA Ignored servers to comply with hosting rules.</li>
    </ul></>
  },
  {
    question: "How do I get started with Offshore dedicated server?",
    answer: `To get started with our offshore Server, you just need to choose your favourite reliable offshore web hosting plan, enter your authentic details and checkout! Your servers will be ready to use in just a few days, all thanks to our instant activation policy.`
  },
  {
    question: "Does QloudHost provide managed Offshore dedicated servers?",
    answer: `On account of providing full flexibility and root access with our reliable dedicated server hosting solution, we don’t provide Fully managed dedicated servers. Hence, you completely customise your servers as per your needs and requirements.`
  },
  {
    question: "How long does it take to activate my Offshore Server Netherlands",
    answer: `We offer our Shared and VPS services to the market with an instant activation policy, Where as for DMCA Ignored Netherlands server will be ready to use in 5-7 Working Days.`
  },
];

const DedicatedServerNetherland = () => {
  return (
    <div>
      <HeroComponent
      subTitle='Netherlands Offshore Dedicated Server '
        title="Cheap Netherlands Offshore dedicated Server"
        description="Host on a powerful offshore dedicated server in the Netherlands with 99.9% uptime, full root access, low latency, Intel AMD Ryzen, top security, and multiple OS/control panel choices. Expertly assembled."
        button1Text="Get Started Now"
        button1Link="#explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/netherlands-offshore-dedicated-server.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options} // Pass the options to the HeroComponent
      />
      <DedicatedNetherlandPlan/>
      <EnterpriseGrade
        heading="Enterprise-Grade Netherlands Offshore Servers"
        subHeading="Lease a dependable and Affordable Netherlands offshore server with unmetered resources for your business, 
        and enjoy unparalleled processing power coupled with top-tier security for your critical applications.
         We provide top-notch hardware, incredibly fast network speeds, and round-the-clock support at budget-friendly rates. 
         Whether you’re hosting a website or scripting a site, choose QloudHost for an exceptional experience:"
      />
      <QlodHostServices
        heading="Why Choose QloudHost Dedicated Offshore Hosting?"
      content="Revamp high-quality possibilities effectively instead of focusing solely on innovative ideas.
Utilize advanced technology security measures to ensure accurate information dissemination."
      features={features} 
      />
      <InstallationPanel
        title="Fast OS/Admin Panel Installation!"
        description="No matter! Whether you wish to work with Linux, Windows, Cent OS, Debian or any other popular OS, get it installed on your server
with just a few clicks. In addition, Our DMCA Ignored VPS Hostingare compatible with all the Control panels available in the market so
that you can manage your website files with full control!"
        buttonText="Get Started Now"
        url='#explore'
        panelOptions={[
          { name: 'cPanel', img: '/assets/icon/cPanel.png'},
          { name: 'DirectAdmin', img: '/assets/icon/directAdmin.png' },
          { name: 'CyberPanel', img: '/assets/icon/cyberPanel.png'},
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'Debian', img: '/assets/icon/debain.png'},
        ]}
      />
      <WebsiteCover/>
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  )
}

export default DedicatedServerNetherland
