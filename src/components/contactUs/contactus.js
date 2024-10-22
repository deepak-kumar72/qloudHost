import React from 'react'
import HeroSection from '../privacyPolicy/heroSection'
import ContactSupport from './components/contactSupport'
import ContactUsForm from './components/contactUsForm'
import ContactCompo from './components/contactCompo'

const Contactus = () => {
  return (
    <div>
    <HeroSection
    subTitle="We’re here 24/7"
      title="CONTACT OUR SUPPORT"
      description="Reach out with your questions, concerns and challenges. Or just to say hi. We’ll be happy to chat and help."
      imageSrc=""      
    />
    <ContactSupport/>
    <ContactUsForm/>
    <ContactCompo/>
    </div>
  )
}

export default Contactus
