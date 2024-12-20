import React from "react";
import Link from "next/link";

// Server-side data fetching using getServerSideProps
// export const getServerSideProps = async () => {
//   try {
//     const response = await fetch("https://yourdomain.com/data/reportAbuse.json"); // Adjust URL as needed
//     const data = await response.json();
//     return { props: { data } };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { props: { data: null } };
//   }
// };

const ReportAbusecon = ({ data }) => {
  // Fallback if no data is provided
  if (!data) {
    return <div></div>;
  }

  return (
    <div className="policies">
      <div className="container py-5">
        <div className="content-sec mx-auto">
          <p>
            We are fighting against malware, phishing, botnets, and all the other forms of malicious attacks from the day of our establishment and have developed certain measures and technologies to help you protect and prevent against such kinds of threats as much as possible. In addition, we have also collaborated with some security companies, independent experts, law enforcement agencies to ensure stronger security against these threats.
          </p>
          <p>
            Even though these kinds of threats are indispensable that’s why we have created a Report abuse form to get a solution as soon as possible.
          </p>
          <h2 className="mb-4">Types of Abuse</h2>
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
                {data.abusePolicy.map((abuse, index) => (
                  <tr key={index}>
                    <td data-label="Name:">{abuse.name}</td>
                    <td data-label="Description:">
                      {abuse.link ? (
                        <>
                          {abuse.description}{" "}
                          <Link href={abuse.link} className="faq-link">
                            (View Policy)
                          </Link>
                        </>
                      ) : (
                        abuse.description
                      )}
                    </td>
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
