import React, { useState, useRef, useEffect } from 'react';

const Questions = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        if (idx === activeIndex) {
          // Opening: set height to scrollHeight and then auto for responsiveness
          ref.style.height = ref.scrollHeight + 'px';
          ref.style.opacity = 1;

          // Once the transition completes, set height to auto
          ref.addEventListener(
            'transitionend',
            () => {
              if (idx === activeIndex) {
                ref.style.height = 'auto';
              }
            },
            { once: true }
          );
        } else {
          // Closing: set height to the current scrollHeight, then to 0 for a smooth transition
          ref.style.height = ref.scrollHeight + 'px'; // Start at the current height
          ref.style.opacity = 0;

          // Trigger a reflow to apply the new height
          void ref.offsetHeight;

          // Now set the height to 0 for the closing animation
          ref.style.height = '0';
        }
      }
    });
  }, [activeIndex]);

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
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

