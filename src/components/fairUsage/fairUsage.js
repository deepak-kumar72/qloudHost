import React from 'react'
import HeroSection from '../privacyPolicy/heroSection'
import FairUsagePolicies from './fairUsagePolicies';

const FairUsage = () => {
  return (
    <div>
      <HeroSection
      subTitle=""
        title="Fair Usage Policy"
        description="Our Fair Usage Policy ensures optimal service for all users. We monitor resource usage to prevent excessive consumption that may impact others. Abusive or unfair use of bandwidth, storage, or server resources may result in restrictions. This policy guarantees balanced performance and reliability for everyone."
        imageSrc='/assets/Frame/heroImg_fair-usage.webp' 
      />
      <FairUsagePolicies/>
    </div>
  )
}

export default FairUsage
