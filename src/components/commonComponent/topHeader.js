import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TopHeader = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/home.json"); // Fetch from public folder
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
    <div className="top-nav bg">
      <div className="container-fluid">
        <div className="row text-center p-2 top-content">
          <span>
            <Image  src="/assets/fireImage.png" alt="fire" className="me-2" width='15'
              height='15'/>
                {Array.isArray(data.topHeader.description) && data.topHeader.description.map((part, idx) => {
                      if (part.type === "text") {
                        return <span key={idx}>{part.content}</span>;
                      } else if (part.type === "link") {
                        return (
                          <Link key={idx} href={part.url} className="link-light">
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

export default TopHeader;
