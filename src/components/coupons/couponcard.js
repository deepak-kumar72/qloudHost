import React from 'react';
import Link from "next/link";

const CouponCard = ({ title, discount, description, subTitle, buttonText }) => {
    return (
        <div className="container coupon-card my-4 p-3 shadow-sm rounded-3 w-75" id='explore'>
      <div className="row g-0 ">
        <div className="col-md-4 coupon-code-sec">
        
        <span className="discount-badge text-dark mb-4">{discount}</span>
        <div className="text-center">
        <Link href="" >
              <button className="btn coupon-btn">{buttonText}</button>
              </Link></div>
        </div>
        <div className="col-md-8">
          <div className="coupon-body px-3">
            <h5 className="coupon-title">{title}</h5>
            <p className="coupon-subtitle">
              <strong>{subTitle}</strong>
            </p>
            <p className="card-description">{description}</p>
           
            
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default CouponCard;