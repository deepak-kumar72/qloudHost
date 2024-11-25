import React from 'react';
import Image from "next/image";

const servicesData = [
    {
      id: 1,
      imgUrl: '/assets/icon/nvme-ssd.svg',
      title: "Fastest NVMe SSD",
      description: "Get Super-fast performance with blazing-fast Nvme SSD drive storage! Our service comes with guaranteed quality, so we use industry-standard equipment to run our servers.",
    },
    {
      id: 1,
      imgUrl: '/assets/icon/hosted-in-netherland.svg',
      title: "Hosted in Netherlands",
      description: "We have chosen the best data centers in Netherlands to ensure full privacy and security for your website on the Internet. It is especially useful for bypassing all the biased country-specific restrictions!",
    },
    {
        id: 1,
        imgUrl: '/assets/icon/14-days-money-back.svg',
        title: "14 Days Money Back",
        description: "We understand the value of your hard-earned money! Get whole assurance with a 14-day money-back guarantee. And no questions will be asked!",
      },
  
  ];

const ChooseQloudHost = () => {
  return (
    <div className='service-section'>
      <div className="container my-5 py-5">
        <h2 className="text-center text-white mb-3 m-auto w-100">Why choose QloudHost Offshore Windows VPS provider?</h2>
        <p className="text-center text-white w-75 mb-5 planHead-con m-auto">
        Boost your website performance with world-class Best Offshore Windows VPS DMCA Ignored servers and guaranteed performance.
        </p>

        <div className='row'>
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-12 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className='service-card d-flex p-4'>
                  <div className="mb-3  text-center me-2">
                    <Image src={service.imgUrl} alt='icon' className='streaming-image-icon' width={1000} height={1000}/>
                  </div>
                  <div>
                    <div className='card-title'>{service.title}</div>
                    <div className='card-text service-desc'>{service.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseQloudHost
