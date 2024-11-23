import React from "react";
import Link from "next/link";

const ReportAbusecon = () => {
  const abuseTypes = [
    {
      name: "Phishing",
      description:
        "Phishing is one of the most common threats that every website is prone to. Usually, it consists of a fake page pretending to be a genuine page.",
      infoRequired: "Share the full live page URL",
      email: "support@qloudhost.com",
    },
    {
      name: "Privacy concerns",
      description:
        <>You can go through the <Link href='/privacy-policy/' className='faq-link'>privacy policy</Link> to verify the privacy concerns.</>,
      infoRequired: "Share the full live page URL",
      email: "support@qloudhost.com",
    },
    {
      name: "Spam",
      description:
        "Mistrustful or unexpected emails, text or SMS are considered as spam or fraud.",
      infoRequired: "Forward the copy of email, text or SMS",
      email: "Abuse report form",
    },
    {
      name: "Malware",
      description:
        "Malware is software that can cause immediate disruption into your computer, server, client or network.",
      infoRequired: "Share the live page URL",
      email: "Abuse report form",
    },
    {
      name: "Copyright complaints",
      description: "Our services, products, and content.",
      infoRequired: "Share the live page URL",
      email: "support@qloudhost.com",
    },
    {
      name: "Account changes",
      description:
        "We suggest you to read the terms of services that may be causing certain changes.",
      infoRequired: "Share the live page URL",
      email: "support@qloudhost.com",
    },
    {
      name: "Content complaints",
      description:
        "Our services do not allow you to post abusive content such as child pornography, disturbing adult content, or any illicit content.",
      infoRequired: "Share the live page URL",
      email: "Abuse report form",
    },
  ];

  return (
    <div className="policies">
    <div className="container py-5">
    <div className="content-sec mx-auto">
      <p>
        We are fighting against malware, phishing, botnets, and all the other
        forms of malicious attacks from the day of our establishment and have
        developed certain measures and technologies to help you protect and
        prevent against such kinds of threats as much as possible. In addition,
        we have also collaborated with some security companies, independent
        experts, law enforcement agencies to ensure stronger security against
        these threats.
      </p>
      <p>
        Even though these kinds of threats are indispensable that’s why we have
        created a Report abuse form to get a solution as soon as possible.
      </p>
      <h2 className=" mb-4">Types of Abuse</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Information Required</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
  {abuseTypes.map((abuse, index) => (
    <tr key={index}>
      <td data-label="Name:">{abuse.name}</td>
      <td data-label="Description:">{abuse.description}</td>
      <td data-label="Information Required:">{abuse.infoRequired}</td>
      <td data-label="Email:">{abuse.email}</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ReportAbusecon;
