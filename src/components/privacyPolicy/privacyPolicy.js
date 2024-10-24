import React from "react";
import HeroSection from "./heroSection";
import images from "../../constants/images";
import Policies from "./policies";

const PrivacyPolicy = () => {
  return (
    <div>
      <HeroSection
        subTitle="FASTEST PERFORMANCE"
        title="Privacy Policy"
        description="Get your offshore VPS hosting now! Enjoy instant setup, untraceable footprints, and full data protection for your website. Stay anonymous and secure with our offshore servers, perfect for your privacy needs. Don’t wait—experience ultimate freedom and protection today!"
        imageSrc={images.privacyPolicy}
      />
      <Policies />
    </div>
  );
};

export default PrivacyPolicy;
