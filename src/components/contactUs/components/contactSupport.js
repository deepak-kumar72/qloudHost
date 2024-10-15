import React from 'react'
import { Link } from 'react-router-dom'

const ContactSupport = () => {
  return (
    <div className='container'>
      <h2 className='text-center mb-5 m-auto'>For DMCA Ignored Offshore Hosting Support</h2>
      <div className='row'>
        <div className='col-3'>
            <h4>Live Chat</h4>
            <p>The quickest way to get your Answers to your question.</p>
            <Link to="">Live Chat</Link>
        </div>
        <div className='col-3'>
        <h4>Contact Support</h4>
            <p>Have Questions & answers about your existing services.</p>
            <Link to="">Submit Tcket</Link>
        </div>
        <div className='col-3'>
        <h4>Contact Billing</h4>
            <p>Get answers to invoice and payment questions.</p>
            <Link to="">Submit Ticket</Link>
        </div>
        <div className='col-3'>
        <h4>Email Us</h4>
            <p>Prefer to write it out instead? Shoot us an email and we’ll get back to you soon.</p>
            <Link to="">Support@qloudhost.com</Link>
        </div>
      </div>
    </div>
  )
}

export default ContactSupport
