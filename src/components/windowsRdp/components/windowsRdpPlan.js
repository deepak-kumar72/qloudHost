import React from "react";
import Link from "next/link";
import VpsPlan from "../../commonComponent/vpsPlan";



const WindowsRdpPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
          Choose Offshore WordPress VPS plan that suits you.
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
          Choose from various Windows VPS configurations for a reliable and
          secure hosting environment.
        </p>

        <VpsPlan/>


        
        <div className="text-center mt-3">
          <span className="consult">
            Looking for more power? Check our DMCA Ignored
            <Link href="/offshore-dedicated-servers/" className=" fw-bold">
              
              OffShore Dedicated Server
            </Link>
            Plans
          </span>
        </div>
      </div>
    </div>
  );
};

export default WindowsRdpPlan;
