import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();

  const metaTagsData = {
    "/": {
      title: "DMCA Ignored Hosting | 100% Offshore, Cheap, Fast NVMe SSD",
      description:
        "QloudHost ❤ Offer Best DMCA Ignored Hosting Servers at Reasonable Prices to Accelerate Online Growth With 100% Privacy Protection Guaranteed and 24/7 Support.",
      keywords: "",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebHostingService",
        "name": "QloudHost",
        "url": "http://next.qloudhost.com/",
        "description": "Best DMCA Ignored Hosting Servers at Reasonable Prices to Accelerate Online Growth.",
        "offers": {
          "@type": "Offer",
          "url": "http://next.qloudhost.com/",
          "priceCurrency": "USD",
          "price": "19.99",
          "category": "Web Hosting",
        },
        "sameAs": [
          "https://www.facebook.com/yourpage",
          "https://twitter.com/yourprofile",
          "https://www.linkedin.com/in/yourprofile"
        ]
      }
    },
    "/offshore-vps-hosting/": {
      title: "Buy Cheap Offshore VPS Hosting✰#1 NVMe SSD, AMD Ryzen",
      description:
        "QloudHost offers best & Cheap offshore VPS hosting servers with 100% privacy protection,root access, 24*7 support and totally Anonymous Offshore hosting.",
      keyword: "",
    },
    "/offshore-dedicated-servers/": {
      title: "Buy Cheap Offshore Dedicated Servers✰Free setup,Unmetered",
      description:
        "Maximize your website’s speed and security with our best & Cheap offshore dedicated servers dmca ignored. Get power & reliability with your business needs to succeed.",
      keyword: "",
    },

    "/offshore-streaming-server/": {
      title: "Offshore Streaming Servers | 100% DMCA Ignored NVMe SSD",
      description: "Experience fast and reliable streaming with our offshore streaming server. Get more powerful resources, full privacy, and a bufferless streaming experience.",
      keyword: "",
    },

    "/offshore-web-hosting/": {
      title: "Buy Best Cheap Offshore Web Hosting✰100% DMCA Ignored, Secure",
      description: "Get the most out of your website with our Best Cheap offshore web hosting. Enjoy reliability & privacy with NVMe SSD, Be Always Online no matter what, Save 10% on Annual Plans.",
      keyword: "",
    },

    "/offshore-wordpress-hosting/": {
      title: "Buy Best Cheap Offshore WordPress Hosting✰ 100% DMCA Ignored",
      description: "Looking for fast and affordable Offshore WordPress hosting? Our secure, Privacy friendly offshore hosting service is your solution. Get #1 performance today!",
      keyword: "",
    },
    "/offshore-video-hosting/": {
      title: "Powerful Offshore Video Hosting - 100% DMCA Ignored Server",
      description: "To provide you with untraceable security and strong privacy protection offshore video hosting services are generally based on DMCA Ignored servers.",
      keyword: "",
    },
    "/adult-hosting/": {
      title: "Cheap Adult Web Hosting✰Buy Adult VPS,Dedicated server",
      description: "Buy Powerful Adult Web Hosting Plans with QloudHost. Friendly control Panel, dedicated resources, unlimited bandwidth & Expert support for your Adult Website.",
      keyword: "",
    },

    "/dmca-ignored-vps/": {
      title: "DMCA Ignored VPS Hosting✰ Fast Cheap 100% Offshore, Secure",
      description: "Best DMCA Ignored VPS Hosting Servers On A Budget! Performance, power, and flexibility is just a click away. complete protection against copyright complaints.",
      keyword: "",
    },

    "/offshore-vps-hosting/netherlands/": {
      title: "Best Netherlands Offshore VPS Hosting▷ Fast & Cheap",
      description: "Looking for Best and Cheap Netherlands Offshore VPS hosting. Get lightning-fast reliable uptime and top-notch support for your website or app.",
      keyword: "",
    },

    "/high-performance-vps-hosting/": {
      title: "Buy Best High Performance VPS Hosting on AMD Epyc CPU $18.99/mo",
      description: "Get top-tier VPS hosting on AMD Epyc CPUs at just $18.99/mo. Fast, reliable, and perfect for demanding applications!",
      keyword: "",
    },

    "/dmca-ignored-dedicated-servers/": {
      title: "DMCA Ignored Dedicated Servers | High 99.99% Uptime Rate",
      description: "Maximize your site’s potential with our DMCA Ignored Dedicated Server. Enjoy lightning-fast performance, NVMe SSD storage, and full root access for enhanced security.",
      keyword: "",
    },

    "/offshore-dedicated-servers/russia/": {
      title: "Buy Russia Offshore Dedicated Server✰ NVMe SSD, Free setup",
      description: "Maximize your website’s speed & privacy with cheap Russia offshore dedicated servers. NVMe SSD Drive, DDoS Protection and 24*7 Support.",
      keyword: "",
    },

    "/offshore-dedicated-servers/netherlands/": {
      title: "Buy Netherlands Offshore Dedicated Server✰ NVMe SSD, Free setup",
      description: "Maximize your website’s speed & privacy with cheap Netherlands offshore dedicated server. NVMe SSD Drive, DDoS Protection and 24*7 Support.",
      keyword: "",
    },

    "/offshore-streaming-server/netherlands/": {
      title: "Offshore Streaming Servers | 100% DMCA Ignored NVMe SSD",
      description: "Experience fast and reliable streaming with our offshore streaming server. Get more powerful resources, full privacy, and a bufferless streaming experience.",
      keyword: "",
    },

    "/offshore-vps-hosting/windows-rdp/": {
      title: "Offshore Windows VPS Hosting✰ 100% DMCA Ignored, NVMe SSD",
      description: "QloudHost offers best Cheap offshore windows VPS DMCA Ignored servers with 100% privacy protection,root access, 24*7 support.",
      keyword: "",
    },

    "/coupons/": {
      title: "QloudHost Coupon Codes and Promotion- Save Big on DMCA Hostings",
      description: "Save money on your DMCA offshore hosting needs with QloudHost’s exclusive coupon codes. Get access to unbeatable discounts and start saving today!",
      keyword: "",
    },

    "/affiliates/": {
      title: "Best DMCA Ignored Offshore Web Hosting Affiliate Program - QloudHost",
      description: "An easy way of making some extra money. Sign up for free and earn extra revenue by promoting us! Each referred client will get 20% per sale!",
      keyword: "",
    },
    "/privacy-policy/": {
      title: "Privacy Policy- QloudHost",
      description: "Get your offshore VPS hosting today! With instant setup, untraceable footprints and full data protection.",
      keyword: "",
    },
    "/terms/": {
      title: "Terms- QloudHost",
      description: "QloudHost agrees to provide services to its customers as far as they follow the terms and conditions. The terms and conditions are applied between the",
      keyword: "",
    },
    "/fair-usage-policy/": {
      title: "Fair Usage Policy- QloudHost",
      description: "Our primary goal is to protect your privacy and maintain your freedom of speech, with an expectation that the customers will respect our dignity by not",
      keyword: "",
    },
    "/refund/": {
      title: "Refund- QloudHost",
      description: "Get your DMCA offshore hosting today! With instant setup, untraceable footprints and full data protection.",
      keyword: "",
    },
    "/report-abuse/": {
      title: "Report Abuse- QloudHost",
      description: "Get your offshore VPS hosting today! With instant setup, untraceable footprints and full data protection.",
      keyword: "",
    },
    "/about/": {
      title: "About Us QloudHost - #1 DMCA Ignored Hosting",
      description: "Qloudhost is focused on providing the best DMCA ignored hosting services in the market to ensure your full privacy, untraceable footprints and security.",
      keyword: "",
    },
    "/contact-us/": {
      title: "Contact-us- QloudHost",
      description: "Reach out with your questions, concerns and challenges. Or just to say hi. We’ll be happy to chat and help.",
      keyword: "",
    },

    // Add more routes and corresponding meta tags here
  };

  const currentMetaTags = metaTagsData[location.pathname] || {};

  return (
    <Helmet>
      <title>{currentMetaTags.title}</title>
      <meta name="description" content={currentMetaTags.description} />
      <meta name="keywords" content={currentMetaTags.keywords} />
    </Helmet>
  );
};

export default MetaTags;
