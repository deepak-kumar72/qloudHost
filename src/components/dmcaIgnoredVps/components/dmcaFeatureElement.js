import React from "react";
import { FaArrowRight } from "react-icons/fa";
import images from "../../../constants/images";
import { Link as ScrollLink } from "react-scroll";

const DmcaFeatureElement = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-md-6 mb-4 text-center">
            <img src={images.privacyImg} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2>Your Privacy is Our Priority!</h2>
            <p className="">
              We Understand the value of your privacy and fundamental rights
              that’s why we enable you to make your online presence with
              untraceable footprints and impenetrable security. In addition, we
              provide you services based on offshore servers that let you be
              anonymous on the internet and guard your data against being
              tracked. So what are you waiting for? Get your offshore hosting
              today and protect your data privacy with industry-standard
              security!
            </p>
            <ScrollLink
              to="explore"
              smooth={true}
              duration={200}
              className="btn-primary"
            >
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </ScrollLink>
          </div>
        </div>

        <div className="row align-items-center mb-3">
          <div className="col-md-6 order-md-2 mb-3">
            <img src={images.hardwareImg} alt="" className="img-fluid" />
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
            <ScrollLink
              to="explore"
              smooth={true}
              duration={200}
              className="btn-primary"
            >
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DmcaFeatureElement;
