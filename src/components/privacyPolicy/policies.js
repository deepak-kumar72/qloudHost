import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const Policies = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/privacyPolicy.json"); // Path to your JSON file in the public folder
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div></div>;
  }

  return (
    <div className="policies">
      <div className="container py-5">
        <div className="content-sec mx-auto">
          <p>{data.Policies.intro}</p>

          {data.Policies.sections.map((section, index) => (
            <div key={index}>
              <h4>{section.title}</h4>
              {section.content.map((content, contentIndex) => {
                if (Array.isArray(content)) {
                  return (
                    <ul key={contentIndex} className="content-sec-list">
                      {content.map((item, listItemIndex) => (
                        <li key={listItemIndex}>
                          <FaCheck className="me-2 content-opt" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (content.list) {
                  // Handle the 'list' key specifically
                  return (
                    <ul key={contentIndex} className="content-sec-list">
                      {content.list.map((item, listItemIndex) => (
                        <li key={listItemIndex}>
                          <FaCheck className="me-2 content-opt" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                } else {
                  return <p key={contentIndex}>{content}</p>;
                }
              })}
            </div>
          ))}
          <h4>{data.Policies.furtherInfo.title}</h4>
          <p>
            {data.Policies.furtherInfo.detail.map((part, idx) => {
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
        </div>
      </div>
    </div>
  );
};

export default Policies;
