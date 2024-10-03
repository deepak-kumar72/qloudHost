import React from 'react';
import './common.css'; // External CSS

const TechnicalSpecification = () => {
 
  const items = [
    'DirectAdmin Control Panel',
    'Softaculous Premium',
    'CloudLinux OS',
    'GD Graphics Library',
    'DirectAdmin Control Panel',
    'Softaculous Premium',
    'CloudLinux OS',
    'GD Graphics Library',
  
  ];



  // Duplicate the items array to create the infinite loop illusion
  const duplicatedItems = [...items, ...items];


  return (
    <div className="container-fluid">
      <div className="row justify-content-center text-center mb-4">
        <h2>Full Technical Specifications</h2>
        <p className='sub-heading'>From professional business to enterprise, we've got you covered!</p>
      </div>

      <div className="row">
        {/* First Carousel - Moves to the Left */}
        <div className="col-12 my-1">
          <div className="carousel-wrapper">
            <div className="carousel left">
              {duplicatedItems.map((item, index) => (
                <div key={index} className="item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Carousel - Moves to the Right */}
        <div className="col-12 my-1">
          <div className="carousel-wrapper carousel-right-slide">
            <div className="carousel right">
              {duplicatedItems.map((item, index) => (
                <div key={index} className="item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 my-1">
          <div className="carousel-wrapper">
            <div className="carousel left">
              {duplicatedItems.map((item, index) => (
                <div key={index} className="item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecification;
