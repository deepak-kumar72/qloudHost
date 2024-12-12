import React from "react";
import Link from "next/link";
import VpsPlan from "../commonComponent/vpsPlan";




const OffshoreVpsPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
          Choose Offshore VPS server configuration that suits you
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
          Get unbeatable performance with our Best & Cheap offshore VPS Hosting
          Servers without paying any extra bucks! Pay only for what you use
        </p>

          <VpsPlan/>
        
        <div className="text-center mt-3">
          <span className="consult">
            Looking for more power? Check our DMCA Ignored
            <Link href="/offshore-dedicated-servers/" className=" fw-bold"> OffShore Dedicated Server
            </Link>
            Plans
          </span>
        </div>
      </div>
    </div>
  );
};

export default OffshoreVpsPlan;
