import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import NeitherLandOffshoreVpsPlan from './components/neitherlandVpsPlan';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import FAQsSection from '../commonComponent/faqSection';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import NeitherlandVpFeatureElement from './components/neitherlandVpsFeatureElement';
import Link from "next/link";
import QloudGuarantees from '../adultHosting/components/qloudGurantees';

const options = [
  "NVMe SSD Storage",
  "LiteSpeed Server",
  "Strong Infrastructure",
  "24/7 Expert Support"
];

const features = [
    {img: '/assets/serviceImg/privacy-protection_1.svg',
      title: "100% Privacy Protection",
      description:"Get impenetrable security and full data privacy with QloudHost offshore hosting servers. Sounds quite an affirmative statement, Right? But that’s true because we minimize our customer’s visibility to make your footprints untraceable on the internet.",
      link: "",
    },
    {img: '/assets/serviceImg/fair-and-affordable.svg',
      title: "Fair & Affordable",
      description:`QloudHost provides you the most affordable <a href='/' class='faq-link'>DMCA Ignored Hosting</a>  plans to run your offshore hosting servers because we understand the value of your hard-earned money. Our plans are focused on providing you with well-balanced features to exclude unnecessary things and decrease the cost.`,
      link: "",
    },
    {img: '/assets/serviceImg/full-root-access_1.svg',
      title: "Full Root Access",
      description:"Get root level control to your server to customize it according to your needs and requirements. Isn’t it amazing? But how will this feature benefit your website? Simple, with root access, you are allowed to create, modify, customize or delete files of your website without seeking our permission.",
      link: "",
    },
    {img: '/assets/feature/uptime.svg',
      title: "99.9% uptime guaranteed.",
      description:"Our first priority is to provide you services with quality that’s why our all plans come with a guaranteed uptime of 99.9%. So let your website into our safe hands and we will ensure the availability of your website on the internet.",
      link: "",
    },
    {img: '/assets/serviceImg/website-migration.svg',
      title: "Free Website Migration",
      description:`Had a really bad experience with your previous service provider? Don’t worry! We have built a <a href='/contact-us/' class='faq-link'> dedicated team </a> of technical experts to migrate your website to quality services without causing any data loss.`,
      link: "",
    },
    {img: '/assets/serviceImg/weekly-backup_1.svg',
      title: "Weekly Backup",
      description:"QloudHost has created a smart data backup feature to make your website’s data safer and more secure. But how? Simple, For Shared Hosting, we provide alternate day backup for 7 Days. (Included free) Whereas for VPS, Weekly backup available (1 Snapshot per week), will charge extra.",
      link: "",
    },
 
    
  ];

  const faqsData = [
    {
      question: "Can I host multiple websites within one NL VPS Hosting plan?",
      answer: <>Yes, you can host multiple websites within one Amsterdam, Netherlands VPS hosting plan from QloudHost. Our Netherlands offshore Virtual Private hosting plans are designed to provide
       ample resources and flexibility to host multiple websites, web applications, and other online projects.<br/>
      You can use the provided control panel to manage your websites, create multiple domains and subdomains, and install popular content management systems like <Link href='/offshore-wordpress-hosting/' className='faq-link'>WordPress</Link> , Joomla, or Drupal.
       With full root access to your VPS server, you have complete control over your hosting environment and can customize it to suit your specific needs<br/>
      QloudHost also offers reliable and high-speed network connectivity, ensuring that your websites are accessible and performant at all times.</>
    },
    {
      question: "What is Netherlands VPS Hosting and it's benefits ?",
      answer: <>Netherlands offshore VPS hosting refers to a type of web hosting service where a virtual private server (VPS) is located in the Netherlands and hosted by a company that operates 
      outside of Dutch jurisdiction. Offshore hosting provides users with greater privacy and security, as well as access to legal protections that may not be available in their home country.<br/>
      The benefits of Netherlands offshore VPS hosting include:
      <ul>
      <li>Increased privacy</li>
      <li>Improved security</li>
      <li>Flexibility and scalability</li>
      <li>Better performance</li>
      <li>Affordable pricing</li></ul>
      Overall, Our Netherlands offshore VPS hosting offers users a high level of privacy, security, flexibility, and affordability, making it an attractive option for those seeking reliable web hosting services.</>
    },
    {
      question: "Can I upgrade my Netherlands VPS hosting plan later?",
      answer: `Yes, you can upgrade your Netherlands VPS hosting plan later if you need more resources or require a higher level of server performance. QloudHost offers flexible hosting plans that can be easily upgraded or downgraded as per your requirements.<br/>
      You can upgrade your VPS hosting plan to a dedicated server by contacting QloudHost’s expert support team. They will assist you in choosing the best hosting plan that meets your needs and guide you through the upgrade process.`
    },
    {
      question: "Which OS is supported by QloudHost Netherlands VPS hosting servers?",
      answer: `QloudHost Netherlands VPS hosting servers support both Windows and Linux operating systems. They offer a variety of operating system options to choose from, including Windows Server, CentOS, Debian, Ubuntu, and more.<br/>
      You can select the operating system that best suits your requirements and expertise. QloudHost also provides full root access to their VPS servers, which allows you to have complete control over your server’s operating system and software configuration.`
    },
    {
      question: "What is the Money-back Guarantee?",
      answer: <>QloudHost offers a 14-day money-back guarantee for their Netherlands VPS hosting services. This means that if you are not satisfied with their service for any reason within the first 14 days of signing up, you can request a full refund of your hosting fees.<br/>
      The money-back guarantee ensures that you can try out their hosting services risk-free and with complete peace of mind. If you encounter any issues or are not satisfied with their service, you can contact their <Link href='https://my.qloudhost.com/submitticket.php?step=2&deptid=2' className='faq-link'>support team</Link>  to initiate the refund process.</>
    },
    {
      question: "Do I need technical knowledge to benefit from QloudHost Netherlands VPS hosting?",
      answer: `No, you do not necessarily need technical knowledge to benefit from QloudHost Netherlands Offshore VPS hosting. QloudHost provides a user-friendly control panel with it’s VPS hosting Plans, which means you can handle a maximum number of tasks for yourself also.<br/>
      However, it can be helpful to have some technical knowledge or experience in managing servers, especially if you want to customize your VPS hosting environment or troubleshoot any issues that may arise. In any case, QloudHost offers support and resources to assist you with any technical concerns.`
    },
   
  ];

const NeitherLandOffshoreVps = () => {
  return (
    <div>
      <HeroComponent
      subTitle='Netherlands Offshore VPS'
        title="Powerful Netherlands Offshore VPS"
        description="Affordable VPS Hosting in Amsterdam, Netherlands with Linux & Windows support. Get, sure of high-performance and incredible hosting experience with ightning-fast Server."
        button1Text="Get Started Now"
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/netherland-offshore-vps.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options}
      />
      <NeitherLandOffshoreVpsPlan/>
      <QloudGuarantees
        subHeading="Boost your website performance with world-class Best & Cheap Netherlands offshore VPS Hosting servers and guaranteed performance."
      />
      <TechnicalSpecification/>
      <InstallationPanel
        title="Available Operating Systems"
        description="Work with your desired Operating system without any errors!"
        buttonText="Get Started Now"
        url='explore'
        panelOptions={[
          { name: 'AlmaLinux', img: '/assets/icon/almaLinux.png' },
          { name: 'RockeyLinux', img: '/assets/icon/rockyLinux.png'},
          { name: 'Debian', img: '/assets/icon/debain.png'},
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'Windows', img: '/assets/icon/window-icon.png' },
        ]}
      />
      <NeitherlandVpFeatureElement/>
      <QlodHostServices
      heading="Why Choose QloudHost Netherlands Offshore VPS Hosting?"
      content="Looking for some good reasons to choose QloudHost? Here’s the reason of our confidence. "
      features={features} />
      <Testimonials/>
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  )
}

export default NeitherLandOffshoreVps
