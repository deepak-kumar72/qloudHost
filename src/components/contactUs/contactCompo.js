import React from "react";
import Link from "next/link";

const ContactCompo = () => {
  return (
    <div className="intro-offer py-5">
      <div className="container">
        <div className="row text-center text-white d-flex align-items-center">
          <div className="col-12 col-md-4">
            <p className="signupBanner p-3">Sign Up for Offshore Hosting Today!</p>
          </div>
          <div className="col-6 col-md-4">
            <p className="mb-1 text-white fw-bold intro">Introductory Offer</p>
            <p className="intro-price">$3.50/mo*</p>
          </div>
          <div className="col-6 col-md-4">
            <Link href="/offshore-web-hosting/">
              <button class="contactSec-btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCompo;
