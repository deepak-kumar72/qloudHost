import React from "react";
import { FaCheck } from "react-icons/fa";

const FairUsagePolicies = () => {
  return (
    <div className="policies">
    <div className="container py-5">
      <div className="content-sec m-auto">
        <p>
          Our primary goal is to protect your privacy and maintain your freedom
          of speech, with an expectation that the customers will respect our
          dignity by not violating our Terms of Service and all the policies.
          QloudHost reserves the right to modify all the policies that relate to
          our products and services. The use of products and services means that
          the customer agrees with all the terms, conditions and policies, which
          will not be violated in any case.
        </p>
        <h5>Our fair usage policy restricts you to the following activities:</h5>
        <ol className="content-sec-list">
          <li><FaCheck className="me-2 content-opt"/>Adult content involving real violence.</li>
          <li><FaCheck className="me-2 content-opt"/>
            Any content that includes violence on animals ( any creatures )
          </li>
          <li><FaCheck className="me-2 content-opt"/>Child pornography</li>
          <li><FaCheck className="me-2 content-opt"/>Any explicit content that involves underage nudity.</li>
        </ol>
        <h5>
          Other than the adult website, we restrict the following activities:
        </h5>
        <ol className="content-sec-list">
          <li><FaCheck className="me-2 content-opt"/>Ponzi scheme based websites</li>
          <li><FaCheck className="me-2 content-opt"/>Scamming websites</li>
          <li><FaCheck className="me-2 content-opt"/>Pharmaceutical websites without an appropriate license</li>
          <li><FaCheck className="me-2 content-opt"/>Mass mailing websites</li>
          <li><FaCheck className="me-2 content-opt"/>Phishing websites</li>
          <li><FaCheck className="me-2 content-opt"/>Proxy or reverse websites</li>
          <li><FaCheck className="me-2 content-opt"/>Illegal product-containing websites</li>
          <li><FaCheck className="me-2 content-opt"/>Botnet controllers or involved websites</li>
          <li><FaCheck className="me-2 content-opt"/>Sites containing any malicious links</li>
          <li><FaCheck className="me-2 content-opt"/>DDoS attack-abled websites</li>
          <li><FaCheck className="me-2 content-opt"/>Trojan-containing websites</li>
          <li><FaCheck className="me-2 content-opt"/>Malicious Script containers</li>
          <li><FaCheck className="me-2 content-opt"/>Any act of terrorism via a website</li>
          <li><FaCheck className="me-2 content-opt"/>Vulnerability scanners</li>
          <li><FaCheck className="me-2 content-opt"/>SIP scanners</li>
          <li><FaCheck className="me-2 content-opt"/>Any forex related websites</li>
          <li><FaCheck className="me-2 content-opt"/>Sales, distribution or promotion of pirated products</li>
          <li><FaCheck className="me-2 content-opt"/>Password guessing bots, tools or any kind of generators</li>
          <li><FaCheck className="me-2 content-opt"/>Any activity that led to your IP block</li>
          <li><FaCheck className="me-2 content-opt"/>IP spoofing tools containers</li>
          <li><FaCheck className="me-2 content-opt"/>Any other activities that violates our any policy</li>
        </ol>
        <p>
          Usage of our services means the customer agrees to all the points
          mentioned in all the policies and QloudHost will be not liable in any
          case if the customer has used our services without carefully reading
          our policies.
        </p>
        <p>
          If the customer violates any of the either above mentioned points or
          any point mentioned in the other policies then it will be considered
          as illegal and can directly cause account/service termination.
        </p>
      </div>
    </div>
    </div>
  );
};

export default FairUsagePolicies;
