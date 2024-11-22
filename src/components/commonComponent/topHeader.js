import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopHeader = () => {

  return (
    <div className="top-nav bg">
      <div className="container-fluid">
        <div className="row text-center p-2 top-content">
          <span>
            <Image  src="/assets/fireImage.png" alt="fire" className="me-2" width='15'
              height='15'/>
            Limited Time Black Friday + Cyber Monday Discount: 
            <Link href="/deals/black-friday-cyber-monday-web-hosting-deals/" className="link-light">
            Grab Deal NOW
            </Link>
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
