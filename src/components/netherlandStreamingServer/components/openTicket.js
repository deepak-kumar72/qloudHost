import React from 'react';
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

const OpenTicket = () => {
  return (
    <div className='py-5 custom-sol mb-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-sm-12  customSol-text'>
            <h3 className='mb-4'>Find the best Dutch Streaming servers for your needs</h3>
            <p>Need Custom Server solutions that scale with your business to Next-level deliver exceptional performance on even the most demanding Streaming, IPTV media streaming projects.</p>
            </div>
            <div className='col-lg-4 col-sm-12 m-auto text-center'>
            <Link href="https://my.qloudhost.com/submitticket.php?step=2&deptid=2"><button className=' start-now-btn custom-sol-btn'>   
                    Open Ticket <FaArrowRight className="ms-2" />
                </button></Link>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default OpenTicket;