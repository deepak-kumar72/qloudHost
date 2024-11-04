import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
                <img src={feature.img} alt={feature.title} className='mb-3 qloudService-img'/>
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
                  to="#" 
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
        ))}
      </div>
    </div>
  );
};

export default QlodHostServices;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// const QlodHostServices = ({ heading, content, features }) => {
//   const [expandedFeatures, setExpandedFeatures] = useState(features.map(() => false));

//   const toggleFeature = (index) => {
//     setExpandedFeatures(prevState => 
//       prevState.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
//     );
//   };

//   return (
//     <div className="container my-5 qloudService-section">
//       <h2 className="text-center mb-3 m-auto">{heading}</h2>
//       <p className="text-center planHead-con m-auto mb-5">
//         {content}
//       </p>
//       <div className="row mt-4 w-85 justify-content-center">
//         {features.map((feature, index) => (
//           <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
//             <div className="card service-card-body">
//               <div className='p-3'>
//                 <img src={feature.img} alt={feature.title} className='mb-3 qloudService-img' />
//                 <div className='service-title mb-2'>{feature.title}</div>
//                 <div className='card-text service-text mb-3'>
//                   {/* Handle description as JSX or string */}
//                   {expandedFeatures[index] ? (
//                     feature.description // Render as is (JSX)
//                   ) : (
//                     // Render as a string if it's a string, or slice if it's a long string
//                     typeof feature.description === 'string'
//                       ? `${feature.description.slice(0, 100)}...`
//                       : feature.description // In case description is a JSX
//                   )}
//                 </div>
//                 <Link 
//                   to="#" 
//                   className="read-more" 
//                   onClick={(e) => {
//                     e.preventDefault();
//                     toggleFeature(index);
//                   }}
//                 >
//                   {expandedFeatures[index] ? (
//                     <>Read Less <IoIosArrowBack /></>
//                   ) : (
//                     <>Read More <IoIosArrowForward /></>
//                   )}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QlodHostServices;

