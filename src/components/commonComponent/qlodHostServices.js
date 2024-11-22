import React, { useState } from 'react';
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const QlodHostServices = ({ heading, content, features }) => {
  const [expandedFeatures, setExpandedFeatures] = useState(features.map(() => false));

  const toggleFeature = (index) => {
    setExpandedFeatures(prevState => 
      prevState.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  return (
    <div className="container my-5 qloudService-section">
      <h2 className="text-center mb-3 m-auto">{heading}</h2>
      <p className="text-center planHead-con m-auto mb-5">
        {content}
      </p>
      <div className="row mt-4 w-85 justify-content-center">
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
                  dangerouslySetInnerHTML={{
                    __html: expandedFeatures[index]
                      ? feature.description
                      : `${typeof feature.description === 'string' ? feature.description.slice(0, 140) : ''}...`
                  }}
                />
                <Link 
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
                </Link>
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

