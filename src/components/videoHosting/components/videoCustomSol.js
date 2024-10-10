import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const VideocustomSolution = () => {
  return (
    <div className='py-5 custom-sol mb-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-sm-12  customSol-text'>
            <h3 className='mb-4'>Need Custom Offshore
            Video Hosting Servers?</h3>
            <p>Need for Customized DMCA Ignored Offshore Dedicated Servers across your entire Organization. Enjoy unbeatable features, with Offshore Video Hosting for Adult, Tube, and Tutorial Sites and priority support.</p>

            </div>
            <div className='col-lg-4 col-sm-12 m-auto text-center'>
                <button className=' start-now-btn custom-sol-btn'>
                <Link to="">
                    Contact Us <FaArrowRight className="ms-2" />
                </Link>
                </button>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default VideocustomSolution;
