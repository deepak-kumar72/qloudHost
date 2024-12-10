
import React from 'react';
import Link from "next/link";

import DedicatedPlan from '../../commonComponent/dedicatedPlan';

const DmcaDedicatedPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className=" plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">{data.dedicatedPlan.title}</h2>
      <p className="text-center mb-5 planHead-con m-auto">{data.dedicatedPlan.title}</p>
      
        <DedicatedPlan/>
        <div className="text-center mt-3">
          <span className="consult"> {data.vpsPlan.additionalText.map((part, idx) => {
            if (part.type === "text") {
              return <span key={idx}>{part.content}</span>;
            } else if (part.type === "link") {
              return (
                <Link key={idx} href={part.url} className="faq-link">
                  {part.content}
                </Link>
              );
            }
            return null;
          })}</span>
        </div>
      </div>
    </div>
  );
};

export default DmcaDedicatedPlan;

  