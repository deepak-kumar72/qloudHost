import React, { useState } from 'react';
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const QlodHostServices = ({ heading, content, features }) => {
  // const [expandedFeatures, setExpandedFeatures] = useState(features.map(() => false));

  // const toggleFeature = (index) => {
  //   setExpandedFeatures(prevState => 
  //     prevState.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
  //   );
  // };

  return (
    <div className="container my-5 qloudService-section">
      <h2 className="text-center mb-3 m-auto">{heading}</h2>
      <p className="text-center planHead-con m-auto mb-5">
        {content}
      </p>
      <div className="row mt-4 justify-content-center">
        {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card service-card-body">
              <div className='p-3'>
                <Image  src={feature.img} alt={feature.title} className='mb-3 qloudService-img' width={1000}
              height={1000}/>
              <div className='qloudservice-desc'>
                <div className='service-title mb-2'>{feature.title}</div>
                <div 
                  className='card-text service-text mb-3' 
                 
                />
                  {Array.isArray(feature.description) && feature.description.map((part, idx) => {
                      if (part.type === "text") {
                        return <span key={idx}>{part.content}</span>;
                      } else if (part.type === "link") {
                        return (
                          <Link key={idx} href={part.url} className="faq-link">
                            {part.content}
                          </Link>
                        );
                      } else if (part.type === "list") {
                        return (
                          <ul key={idx}>
                            {part.content.map((item, liIdx) => (
                              <li key={liIdx}>{item}</li>
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })}
                {/* <Link 
                  href="#" 
                  className="read-more" 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFeature(index);
                  }}
                >
                  {expandedFeatures[index] ? (
                    <>Read Less <IoIosArrowBack /></>
                  ) : (
                    <>Read More <IoIosArrowForward /></>
                  )}
                </Link> */}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QlodHostServices;

