import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";


const RefundPolicies = ({data}) => {
  if (!data) {
    return <div></div>;
  }

  return (
    <div className="policies">
      <div className="container py-5">
        <div className="content-sec m-auto">
          <p>{data.refundPoliciesData.description}</p>
          <h4>Refund Terms</h4>
          <h5>
            Customers can cancel their services and get a refund but at certain
            conditions mentioned below.
          </h5>
          <ol className="content-sec-list">
            {data.refundPoliciesData.refundTerms.map((term, index) => (
              <li key={index}>
                <FaCheck className="me-2 content-opt" />
                {term}
              </li>
            ))}
          </ol>
          <h4>Products Available for Refund</h4>
          <ol className="content-sec-list">
            {data.refundPoliciesData.productsAvailableForRefund.map((product, index) => (
              <li key={index}>
                <FaCheck className="me-2 content-opt" />
                {product}
              </li>
            ))}
          </ol>
          <h4>Products Not Available for Refund</h4>
          <ol className="content-sec-list">
            {data.refundPoliciesData.productsNotAvailableForRefund.map((product, index) => (
              <li key={index}>
                <FaCheck className="me-2 content-opt" />
                {product}
              </li>
            ))}
          </ol>
          <h4>Products Not Associated with QloudHost Refund Policy</h4>
          <ol className="content-sec-list">
            {data.refundPoliciesData.productsNotAssociatedWithRefundPolicy.map((product, index) => (
              <li key={index}>
                <FaCheck className="me-2 content-opt" />
                {product}
              </li>
            ))}
          </ol>
          <h4>Refund Methods</h4>
          <ol className="content-sec-list">
            {data.refundPoliciesData.refundMethods.map((method, index) => (
              <li key={index}>
                <FaCheck className="me-2 content-opt" />
                {method}
              </li>
            ))}
          </ol>
          <h4>Customer Mode of Cancellation</h4>
          <p>
            You may cancel the services and get the refund only within the
            timeframe mentioned above.
          </p>
          <p>
            Customers can cancel the service or subscription via the mentioned
            modes:
          </p>
          <ol className="content-sec-list">
            {data.refundPoliciesData.cancellationModes.map((mode, index) => (
              <li key={index}>
                <FaCheck className="me-2 content-opt" />
                {mode}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicies;
