




import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


const QlodHostServices = ({ heading, content,features}) => {
  return (
    <div className="container my-5 qloudService-section">
      <h2 className="text-center mb-3 m-auto">{heading}</h2>
      <p className="text-center planHead-con m-auto mb-5">
      {content}
      </p>
      <div className="row mt-4 w-85">
        {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card service-card-body">
              <div className=' p-3'>
              <img src={feature.img} alt="" className='mb-3'/>
                <div className=' service-title mb-2'>{feature.title}</div>
                <div className='card-text service-text mb-3'>{feature.description}</div>
                <Link to={feature.link} className="read-more">
                  Read More <IoIosArrowForward /> 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QlodHostServices;
