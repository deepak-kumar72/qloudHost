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
            Save 15% on Offshore DMCA Ignored VPS + 1 Month Free on Annual VPS-<Link href="/dmca-ignored-vps/" className="link-light">
            Grab Now!
            </Link>{" "}
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
