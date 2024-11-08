import React from 'react';
import HeroSection from '../privacyPolicy/heroSection';
import TermOfServices from './termOfServices';

const Terms = () => {
  return (
    <div>
       <HeroSection
      subTitle=""
        title="Terms of services"
        description="By using our services, you agree to comply with all terms outlined. We reserve the right to modify, suspend, or terminate services at any time. Unauthorized use, illegal activities, or violations of policies may lead to account suspension. Please review our terms regularly for updates."
        imageSrc='/assets/Frame/heroImg-services.webp'   
      />
      <TermOfServices/>

    </div>
  )
}

export default Terms
