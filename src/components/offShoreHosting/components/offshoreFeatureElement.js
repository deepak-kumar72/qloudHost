import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";


const OffshoreFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <Image src='/assets/feature/simple-affordable.webp' alt="Simple, Affordable, Hosting You Can Trust" className="img-fluid m-auto" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2 className='w-100 mb-3'>Simple, Affordable, Hosting You Can Trust</h2>
            <p className="">
              QloudHost makes offshore web hosting easy! You can expect to exceed your performance expectations with our Fastest Nvme SSD servers, unmetered bandwidth, and other features.
              <br /> <br /> 
              All this at a price you will love – get any shared server up and running in under a minute with QloudHost!
            </p>
            <Link href="#explore">
            <button className="btn start-now-btn mt-3">
              
                Get Started Now <FaArrowRight className="ms-2" />
              
            </button>
            </Link>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <Image src='/assets/feature/make-your-website.webp' alt="Make Your Website Faster with LiteSpeed" className="img-fluid" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 order-md-1 feature-element-sec">
            <h2 className='mb-3 w-100'>Make Your Website Faster with LiteSpeed</h2>
            <p className="">
              Website Speed is a key factor for growing your site in terms of web visitors, purchase orders, user experience, and SEO.
            </p>
            <p className="">
              QloudHost Offshore web hosting solutions make it possible for your website to run on the LiteSpeed Web server. This makes it fast and easy to access.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <Image src='/assets/feature/free-migration.webp' alt="Free Migration Services" className="img-fluid m-auto" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2 className='w-100 mb-3'>Free Migration Services</h2>
            <p className="">
              Your website can now be moved for free to QloudHost! <Link href="/contact-us/" className='faq-link'>Our staff</Link> will provide you with a personalized service.
            </p>
            <p className="">
              Our staff will provide personalized service to you with minimal disruption to your website or email services. Everything related to your site is perfectly replicated, reinstalled and reconfigured on the new server.
            </p><Link href="https://my.qloudhost.com/submitticket.php?step=2&deptid=2">
            <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffshoreFeatureElement;
