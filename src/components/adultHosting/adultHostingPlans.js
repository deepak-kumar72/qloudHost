import React from "react";
import Link from "next/link";
import VpsPlan from "../commonComponent/vpsPlan";

// Server-side data fetching using getServerSideProps
// export const getServerSideProps = async () => {
//   try {
//     const response = await fetch("https://qloudhost.com/data/adultHosting.json");
//     const data = await response.json();
//     return { props: { data } };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { props: { data: null } };
//   }
// };

const AdultHostingPlans = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
          {data.vpsPlan.title}
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
          {data.vpsPlan.description.map((part, idx) => {
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
          })}
        </p>
        
        <VpsPlan />

        <div className="text-center mt-3">
          <span className="consult">
            {data.vpsPlan.additionalText.map((part, idx) => {
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
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdultHostingPlans;
