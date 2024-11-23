import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: 'Lightning Fast Website Speed',
    description: 'Can you imagine the results of the hardwares equipment? Yes, you will get lightning-fast website performance on the internet. In simple words, your website will load much faster than usual!',
  },
  {
    id: 2,
    title: '100% Privacy Protection',
    description: 'But only speed is enough? No, we understand. That’s why we provide 100% Privacy Protection to ensure you get full anonymity, all thanks to our security features that minimize your visibility on the internet.',
  },
  {
    id: 3,
    title: 'Dedicated Customer Service',
    description: 'But what if you are still stuck in your journey? No worries!! Our dedicated team of experts are 24*7 ready to support you and fix your problem or errors in no time!',
  },
];

const QloudHostGurantees = () => {
  return (
    <div className='paid-method-banner py-5'> {/* Set the background color to match the image */}
      <div className="container">
        <h2 className="text-center mb-3 m-auto">QloudHost Guarantees</h2>
        <p className="text-center mb-5">
        Boost your website performance with world-class <Link href='/offshore-dedicated-server/' className='faq-link'>offshore dedicated servers</Link> and guaranteed performance.
        </p>

        <div className='row mb-4'>
          {data.map((service) => (
            <div key={service.id} className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className='card-body about-gurantee'>
                  <div className="mb-3">
                    <span className='check-symbol'><FaRegCircleCheck className="me-2 option-icon" /></span> {/* Use a check icon */}
                  </div>
                  <h5 className='method-title mb-3'>{service.title}</h5>
                  <p className='card-method-text'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href='/'
                 
                  className="btn-primary  m-auto d-flex justify-content-center"
                >
                  <button className="btn-primary start-now-btn enterprise-btn me-3">
                    Get Started Now
                    <FaArrowRight className="ms-4 start-now-icon"/>
                  </button>
                </Link>
      </div>
    </div>
  );
}

export default QloudHostGurantees;
