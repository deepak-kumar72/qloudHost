import React from 'react';
import { FaCheck } from "react-icons/fa";

// Server-side data fetching using getServerSideProps
// export const getServerSideProps = async () => {
//   try {
//     const response = await fetch("https://yourdomain.com/data/terms.json"); // Adjust URL as needed
//     const data = await response.json();
//     return { props: { data } };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { props: { data: null } };
//   }
// };

const TermOfServices = ({ data }) => {
  if (!data) return <div></div>;

  return (
    <div className="policies">
      <div className="container py-5">
        <div className="content-sec m-auto">
          <h4>({data.last_revision})</h4>
          <p>{data.introduction}</p>

          {data.sections.map((section, index) => (
            <div key={index}>
              <h4>{section.title}</h4>
              <p>{section.description}</p>
              {section.items && section.items.map((item, idx) => (
                <ul key={idx} className="content-sec-list">
                  <li>{item}</li>
                </ul>
              ))}
              {section.subsections && section.subsections.map((subsection, idx) => (
                <div key={idx}>
                  <h4>{subsection.title}</h4>
                  <p>{subsection.content}</p>
                  {subsection.items && subsection.items.map((item, i) => (
                    <ul key={i} className="content-sec-list">
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermOfServices;
