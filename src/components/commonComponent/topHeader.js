import React from 'react';
import './common.css';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className='top-nav bg'>
    <div className='container-fluid'>
    <div className='row text-center p-2 top-content'>
        <span><img src='/assets/fireImage.png' alt='fire' className='me-2'/>We regularly run promotions to save your money. <Link to="" className='link-light'>Get in touch</Link> with us to know what we have for you!</span>
    </div>
      
    </div>
    </div>
  )
}

export default TopHeader
