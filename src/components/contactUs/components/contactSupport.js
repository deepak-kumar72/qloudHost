import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";



const ContactSupport = () => {
  const handleTawkToggle = (e) => {
    e.preventDefault(); // Prevents default navigation behavior
    if (window.Tawk_API && typeof window.Tawk_API.toggle === 'function') {
      window.Tawk_API.toggle();
    }
  };
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
                </p><p className="mb-5 support-mail">
                
                  <FaCheck className="me-2 " />
                  support@qloudhost.com
               </p><br/>

              <Link href="https://my.qloudhost.com/submitticket.php?step=2&deptid=2" className="contact-link">
                Submit Tcket
              </Link>
            </div>
          </div>


          <div className="col-12 col-md-6 col-lg-8 contact-method mb-3">
            <div className="container-fluid">
              <div className="row gy-4">
                <div className="col-12 mb-4 d-flex">
                <div className="email-us d-flex justify-content-between w-100">
                  <div className="">
                    <h4>Sales</h4>
                    <p className="mb-2 support-mail">
                    
                      support@qloudhost.com
                    </p><br/>

                    <Link href="#" onClick={handleTawkToggle} className="contact-link">
                      Connect with Sale #
                    </Link>
                   
                  </div>
                  <div>
                    <Image src='/assets/sales.svg' alt="sales" className="w-75 h-100" width={1000} height={1000}/>
                  </div>
                  </div>
                </div>
                </div>
                <div className="row">


                <div className="col-12 col-lg-6 contact-method mb-3">
                  <div className="con-billing">
                    <h4 className="mb-4">Contact Billing</h4>
                    
                    <p className="mb-2 support-mail">
                    
                      support@qloudhost.com
                    </p>
                  </div>
                </div>



                <div className="col-12 col-lg-6 contact-method mb-3">
                  <div className="live-chat">
                    <h4>Live Chat</h4>
                    <p className="mb-4">
                    Get expert support from our trained team via chat. Log in to your client area for technical help.
                    </p>
                    <Link href="#" onClick={handleTawkToggle} className="contact-link">
                      Live Chat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row looking-more">
          <div className="col-md-8">

            <div className="">
              <h3 className=" fw-bold">
              Looking for More
              </h3>
              <p className="">Whatever your hosting needs, we&apos;ve got the perfect solution! Explore our wide range of services and plans, and kickstart your Offshore DMCA Ignored Hosting Server journey with QloudHost today!</p>
              <Link href='/about/' className="btn more-btn"> Get Started</Link>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <Image src='/assets/looking-for-more.svg' alt="looking more" className="w-75 h-100" width={1000} height={1000}/>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
