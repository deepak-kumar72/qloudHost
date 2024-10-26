import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const ContactSupport = () => {
  return (
    <div className="contact-banner">
      <div className="container py-5">
        <h2 className="text-center mb-5 m-auto">
          For DMCA Ignored Offshore Hosting Support
        </h2>
        <div className="row gy-4 contact-container m-auto mb-5">
          <div className="col-12 col-md-6 col-lg-4 contact-method mb-3">
            <div className="con-support">
            <div><BiSupport className="support-icon"/></div>
              <h4>Technical Support</h4>
              <p className="mb-4">
                Get quick solutions to all your hosting concerns through our
                support chat or helpdesk.
              </p>
            
                <p className="mb-2">
                  <FaCheck className="me-2 content-opt" /> 24*7 Support
                </p><p className="mb-5">
                <Link to='' className="support-mail">
                  <FaCheck className="me-2 " />
                  support@qloudhost.com
                </Link></p><br/>

              <Link to="" className="contact-link">
                Submit Tcket
              </Link>
            </div>
          </div>


          <div className="col-12 col-md-6 col-lg-8 contact-method mb-3">
            <div className="container-fluid">
              <div className="row gy-4">
                <div className="col-12">
                  <div className="email-us">
                    <h4>Sales</h4>
                    <p className="mb-2">
                    <Link to="" className="support-mail">
                      support@qloudhost.com
                    </Link></p><br/>

                    <Link to="" className="contact-link">
                      Submit Tcket
                    </Link>
                   
                  </div>
                </div>


                <div className="col-6 contact-method mb-3">
                  <div className="con-billing">
                    <h4 className="mb-4">Contact Billing</h4>
                    
                    <Link to="" className="support-mail">
                    support@qloudhost.com
                    </Link>
                  </div>
                </div>



                <div className="col-6 contact-method mb-3">
                  <div className="live-chat">
                    <h4>Live Chat</h4>
                    <p className="mb-4">
                    Get expert support from our trained team via chat. Log in to your client area for technical help.
                    </p>
                    <Link to="" className="contact-link">
                      Live Chat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row looking-more">
          <div className="col-8">

            <div className="">
              <h3 className="text-white fw-bold">
              Looking for More
              </h3>
              <p className="text-white">Whatever your hosting needs, we've got the perfect solution! Explore our wide range of services and plans, and kickstart your Offshore DMCA Ignored Hosting Server journey with QloudHost today!</p>
              <Link to='' className="btn more-btn"> Get Started</Link>
            </div>
          </div>
          <div className="col-4">
            <img src="" alt="">

            </img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
