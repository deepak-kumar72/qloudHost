import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../commonComponent/common.css'

const ChatNow = () => {
  return (
    <div className='p-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 chat-sec'>
            <h3>Get your hosting now!</h3>
            <p>Start your online journey with Best DMCA Ignored Hosting Company today!</p>

            </div>
            <div className='col-md-6 m-auto text-center'>
                <button className='chat-now-btn start-now-btn me-3 '><Link to="">
                    Chat Now <FaArrowRight className="ms-2" />
                </Link>

                </button>
                <button className=' start-now-btn'>
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
