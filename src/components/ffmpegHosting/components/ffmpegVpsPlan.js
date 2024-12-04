import React from "react";
import Link from "next/link";
import VpsPlan from "../../commonComponent/vpsPlan";


const FFmpegVpsPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
        Pick the Best FFmpeg Hosting for You!
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
        Get top performance with Affordable FFmpeg Hosting! Pay only for what you use—no hidden costs, just reliable, optimized hosting for all your multimedia needs.
        </p>
        <VpsPlan/>
        {/* vps Plan Data */}

        
        <div className="text-center mt-3">
          <span className="consult">
          Looking for more power? Check our
            <Link href="/offshore-dedicated-servers/" className=" fw-bold">  Dedicated FFmpeg Server </Link> Plans
          </span>
        </div>
      </div>
    </div>
  );
};

export default FFmpegVpsPlan;
