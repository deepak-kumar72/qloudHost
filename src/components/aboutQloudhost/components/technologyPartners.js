import React from 'react';
import Image from "next/image";

const TechnologyPartners = () => {
  // Array of image URLs (replace these with actual image paths)
  const partnerImages = [
    
    '/assets/technology-Partners/apche.png',
    '/assets/technology-Partners/bitninja.png',
    '/assets/technology-Partners/bunny-cdn.png',
    '/assets/technology-Partners/cloudflare.png',
    '/assets/technology-Partners/cloudlinux.png',
    '/assets/technology-Partners/cpanel.png',
    '/assets/technology-Partners/googiehost.png',
    '/assets/technology-Partners/hostadvice.png',
    '/assets/technology-Partners/imunify360.png',
    '/assets/technology-Partners/lets-encrypt.png',
    '/assets/technology-Partners/litespeed.png',
    '/assets/technology-Partners/nodejs.png',
    '/assets/technology-Partners/php.png',
    '/assets/technology-Partners/softaculous.png',
    '/assets/technology-Partners/trustpilot.png',
    '/assets/technology-Partners/ubuntu.png',
    '/assets/technology-Partners/virtualizer.png',
    '/assets/technology-Partners/whmcs.png',
    '/assets/technology-Partners/wordpress.png',
    '/assets/technology-Partners/jetbackup.png'
  ];

  return (
    <div className='container my-5'>
      <h2 className="mb-5 text-center m-auto">Our Business & Technology Partners</h2>
      <div className='justify-content-space-between justify-content-center techPartner-banner '>
        {partnerImages.map((image, index) => (
          
            <div key={index} className='techPartnerImg m-2'>
              <Image src={image} alt={`Partner ${index + 1}`} className='img-fluid'  width={1000} height={1000}/>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default TechnologyPartners;
