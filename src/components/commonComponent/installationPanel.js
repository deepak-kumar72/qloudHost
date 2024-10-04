
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const InstallationPanel = ({ title, description, buttonText, panelOptions, }) => {
  return (
    <div className='install-panel'>
    <div className="container py-5">
      <div className="row panel-sec m-auto">
        <div className="col-md-7 mb-4">
          <h2 className='mb-4 w-100'>{title}</h2>
          <p className='planHead-con w-100 mb-4'>{description}</p>
          <button variant="danger" className='start-now-btn'><Link to="">{buttonText} 
          <FaArrowRight className="ms-4"/></Link></button>
        </div>
        <div className="col-md-5">
          <div className="d-flex flex-column align-items-center gap-3 panel-item">
            {panelOptions.map((option, index) => (
              <button key={index}  size="lg" className=" panel-opt">
              <img src={option.img} alt='icon'/>
                {option.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InstallationPanel;
