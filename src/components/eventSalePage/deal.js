import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';

import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import WhyStableDeals from './components/whyStableDeals';
import DealPlan from './components/DealPlan';
import GetMore from './components/GetMore';

const options = [
    "Netherlands Location",
    "Serving only high-speed",
    "Free Website Migration",
    "24/7 Support "
  ];

  const features = [
    {img: '/assets/serviceImg/privacy-protection_2.svg',
      title: "Enhanced Security",
      description:"Benefit from advanced security tools that protect your site from malware and cyber threats, 24/7",
      link: "",
    },
    {img: '/assets/feature/uptime.svg',
      title: "99.9% Uptime",
      description:" Enjoy reliable hosting with 99.9% uptime, ensuring your site is always accessible for visitors worldwide.",
      link: "",
    },
    {img: '/assets/feature/ssd.svg',
      title: "NVMe Storage",
      description: "Experience faster load times with NVMe storage, improving site performance and user satisfaction",
      link: "",
    },
    {img: '/assets/serviceImg/one-click-installs.svg',
      title: "1-click App Installer",
      description: " Easily install 400+ apps like WordPress in seconds, simplifying setup for any skill level..",
      link: "",
    },
    {img: '/assets/serviceImg/support.svg',
      title: "24/7 Expert Support",
      description: " Get round-the-clock assistance from our skilled team, ready to solve any issue quickly.",
      link: "",
    },
    {img: '/assets/serviceImg/weekly-backup_1.svg',
      title: "Weekly Backup",
      description: "Protect your data with automated weekly backups, ensuring you can restore your site if needed.",
      link: "",
    },
    
  ];

 

const Deal = () => {
  return (
    <div>
      <HeroComponent
         subTitle='Get 2 extra months '
    title="Best Black Friday Cyber Monday Deal"
        description=""
        button1Text="Get the Deal "
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/BLACK-FRIDAY.jpg'
        moneyBackText=""
        options={options} // Pass the options to the HeroComponent
      />
      <DealPlan/>
      <WhyStableDeals/>
      <QlodHostServices
        heading="Feature Included With Black Friday Cyber Monday Web Hosting Deals"
      content=""
      features={features} 
      />
      <Testimonials/>
      <GetMore/>
     
    </div>
  )
}

export default Deal
