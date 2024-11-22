import React from 'react';
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FaPinterest } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Script from 'next/script';

const Footer = () => {
  const ourServices = [
    {
      title: "Our Services",
      links: [
        { name: "Offshore Web Hosting", href: "/offshore-web-hosting/" },
        { name: "Offshore WordPress Hosting", href: "/offshore-wordpress-hosting/" },
        { name: "Offshore VPS Hosting", href: "/offshore-vps-hosting/" },
        { name: "Offshore Dedicated Server", href: "/offshore-dedicated-servers/" },
        { name: "Offshore Video Hosting", href: "/offshore-video-hosting/" },
        { name: "Offshore Streaming Server", href: "/offshore-streaming-server/" },
        { name: "Adult Hosting", href: "/adult-hosting/" },
        { name: "DMCA Ignored VPS", href: "/dmca-ignored-vps/" },
        { name: "Netherlands Offshore VPS", href: "/offshore-vps-hosting/netherlands/" },
        { name: "High Performance VPS", href: "/high-performance-vps-hosting/" },
        { name: "DMCA Ignored Dedicated Servers", href: "/dmca-ignored-dedicated-servers/" },
        { name: "Offshore Windows RDP", href: "/offshore-vps-hosting/windows-rdp" },

      ],
    },
  ];

  const myAccount = [
    {
      title: "My Account",
      links: [
        { name: "Client Login", href: "https://my.qloudhost.com/login" },
        { name: "Create Account", href: "https://my.qloudhost.com/register.php" },
        { name: "Forget Password", href: "https://my.qloudhost.com/password/reset" },
      ],
    },
    {
      title: "My Account",
      links: [
        { name: "Become an affilliate", href: "https://my.qloudhost.com/register.php" },
        { name: "Affiliate Login", href: "https://my.qloudhost.com/login" },
        
      ],
    },
  ];

  const Policies = [
    {
      title: "Policies",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy/" },
        { name: "Terms of Service", href: "/terms/" },
        { name: "Fair Usage Policy", href: "/fair-usage-policy/" },
        { name: "Refund Policy", href: "/refund/" },
      ],
    },
  ];

  const ourCompany = [
    {
      title: "Company",
      links: [
        { name: "About QloudHost", href: "/about/" },
        { name: "Official Blog", href: "https://qloudhost.com/blog/" },
        { name: "Contact Us", href: "/contact-us/" },
        { name: "Sitemap", href: "https://qloudhost.com/sitemap.xml" },
        { name: "Abuse Report", href: "/report-abuse/" },
        { name: "Knowledge Base", href: "https://qloudhost.com/blog/knowledgebase/" },
        { name: "Speed Test", href: "https://lg-nl.defaultserver.net/" },
      ],
    },
  ];

  return (
    <footer className="text-light pt-5 footer-sec">
      <div className="container-fluid footer-menu-list ps-5 pe-1 ">
        <div className="row">
          {/* First Column with Social Media */}
          <div className="col-md-12 col-lg-3 mb-4">
            <Image src={"/assets/logo.svg"} alt='logo' className='mb-4 footer-logo' width={1000}
              height={1000}/>
            <p className='footer-con'>
              Host your website with the best Offshore hosting server at QloudHost and get full privacy assurance. We understand the value of your data privacy that’s why we provide you services with impenetrable security!
            </p>
            <div className='footer-icon'>
            <Link href="https://www.facebook.com/qloudhost"><FaFacebookF className='social-footer-icon'/></Link>
            <Link href='https://www.linkedin.com/company/qloudhost/'><FaLinkedinIn className='social-footer-icon'/></Link>
            <Link href="https://instagram.com/qloudhost"><FaInstagram className='social-footer-icon'/></Link>
            <Link href='https://www.pinterest.com/qloudhost/'><FaPinterest className='social-footer-icon'/></Link>

            {/* <Link href=""><FaYoutube className='social-footer-icon'/></Link> */}
            

            </div>

           
          </div>
          <div className='col-md-12 col-lg-9'>
          <div className='container-fluid '>
          <div className='row'>

          
          <div className="col-7 col-lg-4 mb-4">
            <h5 className='menu-head'>{ourServices[0].title}</h5>
            <ul className="list-unstyled">
              {ourServices[0].links.map((link, index) => (
                <li key={index}>
                {/* <Image src={maskgroup} alt='' className='me-1'/> */}
                  <Link  href={link.href} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-5 col-lg-3 mb-4">
            <h5 className='menu-head'>{myAccount[0].title}</h5>
            <ul className="list-unstyled">
              {myAccount[0].links.map((link, index) => (
                <li key={index} >
                {/* <Image src={maskgroup} alt='' className='me-1'/> */}
                  <Link href={link.href} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h5 className='menu-head mt-7'>{myAccount[1].title}</h5>
            <ul className="list-unstyled">
              {myAccount[1].links.map((link, index) => (
                <li key={index} >
                {/* <Image src={maskgroup} alt='' className='me-1'/> */}
                  <Link href={link.href} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>


          </div>

          <div className="col-7 col-lg-3 mb-4">
            <h5 className='menu-head'>{Policies[0].title}</h5>
            <ul className="list-unstyled">
              {Policies[0].links.map((link, index) => (
                <li key={index} >
                {/* <Image src={maskgroup} alt='' className='me-1 '/> */}
                  <Link href={link.href} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-5 col-lg-2 mb-4 px-0">
            <h5 className='menu-head'>{ourCompany[0].title}</h5>
            <ul className="list-unstyled">
              {ourCompany[0].links.map((link, index) => (
                <li key={index} >
                {/* <Image src={maskgroup} alt='' className='me-1'/> */}
                  <Link href={link.href} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
      <div className='bottom-footer'>
      <div className='container py-3 '>
        <div className='row'>
          <div className='col-lg-6  col-6 m-auto'>
          {/* <GTranslate/> */}
            <span className='copyrights'>© 2024 All Rights Reserved</span>
          </div>
          
          <div className='col-lg-6 col-12 pay-optionimg'>
            {/* <Image src='/assets/pay_img.png' alt='payment_option' width={1000}
              height={1000}/> */}
          </div>
        </div>
      </div>
      </div>
      
      <Script
        strategy="afterInteractive"
        src="https://embed.tawk.to/638476aeb0d6371309d17453/1giumv6vm"
      />

    </footer>
  );
};

export default Footer;
