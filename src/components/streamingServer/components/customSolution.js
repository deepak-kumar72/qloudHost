import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../streaming.css';

const CustomSolution = () => {
  return (
    <div className='py-5 custom-sol mb-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-sm-12  customSol-text'>
            <h3 className='mb-4'>Need Custom Solution
            Media Streaming Offshore Servers</h3>
            <p>Server solutions that scale with your business to deliver exceptional performance on even the most demanding Streaming, IPTV media streaming projects.</p>

            </div>
            <div className='col-lg-4 col-sm-12 m-auto text-center'>
                <button className=' start-now-btn custom-sol-btn'>
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

export default CustomSolution;
