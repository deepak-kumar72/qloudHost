import React from 'react'
import HeroSection from '../privacyPolicy/heroSection'
import ReportAbusecon from './reportAbusecon';
import images from '../../constants/images';

const ReportAbuse = () => {
  return (
    <div>
      <HeroSection
      subTitle=""
        title="Report Abuse"
        description="To report any abuse or violations of our terms, please fill out the form with all relevant details. We take all reports seriously and will investigate promptly. Protecting our community is our priority. If you believe content violates our policies, let us know and we will take swift action."
        imageSrc={images.reportAbuse}  
      />
      <ReportAbusecon/>
    </div>
  )
}

export default ReportAbuse
