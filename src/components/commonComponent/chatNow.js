import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ChatNow = () => {
  return (
    <div className=''>
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
            <h3>Get your hosting now!</h3>
            <p>Start your online journey with Best DMCA Ignored Hosting Company today!</p>

            </div>
            <div className='col-6'>
                <button><Link to="">
                    Chat Now <FaArrowRight className="ms-2" />
                </Link>

                </button>
                <button>
                <Link to="">
                    Get Started <FaArrowRight className="ms-2" />
                </Link>
                </button>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default ChatNow;
