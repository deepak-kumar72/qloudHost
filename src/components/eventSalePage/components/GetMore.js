import React from 'react';
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

const GetMore = () => {

  return (
    <div className='py-5 dealsbBottomSec'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 chat-sec'>
            <h3>Get More with QloudHost Hosting Deals</h3>
        

            </div>
            <div className='col-md-6 m-auto text-center'>
            <Link href="/affiliates/" >
                <button className='start-now-btn'>
                Refer and get $50/Sale <FaArrowRight className="ms-2" />
               

                </button>
                </Link>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default GetMore;
