import React from "react";
import './common.css';



const FAQsSection = () => {

    const faqData = [
        {
          question: 'What is DMCA ignore hosting?',
          answer: 'We provide you with unhindered performance with 99.9% uptime guaranteed to ensure the maximum availability of your website.',
        },
        {
          question: 'Where are your servers based?',
          answer: 'Our servers are based in secure data centers around the globe to provide you with the best hosting services.',
        },
        {
          question: 'Which countries follow DMCA?',
          answer: 'DMCA regulations are followed in many countries, primarily in the United States and other developed regions.',
        },
        {
          question: 'How do you handle DMCA complaints?',
          answer: 'We handle DMCA complaints by carefully reviewing them and taking appropriate action based on the claim and the legal requirements.',
        },
        {
          question: 'What is your Uptime Guarantee?',
          answer: 'We provide a 99.9% uptime guarantee to ensure your website remains available to users at all times.',
        },
      ];
    
      return (
        <div className="container mt-5">
          <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqData.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default FAQsSection;
