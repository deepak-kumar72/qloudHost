import React from 'react';

const FFmpegTechnicalSpecification = () => {
 
  const items = [
    'KVM Virtualization',
    'AMD/Intel CPU',
    'NVMe SSD Storage',
    'DDR4 RAM',
    'Robust Bandwidth',
    'Latest OS',
  ];

  const items2 = [

    'Latest FFmpeg Version',
    'Robust Security',
  ' Full Root Access',
    'Instant Setup ',
   'Weekly Backup '
  ];

  const items3 =[
    'Scalibility',
    '24*7 Monitoring',
    'Powerful Data Center',
    'Untraceable Footprints',
    '24/7 Support',

  ]

  // Duplicate the items array to create the infinite loop illusion
  const duplicatedItems = [...items, ...items, ...items];

  const duplicatedItems2 = [...items2, ...items2, ...items2];

  const duplicatedItems3 = [...items3, ...items3, ...items3, ...items3];


  return (
    <div className="container-fluid mb-4">
      <div className="row justify-content-center text-center mb-4">
        <h2>Full Technical Specifications</h2>
        <p className='sub-heading'>From professional business to enterprise, we&apos;ve got you covered!</p>
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

export default FFmpegTechnicalSpecification;
