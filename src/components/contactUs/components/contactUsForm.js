import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import '../contactUs.css';

const ContactUsForm = () => {


    return (
        <div className="container mt-5">
            <div className="row w-75 mx-auto  mb-5">
                
                <div className="col-md-6 contact-section">
                    <h5 className='mb-4'>Contact Us</h5>
                    <p>For any inquiries please email</p>
                  <h3>Mail: <Link to=''>support@qloudhost.com</Link></h3>
                  <h3 className='mb-4'>Contact Support: <Link to='https://my.qloudhost.com/submitticket.php?step=2&deptid=2'>Submit Ticket</Link></h3>
                  <div><Link to='https://www.facebook.com/qloudhost'><FaFacebookF className='contact-icon me-3'/></Link>
                  <Link to='https://www.linkedin.com/company/qloudhost/'><FaLinkedinIn className='contact-icon me-3'/></Link>
                  <Link to='https://www.reddit.com/user/qloudhost'><FaRedditAlien className='contact-icon me-3'/></Link>
                  <Link to='https://instagram.com/qloudhost'><FaInstagram className='contact-icon me-3'/></Link>
                  <Link to='https://www.pinterest.com/qloudhost/'><FaPinterest className='contact-icon me-3'/></Link>
                  </div>
                    
                </div>
                <div className='col-md-6'>

               
                </div>
            </div>
           
        </div>
    );
};

export default ContactUsForm;
