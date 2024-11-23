import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const DmcaFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-md-6 mb-4 text-center">
            <Image src='/assets/feature/your-privacy.webp' alt="Privacy" className="img-fluid" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2>Your Privacy is Our Priority!</h2>
            <p className="">
              We Understand the value of your privacy and fundamental rights
              that’s why we enable you to make your online presence with
              untraceable footprints and impenetrable security. In addition, we
              provide you services based on offshore servers that let you{" "}
              <Link
                href="https://qloudhost.com/blog/host-a-website-anonymously/"
                className="faq-link"
              >
                be anonymous on the internet
              </Link>
              be anonymous on the internet and guard your data against being
              tracked. So what are you waiting for? Get your offshore hosting
              today and protect your data privacy with industry-standard
              security!
            </p>
            <lLink
              href="explore"
              smooth={true}
              duration={200}
              className="btn-primary"
            >
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </lLink>
          </div>
        </div>

        <div className="row align-items-center mb-3">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <Image src='/assets/feature/super-performing.webp' alt="Super Performing" className="img-fluid" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 order-md-1 feature-element-sec">
            <h2 className="mb-3 w-100">
              Super Performing Enterprise-Grade Hardware
            </h2>
            <p className="">
              No matter! How heavy is your website. Experience lightning-fast
              performance with NVMe SSD storage and the most powerful hardware
              technology! Along with that, you will get multi-layered security
              to prevent any unauthorized access to your website.
            </p>
            <p className="">
              Our servers are equipped with a multi-threaded core processor that
              makes any type of website compatible with the servers.
            </p>
            <Link
              href="explore"
              smooth={true}
              duration={200}
              className="btn-primary"
            >
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

export default DmcaFeatureElement;
