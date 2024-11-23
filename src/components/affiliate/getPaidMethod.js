import React from 'react';
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';
import { FaRegCircleCheck } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Click Here and fill up your details.',
  },
  {
    id: 2,
    title: 'Promote QloudHost',
    description: 'Get the referral links and promote our services to your audience.',
  },
  {
    id: 3,
    title: 'Get Paid',
    description: 'We share revenue fairly. Every eligible sale made earns you at least 20% commissions. And that’s just the start.',
  },
];

const GetPaidMethod = () => {
  return (
    <div className='paid-method-banner py-5'> {/* Set the background color to match the image */}
      <div className="container">
        <h2 className="text-center mb-3 m-auto">Steps For Your Income</h2>
        <p className="text-center mb-5">
          Follow the mentioned guide and get your first income today!
        </p>

        <div className='row' id='#explore'>
          {data.map((service) => (
            <div key={service.id} className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className='card-body'>
                  <div className="mb-3">
                    <span className='check-symbol'><FaRegCircleCheck className="me-2 option-icon" /></span> {/* Use a check icon */}
                  </div>
                  <h5 className='method-title'>{service.title}</h5>
                  <p className='card-method-text'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signup Button */}
        <div className="mt-4 text-center">
          <Link href="https://my.qloudhost.com/register.php" className="btn start-now-btn ">
            Signup Now <FaArrowRight className="ms-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetPaidMethod;
