import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa";

const TermOfServices = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/terms.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading the JSON data:', error));
  }, []);

  if (!data) return <div>Loading...</div>;


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
