import React from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const Policies = () => {
  return (
  <div className="policies">
    <div className="container  py-5">
    <div className="content-sec mx-auto">
      <p>
        QloudHost respects your privacy and is committed to ensure that you get
        a safe and secure online experience. And this privacy policy applies to
        all our web products to make sure that you get to experience reliable
        services.
      </p>
      
      
      <h4>Personal identification information</h4>
      <p>
        Use of QloudHost services includes the acceptance of our privacy policy
        that you are allowing us to collect some of your identifiable data, such
        as your Email address and phone number. In addition, we may also collect
        some of the demographic-related information that may not be unique to
        you, such as your postcode, age, gender and some unique information.{" "}
      </p>
      <p>
        We will collect such information only when the users voluntarily submit
        the details, which means users can refuse to submit the information on
        the website.
      </p>
      <p>
        For non-personal information, we may collect limited data such as the
        browser name, IP address, type of computer, and other technical-related
        data whenever a user interacts with our website.
      </p>
      
     
      <h4>Use and disclosure of your information</h4>
      <p>
        We will collect and use our user information for the following purposes:{" "}
      </p>
      <ul className="content-sec-list">
        <li><FaCheck className="me-2 content-opt"/>To improve our operations.</li>
        <li><FaCheck className="me-2 content-opt"/>Deliver the product and services.</li>
        <li><FaCheck className="me-2 content-opt"/>Communicate with the user.</li>
        <li><FaCheck className="me-2 content-opt"/>Improve the quality of our products</li>
        <li><FaCheck className="me-2 content-opt"/>Get more reach through you.</li>
        <li><FaCheck className="me-2 content-opt"/>To perform surveys and promotions.</li>
        <li><FaCheck className="me-2 content-opt"/>Deal with your enquiry and complaints, request and tickets.</li>
        <li><FaCheck className="me-2 content-opt"/>Conduct research and development.</li>
        <li><FaCheck className="me-2 content-opt"/>Process your refund and payments.</li>
        <li><FaCheck className="me-2 content-opt"/>To maintain processing, invoicing, products and services.</li>
      </ul>
      
      
      <h4>Assurance of your privacy</h4>
      <p>
        We use the appropriate measures to collect, process, practise and
        protect your data against unauthorized access, alteration or any
        disclosure of personal data. In addition, from our side, there is no
        data leak, making it really tough to trace you back on the internet.
      </p>
      <p>
        Our websites and networks are completely secure with industry-standard
        encryptions or SSL certificates to make sure that you get secured
        network communication.
      </p>
      
      
      <h4>Further Information</h4>
      <p>
        If the user wishes to access the details about the respective data we
        have stored or believes that we may not have adhered to our own policies
        by violating its right to privacy, in that case the user can immediately
        contact our team at <Link href='' className="faqp-link"> support@qloudhost.com</Link> and find a solution regarding
        its concerns.
      </p>
      </div>
      </div>
      </div>

    
  );
};

export default Policies;
