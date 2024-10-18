import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './common.css';

const FAQsSection = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='testimonial py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 position-relative text-center m-auto'>
            <h2 className="text-center mb-4 m-auto faq-heading">Frequently Asked Questions</h2>
            <div className='faq-header circle-3 position-absolute'></div>
            <div className='faq-header circle-2'></div>
            <div className='faq-header d-flex justify-content-center align-items-center z-1 position-relative'>
              <h2>Frequently <br /> Asked <br /> Questions</h2>
            </div>
          </div>
          <div className='col-md-7'>
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                  <div className="accordion-header d-flex justify-content-between" onClick={() => toggleAccordion(index)}>
                    <h3>{faq.question}</h3>
                    <span>
                      {activeIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="accordion-body faq-answer">


                      <p dangerouslySetInnerHTML={{ __html: faq.answer }} ></p>

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
