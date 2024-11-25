import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const WordpressFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-3">
          <div className="col-md-6 mb-4 text-center">
            <Image
              src='/assets/feature/free-anf-effortless.webp'
              alt=" Free & Effortless WordPress Migration"
              className="img-fluid m-auto"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2 className="w-100 mb-3">
              Free & Effortless WordPress Migration
            </h2>
            <p className="">
              Our Web Hosting experts will migrate all your Offshore WordPress
              websites at a date and time that suits you best, free of charge.
              Your website will remain live during the transfer.T here is
              nothing we require from you except for login details of your old
              web hosting, where we find your website data (website files or
              databases, emails, etc.).{" "}
            </p>
            <Link href="https://my.qloudhost.com/submitticket.php?step=2&amp;deptid=2">
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="row align-items-center mb-3">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <Image src='/assets/feature/direct-admin_2.webp' alt="DirectAdmin and Softaculous" className="img-fluid" loading="lazy" width={1000}
              height={1000}/>
          </div>
          <div className="col-md-6 order-md-1 feature-element-sec">
            <h2 className="mb-3 w-100">DirectAdmin and Softaculous</h2>
            <p className="">
              No matter how tech-savvy you are, DirectAdmin provides you with
              everything you require to run your site like a pro. We’ve
              partnered with the Softaculous auto-installer that allows an easy
              installation of hundreds of web-based applications such as
              WordPress, Joomla and many more.
            </p>
            {/* <button className="btn start-now-btn mt-3">
          <Link href="">
            Get Started Now <FaArrowRight className="ms-2" />
            </Link>
          </button> */}
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-6 mb-4 text-center">
            <Image
              src='/assets/feature/wordpress-pre-install.webp'
              alt="WordPress Pre-Install & Free SSL Certificates"
              className="img-fluid m-auto"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2 className="w-100 mb-3">
              WordPress Pre-Install & Free SSL Certificates
            </h2>
            <p className="">
              WordPress is a popular website platform that allows users to
              create and manage websites with ease. With pre-installation, the
              setup process is made even easier as it eliminates the need for
              manual installation
            </p>
            <p className="">
              Furthermore, QloudHost offshore WordPress hosting plans comes with
              free SSL (AutoSSL) with our no-cost SSL, your information remains
              secure and safe.
            </p>
            {/* <button className="btn start-now-btn mt-3">
          <Link href="">
            Get Started Now <FaArrowRight className="ms-2" />
            </Link>
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressFeatureElement;
