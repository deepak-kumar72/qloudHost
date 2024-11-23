import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const MoneyBack = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7 chat-sec">
            <h3>14-Day Money-Back Guarantee</h3>
            <p>
              Customer satisfaction is guaranteed! Get a hassle-free refund
              within 14 days if you’re not 100% happy with our service. Our
              seamless process ensures risk-free hosting.
            </p>
          </div>
          <div className="col-md-5 m-auto text-center">
            <Link href="/">
              <button className=" start-now-btn">
                Get Started Now
                <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyBack;
