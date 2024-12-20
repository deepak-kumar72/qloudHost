import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const FairUsagePolicies = ({data}) => {

  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div></div>;
  }

  return (
      <div className="policies">
        <div className="container py-5">
          <div className="content-sec m-auto">
            <p>{data.introduction}</p>
    
            <h5>{data.fairUsagePolicy.title}</h5>
            <ol className="content-sec-list">
              {data.fairUsagePolicy.activities.map((activity, index) => (
                <li key={index}>
                  <FaCheck className="me-2 content-opt" />
                  {activity}
                </li>
              ))}
            </ol>
    
            <h5>{data.fairUsagePolicy.otherRestrictionsTitle}</h5>
            <ol className="content-sec-list">
              {data.fairUsagePolicy.otherRestrictions.map((restriction, index) => (
                <li key={index}>
                  <FaCheck className="me-2 content-opt" />
                  {restriction}
                </li>
              ))}
            </ol>
    
            <p>{data.fairUsagePolicy.disclaimer}</p>
            <p>{data.fairUsagePolicy.violationWarning}</p>
          </div>
        </div>
      </div>    
  );
};

export default FairUsagePolicies;
