import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CustomSolution = ({ solTitle, solText }) => {
  return (
    <div className="py-5 custom-sol mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12  customSol-text">
            <h3 className="mb-4">{solTitle}</h3>
            <p>{solText}</p>
          </div>
          <div className="col-lg-4 col-sm-12 m-auto text-center">
            <Link href="https://my.qloudhost.com/submitticket.php?step=2&deptid=2">
              <button className=" start-now-btn custom-sol-btn">
                Contact Us <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSolution;
