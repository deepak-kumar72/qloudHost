
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './common.css';


const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is DMCA ignore hosting?",
      answer: "We provide you with unhindered performance with 99.9% uptime guaranteed to ensure the maximum availability of your website."
    },
    {
      question: "Where are your servers based?",
      answer: "Our servers are strategically located to provide the best performance for your needs."
    },
    {
      question: "Which countries follow DMCA?",
      answer: "The countries where DMCA regulations apply include the United States and others adhering to similar laws."
    },
    {
      question: "How do you handle DMCA complaints?",
      answer: "Our team ensures that all DMCA complaints are handled in accordance with our privacy policies and legal obligations."
    },
    {
      question: "What is your Uptime Guarantee?",
      answer: "We guarantee a 99.9% uptime for all services hosted on our platform."
    },
  ];

  return (
    <div className='testimonial p-5'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-5 position-relative'>
    <h2 class="text-center mb-3 m-auto faq-heading">Frequently Asked Questions</h2>
    <div className='faq-header circle-3 position-absolute'></div>
    <div className='faq-header circle-2'></div>
    <div className='faq-header d-flex justify-content-center align-items-center z-1 position-relative'>
    <h2 >Frequently <br/> Asked <br/> Questions</h2>
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
            <div className="accordion-body">
              <p>{faq.answer}</p>
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

