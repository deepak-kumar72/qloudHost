import React from 'react';
import images from '../../../constants/images';

const AboutFeatures= () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">

      <h2 className="">Hosting that Respects Your Privacy!</h2>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 text-center">
            <img src={images.quality} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-1 about-sec">
            <h4 className='mb-3 w-100'>What Makes Us Stand Out From Others?</h4>
            <p className="">
            QloudHost is focused on providing you with offshore hosting services that respect your right to privacy. And to accomplish that goal, we operate our services with the latest and cutting-edge technologies that ensure you get uncompromised quality. We use the best-in-class data center with industry-standard hardware equipment to ensure you get impenetrable security without compromising performance. </p>
            <p className="">
            QloudHost offshore hosting is perfect for those who are looking to host their website without losing their privacy or anonymity. But we do not allow customers to post or perform any illegal or illicit activities such as phishing, fraud, scams or anything that violates our terms of service and policies. </p>
            <p>Growing from a startup to a global player, we have always envisioned going beyond expectations and providing quality that you can rely on!</p>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFeatures;
