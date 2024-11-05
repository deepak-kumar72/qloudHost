import React from "react";
import { Link } from "react-router-dom";
import VpsPlan from "../../commonComponent/vpsPlan";


const HighPerformanceVpsPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
          Our High-Performance VPS Plans & Pricing
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
          The performance of your websites and applications is crucial. That’s
          why we offer next-generation high performance VPS hosting, perfect for
          businesses needing extra memory and processing power.
        </p>
        <VpsPlan/>
        {/* vps Plan Data */}

        
        <div className="text-center mt-3">
          <span className="consult">
            Looking for more power? Check our DMCA{" "}
            <Link to="" className=" fw-bold">
              Ignored OffShore Dedicated Server{" "}
            </Link>
            Plans
          </span>
        </div>
      </div>
    </div>
  );
};

export default HighPerformanceVpsPlan;
