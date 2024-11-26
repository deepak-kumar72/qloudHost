import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();

  const metaTagsData = {
    "/": {
      title: "DMCA Ignored Hosting| 100% Offshore, Cheap, Fast NVMe SSD",
      description:
        "QloudHost ❤ Offer Best DMCA Ignored Hosting Servers at Reasonable Prices to Accelerate Online Growth With 100% Privacy Protection Guaranteed and 24/7 Support.",
      keywords: "",
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Product",
            "name": "DMCA Ignored Hosting",
            "category": "Web Hosting",
            "url": "https://qloudhost.com",
            "image": { "@type": "ImageObject", "url": "https://qloudhost.com/assets/Frame/home-dmca-ignored-hosting.webp" },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "3.50",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "brand": { "@type": "Brand", "name": "Qloudhost" },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "69",
              "bestRating": "5",
              "worstRating": "1.0"
            }
          },
          {
            "@type": "WebPage",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Web Hosting",
                  "item": "https://qloudhost.com"
                }
              ]
            }
          },
          {
            "@type": "ProfessionalService",
            "name": "QloudHost",
            "image": "https://qloudhost.com/assets/logo.svg",
            "@id": "https://qloudhost.com",
            "url": "https://qloudhost.com/",
            "priceRange": "$3.50-$399.00",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NL"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/qloudhost/",
              "https://twitter.com/qloudhosts",
              "https://www.linkedin.com/company/qloudhost/",
              "https://www.instagram.com/qloudhost/",
              "https://www.youtube.com/channel/UCpVyaoBqtQ581XxMfkp6swQ"
            ]
          }
        ]
      }
    },


    "/offshore-vps-hosting/": {
      title: "Buy Cheap Offshore VPS Hosting✰#1 NVMe SSD, AMD Ryzen",
      description:
        "QloudHost offers best & Cheap offshore VPS hosting servers with 100% privacy protection,root access, 24*7 support and totally Anonymous Offshore hosting.",
      keyword: "",
      schema:{
       "@context": "https://schema.org",
  "@type": "Product",
  "name": "OFFSHORE VPS HOSTING",
  "description": "QloudHost offers best & Cheap offshore VPS hosting servers with 100% privacy protection,root access, 24*7 support and totally Anonymous Offshore hosting.",
  "image": "https://qloudhost.com/assets/Frame/offshore-vps-hosting.webp",
  "sku": "OFFSHORE VPS HOSTING",
  "mpn": "OFFSHORE VPS HOSTING",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/offshore-vps-hosting/",
    "priceCurrency": "USD",
    "lowPrice": "18.99",
    "highPrice": "79.99",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
     
     },
 
    "/offshore-dedicated-servers/": {
      title: "Buy Cheap Offshore Dedicated Servers✰Free setup,Unmetered",
      description:
        "Maximize your website’s speed and security with our best & Cheap offshore dedicated servers dmca ignored. Get power & reliability with your business needs to succeed.",
      keyword: "",
      schema:{
        "@context": "https://schema.org",
  "@type": "Product",
  "name": "OFFSHORE DEDICATED SERVER",
  "description": "Maximize your website’s speed and security with our Best Cheap offshore dedicated servers DMCA Ignored. Get power & reliability with your business needs to succeed.",
  "image": "https://qloudhost.com/assets/Frame/cheap-offshore-dedicated-server.webp",
  "sku": "OFFSHORE DEDICATED SERVER",
  "mpn": "OFFSHORE DEDICATED SERVER",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/offshore-dedicated-servers/",
    "priceCurrency": "USD",
    "lowPrice": "129",
    "highPrice": "399",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/offshore-streaming-server/": {
      title: "Offshore Streaming Servers | 100% DMCA Ignored NVMe SSD",
      description: "Experience fast and reliable streaming with our offshore streaming server. Get more powerful resources, full privacy, and a bufferless streaming experience.",
      keyword: "",
      schema:{
       "@context": "https://schema.org",
  "@type": "Product",
  "name": "OFFSHORE STREAMING SERVER",
  "description": "Experience fast and reliable streaming with our offshore streaming server. Get more powerful resources, full privacy, and a bufferless streaming experience.",
  "image": "https://qloudhost.com/assets/Frame/robust-offshore-streaming-server.webp",
  "sku": "OFFSHORE STREAMING SERVER",
  "mpn": "OFFSHORE STREAMING SERVER",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/offshore-streaming-server/",
    "priceCurrency": "USD",
    "lowPrice": "349",
    "highPrice": "399",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/offshore-web-hosting": {
      title: "Buy Best Cheap Offshore Web Hosting✰100% DMCA Ignored, Secure",
      description: "Get the most out of your website with our Best Cheap offshore web hosting. Enjoy reliability & privacy with NVMe SSD, Be Always Online no matter what, Save 10% on Annual Plans.",
      keyword: "",
      schema:  {
      "@context": "https://schema.org",
  "@type": "Product",
  "name": "OFFSHORE WEB HOSTING",
  "description": "Get the most out of your website with our Best Cheap offshore web hosting. Enjoy reliability & privacy with NVMe SSD, Be Always Online no matter what, Save 10% on Annual Plans.",
  "image": "https://qloudhost.com/assets/Frame/dmca-cheap-offshore-web-hosting.webp",
  "sku": "OFFSHORE WEB HOSTING",
  "mpn": "OFFSHORE WEB HOSTING",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/offshore-web-hosting",
    "priceCurrency": "USD",
    "lowPrice": "3.50",
    "highPrice": "9.09",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
}
      }  ,

    "/offshore-wordpress-hosting/": {
      title: "Buy Best Cheap Offshore WordPress Hosting✰ 100% DMCA Ignored",
      description: "Looking for fast and affordable Offshore WordPress hosting? Our secure, Privacy friendly offshore hosting service is your solution. Get #1 performance today!",
      keyword: "",
      schema:{
        "@context": "https://schema.org",
  "@type": "Product",
  "name": "OFFSHORE WORDPRESS HOSTING",
  "description": "Looking for fast and affordable Offshore WordPress hosting? Our secure, Privacy friendly offshore hosting service is your solution. Get #1 performance today!",
  "image": "https://qloudhost.com/assets/Frame/offshore-wordpress-hosting.webp",
  "sku": "OFFSHORE WORDPRESS HOSTING",
  "mpn": "OFFSHORE WORDPRESS HOSTING",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/offshore-wordpress-hosting/",
    "priceCurrency": "USD",
    "lowPrice": "4.39",
    "highPrice": "11.89",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },
    "/offshore-video-hosting/": {
      title: "Powerful Offshore Video Hosting - 100% DMCA Ignored Server",
      description: "To provide you with untraceable security and strong privacy protection offshore video hosting services are generally based on DMCA Ignored servers.",
      keyword: "",
      schema:{
        "@context": "https://schema.org",
  "@type": "Product",
  "name": "OFFSHORE VIDEO HOSTING",
  "description": "To provide you with untraceable security and strong privacy protection offshore video hosting services are generally based on DMCA Ignored servers.",
  "image": "https://qloudhost.com/assets/Frame/DMCA-Offshore-video-hosting.webp",
  "sku": "OFFSHORE VIDEO HOSTING",
  "mpn": "OFFSHORE VIDEO HOSTING",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "URL": "https://qloudhost.com/offshore-video-hosting/",
    "priceCurrency": "USD",
    "lowPrice": "129",
    "highPrice": "399",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },


    "/adult-hosting/": {
      title: "Cheap Adult Web Hosting✰Buy Adult VPS,Dedicated server",
      description: "Buy Powerful Adult Web Hosting Plans with QloudHost. Friendly control Panel, dedicated resources, unlimited bandwidth & Expert support for your Adult Website.",
      keyword: "",
      schema:{
      "@context": "https://schema.org",
  "@type": "Product",
  "name": "ADULT HOSTING",
  "description": "Get top-tier High Performace VPS hosting on AMD Epyc CPUs at just $18.99/mo. Fast, reliable, and perfect for demanding applications!",
  "image": "https://qloudhost.com/assets/Frame/high-performance-adult-vps-and-dedicated-server.webp",
  "sku": "ADULT HOSTING",
  "mpn": "ADULT HOSTING",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/adult-hosting/",
    "priceCurrency": "USD",
    "lowPrice": "18.99",
    "highPrice": "79.99",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/dmca-ignored-vps/": {
      title: "DMCA Ignored VPS Hosting✰ Fast Cheap 100% Offshore, Secure",
      description: "Best DMCA Ignored VPS Hosting Servers On A Budget! Performance, power, and flexibility is just a click away. complete protection against copyright complaints.",
      keyword: "",
      schema:{
       "@context": "https://schema.org",
  "@type": "Product",
  "name": "DMCA IGNORED VPS",
  "description": "Best DMCA Ignored VPS Hosting Servers On A Budget! Performance, power, and flexibility is just a click away. complete protection against copyright complaints.",
  "image": "https://qloudhost.com/assets/Frame/dmca-ignored-vps-hosting.webp",
  "sku": "DMCA IGNORED VPS",
  "mpn": "DMCA IGNORED VPS",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/dmca-ignored-vps/",
    "priceCurrency": "USD",
    "lowPrice": "18.99",
    "highPrice": "79.99",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/offshore-vps-hosting/netherlands/": {
      title: "Best Netherlands Offshore VPS Hosting▷ Fast & Cheap",
      description: "Looking for Best and Cheap Netherlands Offshore VPS hosting. Get lightning-fast reliable uptime and top-notch support for your website or app.",
      keyword: "",
      schema:
      {
      "@context": "https://schema.org",
  "@type": "Product",
  "name": "NETHERLANDS OFFSHORE VPS",
  "description": "Looking for Best and Cheap Netherlands Offshore VPS hosting. Get lightning-fast reliable uptime and top-notch support for your website or app.",
  "image": "https://qloudhost.com/assets/Frame/netherland-offshore-vps.webp",
  "sku": "NETHERLANDS OFFSHORE VPS",
  "mpn": "NETHERLANDS OFFSHORE VPS",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/offshore-vps-hosting/netherlands/",
    "priceCurrency": "USD",
    "lowPrice": "18.99",
    "highPrice": "79.99",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/high-performance-vps-hosting/": {
      title: "Buy Best High Performance VPS Hosting on AMD Epyc CPU $18.99/mo",
      description: "Get top-tier VPS hosting on AMD Epyc CPUs at just $18.99/mo. Fast, reliable, and perfect for demanding applications!",
      keyword: "",
      schema:{
       "@context": "https://schema.org",
  "@type": "Product",
  "name": "High-Performance VPS",
  "description": "Get top-tier High Performace VPS hosting on AMD Epyc CPUs at just $18.99/mo. Fast, reliable, and perfect for demanding applications!",
  "image": "https://qloudhost.com/assets/Frame/high-performance-vps-server.webp",
  "sku": "High-Performance VPS",
  "mpn": "High-Performance VPS",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/high-performance-vps-hosting/",
    "priceCurrency": "USD",
    "lowPrice": "18.99",
    "highPrice": "79.99",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/dmca-ignored-dedicated-servers/": {
      title: "DMCA Ignored Dedicated Servers | High 99.99% Uptime Rate",
      description: "Maximize your site’s potential with our DMCA Ignored Dedicated Server. Enjoy lightning-fast performance, NVMe SSD storage, and full root access for enhanced security.",
      keyword: "",
      schema:{
       "@context": "https://schema.org",
  "@type": "Product",
  "name": "DMCA IGNORED DEDICATED SERVER",
  "description": "Maximize your site’s potential with our DMCA Ignored Dedicated Server. Enjoy lightning-fast performance, NVMe SSD storage, and full root access for enhanced security.",
  "image": "https://qloudhost.com/assets/Frame/dmca-ignored-dedicated-server.webp",
  "sku": "DMCA IGNORED DEDICATED SERVER",
  "mpn": "DMCA IGNORED DEDICATED SERVER",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "URL": "https://qloudhost.com/dmca-ignored-dedicated-servers/",
    "priceCurrency": "USD",
    "lowPrice": "129",
    "highPrice": "399",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/offshore-dedicated-servers/russia/": {
      title: "Buy Russia Offshore Dedicated Server✰ NVMe SSD, Free setup",
      description: "Maximize your website’s speed & privacy with cheap Russia offshore dedicated servers. NVMe SSD Drive, DDoS Protection and 24*7 Support.",
      keyword: "",
      schema:{
        "@context": "https://schema.org",
  "@type": "Product",
  "name": "RUSSIA OFFSHORE DEDICATED SERVER",
  "description": "Maximize your website’s speed & privacy with cheap Russia offshore dedicated servers. NVMe SSD Drive, DDoS Protection and 24*7 Support.",
  "image": "https://qloudhost.com/assets/Frame/russia-offshore-dedicated-server.webp",
  "sku": "RUSSIA OFFSHORE DEDICATED SERVER",
  "mpn": "RUSSIA OFFSHORE DEDICATED SERVER",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/offshore-dedicated-servers/russia/",
    "priceCurrency": "USD",
    "lowPrice": "129",
    "highPrice": "399",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/offshore-dedicated-servers/netherlands/": {
      title: "Buy Netherlands Offshore Dedicated Server✰ NVMe SSD, Free setup",
      description: "Maximize your website’s speed & privacy with cheap Netherlands offshore dedicated server. NVMe SSD Drive, DDoS Protection and 24*7 Support.",
      keyword: "",
      schema:{
       "@context": "https://schema.org",
  "@type": "Product",
  "name": "NETHERLANDS OFFSHORE DEDICATED SERVER",
  "description": "Maximize your website’s speed & privacy with cheap Netherlands offshore dedicated server. NVMe SSD Drive, DDoS Protection and 24*7 Support.",
  "image": "https://qloudhost.com/assets/Frame/netherlands-offshore-dedicated-server.webp",
  "sku": "NETHERLANDS OFFSHORE DEDICATED SERVER",
  "mpn": "NETHERLANDS OFFSHORE DEDICATED SERVER",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "url": "https://qloudhost.com/offshore-dedicated-servers/netherlands/",
    "priceCurrency": "USD",
    "lowPrice": "129",
    "highPrice": "399",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/offshore-streaming-server/netherlands/": {
      title: "Offshore Streaming Servers | 100% DMCA Ignored NVMe SSD",
      description: "Experience fast and reliable streaming with our offshore streaming server. Get more powerful resources, full privacy, and a bufferless streaming experience.",
      keyword: "",
      schema:{
        "@context": "https://schema.org",
  "@type": "Product",
  "name": "NETHERLANDS OFFSHORE STREAMING SERVER",
  "description": "Experience fast and reliable streaming with our Netherlands Offshore streaming server. Get more powerful resources, full privacy, and a bufferless streaming experience.",
  "image": "https://qloudhost.com/assets/Frame/netherlands-streming-server.webp",
  "sku": "NETHERLANDS OFFSHORE STREAMING SERVER",
  "mpn": "NETHERLANDS OFFSHORE STREAMING SERVER",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "URL": "qloudhost.com/offshore-streaming-server/netherlands/",
    "priceCurrency": "USD",
    "lowPrice": "349",
    "highPrice": "399",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
    },

    "/offshore-vps-hosting/windows-rdp/": {
      title: "Offshore Windows VPS Hosting✰ 100% DMCA Ignored, NVMe SSD",
      description: "QloudHost offers best Cheap offshore windows VPS DMCA Ignored servers with 100% privacy protection,root access, 24*7 support.",
      keyword: "",
      schema:{
       "@context": "https://schema.org",
  "@type": "Product",
  "name": "OFFSHORE WINDOWS VPS RDP",
  "description": "QloudHost offers best Cheap offshore windows VPS DMCA Ignored servers with 100% privacy protection,root access, 24*7 support.",
  "image": "https://qloudhost.com/assets/Frame/robust-offshore-windows-vps-hosting.webp",
  "sku": "OFFSHORE WINDOWS VPS RDP",
  "mpn": "OFFSHORE WINDOWS VPS RDP",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "InStock",
    "priceValidUntil": "2025-12-31",
    "URL": "https://qloudhost.com/offshore-vps-hosting/windows-rdp/",
    "priceCurrency": "USD",
    "lowPrice": "18.99",
    "highPrice": "79.99",
    "offerCount": 2
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 79,
    "ratingValue": 4.9,
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Organization",
    "name": "QloudHost"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "QloudHost"
    }
  }
      }
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

    
  };

  const currentMetaTags = metaTagsData[location.pathname] || {};

  return (
    <Helmet>
    <link rel="canonical" href={`https://qloudhost.com${location.pathname}`} />
      <title>{currentMetaTags.title}</title>
      <meta name="description" content={currentMetaTags.description} />
      <meta name="keywords" content={currentMetaTags.keywords} />
      {currentMetaTags.schema && (
        <script type="application/ld+json">
          {JSON.stringify(currentMetaTags.schema)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;
