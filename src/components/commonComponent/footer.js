import React from 'react';
import logo from '../../assets/footerlogo.png';
import maskgroup from '../../assets/Maskgroup.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './common.css';
// import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  const ourServices = [
    {
      title: "Our Services",
      links: [
        { name: "Offshore Web Hosting", url: "/offshore-web-hosting/" },
        { name: "Offshore WordPress Hosting", url: "/offshore-wordpress-hosting/" },
        { name: "Offshore VPS Hosting", url: "/offshore-vps-hosting/" },
        { name: "Offshore Dedicated Server", url: "/offshore-dedicated-servers/" },
        { name: "Offshore Video Hosting", url: "/offshore-video-hosting/" },
        { name: "Offshore Streaming Server", url: "/streaming-server" },
        { name: "Adult Hosting", url: "/adult-hosting/" },
        { name: "DMCA Ignored VPS", url: "/dmca-ignored-vps/" },
        { name: "Netherlands Offshore VPS", url: "/offshore-vps-hosting/netherlands/" },
        { name: "High Performance VPS", url: "/high-performance-vps-hosting/" },
        { name: "DMCA Ignored Dedicated Servers", url: "/dmca-ignored-dedicated-servers/" },
        { name: "Russia Offshore Server", url: "/offshore-dedicated-servers/russia/" },

      ],
    },
  ];

  const myAccount = [
    {
      title: "My Account",
      links: [
        { name: "Client Login", url: "" },
        { name: "Create Account", url: "" },
        { name: "Forget Password", url: "" },
      ],
    },
    {
      title: "My Account",
      links: [
        { name: "Become an affilliate", url: "https://my.qloudhost.com/register.php" },
        { name: "Affiliate Login", url: "" },
        
      ],
    },
  ];

  const Policies = [
    {
      title: "Policies",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy/" },
        { name: "Terms of Service", url: "/terms/" },
        { name: "Fair Usage Policy", url: "/fair-usage-policy/" },
        { name: "Refund Policy", url: "/refund/" },
      ],
    },
  ];

  const ourCompany = [
    {
      title: "Company",
      links: [
        { name: "About QloudHost", url: "/about/" },
        { name: "Official Blog", url: "https://qloudhost.com/blog/" },
        { name: "Contact Us", url: "/contact-us/" },
        { name: "Sitemap", url: "" },
        { name: "Abuse Report", url: "/report-abuse/" },
        { name: "Knowledge Base", url: "https://qloudhost.com/blog/knowledgebase/" },
        { name: "Speed Test", url: "https://qloudhost.com/speed-test" },
      ],
    },
  ];

  return (
    <footer className="text-light pt-5 pb-4 footer-sec">
      <div className="container-fluid footer-menu-list px-5">
        <div className="row">
          {/* First Column with Social Media */}
          <div className="col-md-12 col-lg-3 mb-4">
            <img src={logo} alt='logo' className='mb-4'/>
            <p className='footer-con'>
              Host your website with the best Offshore hosting server at QloudHost and get full privacy assurance. We understand the value of your data privacy that’s why we provide you services with impenetrable security!
            </p>
            <div className='footer-icon'>
            <Link to=""><FaFacebookF className='social-footer-icon'/></Link>
            <Link to=""><FaTwitter className='social-footer-icon'/></Link>
            <Link to=""><FaInstagram className='social-footer-icon'/></Link>
            <Link to=""><FaYoutube className='social-footer-icon'/></Link>

            </div>
          </div>
          <div className='col-md-12 col-lg-9'>
          <div className='container-fluid '>
          <div className='row'>

          {/* Footer Links */}
          <div className="col-7 col-lg-4 mb-4">
            <h5 className='menu-head'>{ourServices[0].title}</h5>
            <ul className="list-unstyled">
              {ourServices[0].links.map((link, index) => (
                <li key={index}><img src={maskgroup} alt='' className='me-1'/>
                  <a href={link.url} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-5 col-lg-3 mb-4">
            <h5 className='menu-head'>{myAccount[0].title}</h5>
            <ul className="list-unstyled">
              {myAccount[0].links.map((link, index) => (
                <li key={index} ><img src={maskgroup} alt='' className='me-1'/>
                  <a href={link.url} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h5 className='menu-head mt-7'>{myAccount[1].title}</h5>
            <ul className="list-unstyled">
              {myAccount[1].links.map((link, index) => (
                <li key={index} ><img src={maskgroup} alt='' className='me-1'/>
                  <a href={link.url} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>


          </div>

          <div className="col-7 col-lg-2 mb-4">
            <h5 className='menu-head'>{Policies[0].title}</h5>
            <ul className="list-unstyled">
              {Policies[0].links.map((link, index) => (
                <li key={index} ><img src={maskgroup} alt='' className='me-1 '/>
                  <Link to={link.url} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-5 col-lg-3 mb-4">
            <h5 className='menu-head'>{ourCompany[0].title}</h5>
            <ul className="list-unstyled">
              {ourCompany[0].links.map((link, index) => (
                <li key={index} ><img src={maskgroup} alt='' className='me-1'/>
                  <a href={link.url} className="text-light text-decoration-none footer-menu">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
