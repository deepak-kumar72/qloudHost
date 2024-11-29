import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NeitherlandVpFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-md-6 mb-4 text-center">
            <Image src='/assets/feature/on-demand-scalibility.webp' alt="On-Demand Scalability" className="img-fluid"  width={1000} height={1000}/>
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2>On-Demand Scalability</h2>
            <p className="">
              Our VPS services are built on enterprise-level hardware, ensuring
              that your website operates at optimal performance levels.
            </p>
            <p className="">
              Combined with innovative software and tuning, your website will
              load faster, 24/7/365, improving your overall SEO score and global
              visibility.
            </p>
            <p className="">
              At any scale, we deliver high performance with our Netherlands
              Offshore VPS Server. With a single click, you can <Link href='/offshore-dedicated-server/' className="faq-link">upgrade</Link>  or
              downgrade your resources at any time.
            </p>
            <Link href="#explore" smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>

        <div className="row align-items-center mb-3">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <Image src='/assets/feature/migrate-fast-free.webp' alt="Migrate fast" className="img-fluid" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 order-md-1 feature-element-sec">
            <h2 className="mb-3 w-100">Migrate fast and free</h2>
            <p className="">
              Our Offshore Web Hosting experts will migrate all your Netherlands
              <Link href='/offshore-vps-hosting/' className="faq-link">Offshore VPS Hosting</Link> websites at a date and time that suits you
              best, free of charge. Your website will remain live during the
              transfer.
            </p>
            <p className="">
              There is nothing we require from you except for login details of
              your old web hosting, where we find your website data (website
              files or databases, emails, etc.).
            </p>
            <Link href="#explore" smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeitherlandVpFeatureElement;
