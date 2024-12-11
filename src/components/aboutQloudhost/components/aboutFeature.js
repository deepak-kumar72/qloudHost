import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const AboutFeatures = () => {
  const [data, setData] = useState(null); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/about.json"); // Fetch from public folder
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
    return <div>Loading...</div>;
  }

  const { section } = data;

  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              className="img-fluid"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-md-6 about-sec">
            <h2>{section.heading}</h2>
            <h4 className="mb-3 w-100">{section.subheading}</h4>
            {section.paragraphs.map((paragraph, pIdx) => (
              <p key={pIdx}>
                {paragraph.content.map((part, idx) => {
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
