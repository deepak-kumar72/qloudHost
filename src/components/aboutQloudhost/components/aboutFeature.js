import React from 'react';
import Link from "next/link";
import Image from "next/image";

const AboutFeatures= () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">

      
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <Image src='/assets/feature/about-2.png' alt="" className="img-fluid" width={1000} height={1000}/>
          </div>
          <div className="col-md-6  about-sec">
          <h2 className="">Hosting that Respects Your Privacy!</h2>
            <h4 className='mb-3 w-100'>What Makes Us Stand Out From Others?</h4>
            <p className="">
            <Link href='/' className='faq-link'>QloudHost</Link> is focused on providing you with offshore hosting services that respect your right to privacy. And to accomplish that goal, we operate our services with the latest and cutting-edge technologies that ensure you get uncompromised quality. We use the best-in-class data center with industry-standard hardware equipment to ensure you get impenetrable security without compromising performance. </p>
            <p className="">
            QloudHost <Link href='/offshore-hosting/' className='faq-link'>offshore hosting</Link> is perfect for those who are looking to host their website without losing their privacy or anonymity. But we do not allow customers to post or perform any illegal or illicit activities such as phishing, fraud, scams or anything that violates our terms of service and policies. </p>
            <p>Growing from a startup to a global player, we have always envisioned going beyond expectations and providing quality that you can rely on!</p>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFeatures;
