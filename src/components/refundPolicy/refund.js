import React from 'react'
import HeroSection from '../privacyPolicy/heroSection'
import RefundPolicies from './refundPolicies';
import images from '../../constants/images';

const Refund = () => {
  return (
    <div>
      <HeroSection
      subTitle=""
        title="Refund Policy​"
        description="We offer a hassle-free refund policy! If you’re not satisfied, contact us within 30 days of purchase for a full refund. Our team is here to assist you with any concerns. Please review our terms for eligibility details and let us know how we can help. Your satisfaction is our priority!"
        imageSrc={images.refund}   
      />
      <RefundPolicies/>
    </div>
  )
}

export default Refund
