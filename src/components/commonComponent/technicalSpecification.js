import React from 'react';

const TechnicalSpecification = () => {
 
  const items = [
    'DirectAdmin Control Panel',
    'Softaculous Premium',
    'CloudLinux OS',
    'GD Graphics Library',
    'LiteSpeed Web Server',
    'Zend Guard Loader',
  ];

  const items2 = [

    'PHP Extension Manager',
    'Free Managed Migration',
  '  Unlimited DirectAdmin Support',
    '24/7/365 Support Coverage',
   ' Proactive Host Monitoring'
  ];

  const items3 =[
    'ionCube PHP Loader',
    'Subversion',
    'DNS Zone Editor',
    'Mail Exchange (MX) Editor',
    'Secure Shell (SSH) Access',

  ]

  // Duplicate the items array to create the infinite loop illusion
  const duplicatedItems = [...items, ...items, ...items];

  const duplicatedItems2 = [...items2, ...items2, ...items2];

  const duplicatedItems3 = [...items3, ...items3, ...items3, ...items3];


  return (
    <div className="container-fluid mb-4">
      <div className="row justify-content-center text-center mb-4">
        <h2>Full Technical Specifications</h2>
        <p className='sub-heading'>From professional business to enterprise, we have got you covered!</p>
      </div>

      <div className="row">
        {/* First Carousel - Moves to the Left */}
        <div className="col-12 my-2">
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
        <div className="col-12 my-2">
          <div className="carousel-wrapper carousel-right-slide">
            <div className="carousel right">
              {duplicatedItems3.map((item, index) => (
                <div key={index} className="item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 my-2">
          <div className="carousel-wrapper">
            <div className="carousel left">
              {duplicatedItems2.map((item, index) => (
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
