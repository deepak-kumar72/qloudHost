import React from 'react';
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';
import '../commonComponent/common.css'


const ChatNow = () => {
    const handleTawkToggle = (e) => {
        e.preventDefault(); // Prevents default navigation behavior
        if (window.Tawk_API && typeof window.Tawk_API.toggle === 'function') {
          window.Tawk_API.toggle();
        }
      };

  return (
    <div className='py-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 chat-sec'>
            <h3>Get your hosting now!</h3>
            <p>Start your online journey with Best DMCA Ignored Hosting Company today!</p>

            </div>
            <div className='col-md-6 m-auto text-center'>
            <Link href="#" onClick={handleTawkToggle}>
                <button className='chat-now-btn start-now-btn me-3 '>
                    Chat Now <FaArrowRight className="ms-2" />
               

                </button>
                </Link>
                <Link
                  href='explore'
                  smooth={true}
                  duration={200}>
                <button className=' start-now-btn'>
                
                    Get Started <FaArrowRight className="ms-2" />
                
                </button>
                </Link>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default ChatNow;
