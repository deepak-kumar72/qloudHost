import React from 'react'
import HeroSection from '../privacyPolicy/heroSection'
import ContactSupport from './components/contactSupport'
// import ContactUsForm from './components/contactUsForm'
import ContactCompo from './components/contactCompo';

const Contactus = () => {
  return (
    <div>
    <HeroSection
    subTitle="We’re here 24/7"
      title="CONTACT OUR SUPPORT"
      description="Got questions, concerns, or challenges? Or just want to say hi? We're here to chat and help with anything you need. Don't hesitate to reach out—we're always happy to assist!"
      imageSrc='/assets/Frame/heroImg_contact-us.png'    
    />
    <ContactSupport/>
    {/* <ContactUsForm/> */}
    <ContactCompo/>
    </div>
  )
}

export default Contactus
