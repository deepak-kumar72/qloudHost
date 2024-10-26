import React from 'react';
import images from '../../../constants/images';

const TechnologyPartners = () => {
  // Array of image URLs (replace these with actual image paths)
  const partnerImages = [
    
    images.apache,
    images.bitninja,
    images.bunnyCdn,
    images.cloudflare,
    images.cloudlinux,
    images.cpanel1,
    images.googieHost,
    images.hostAdvice,
    images.imunify360,
    images.jetBackup,
    images.letsEncrypt,
    images.litespeed,
    images.nodejs,
    images.php,
    images.softaculous,
    images.trustpilot,
    images.ubuntu1,
    images.virtualizor,
    images.whmcs,
    images.wordpress
  ];

  return (
    <div className='container my-5'>
      <h2 className="mb-5 text-center m-auto">Our Business & Technology Partners</h2>
      <div className='justify-content-space-between justify-content-center techPartner-banner '>
        {partnerImages.map((image, index) => (
          
            <div key={index} className='techPartnerImg m-2'>
              <img src={image} alt={`Partner ${index + 1}`} className='img-fluid' />
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default TechnologyPartners;
