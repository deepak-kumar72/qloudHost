import React from 'react';
import images from '../../../constants/images';

const servicesData = [
    {
      id: 1,
      imgUrl: images.youTube,
      title: "YouTube Streaming",
      description: "Are you a YouTuber and Looking for powerful streaming servers? If Yes, then QloudHost will be the right pick for you, thanks to our powerful servers that provide you with a bufferless streaming experience",
    },
    {
      id: 1,
      imgUrl: images.gaming,
      title: "Game Streaming",
      description: "Boost your gaming experience with our reliable servers that allow you to perform unhindered streaming for as long as you want! In addition, you will get unmetered resources for uninterrupted performance.",
    },
    {
        id: 1,
        imgUrl: images.iptv,
        title: "IPTV",
        description: "QloudHost provides you with the offshore streaming server that you can use to enjoy you country’s television channels from anywhere without any restrictions or arbitrary troubles. ",
      },
  
  ];

const PopularStreamingUse = () => {
  return (
    <div className='service-section'>
      <div className="container my-5 py-5">
        <h2 className="text-center text-white mb-3 m-auto w-100">Most Popular Streaming Use Cases</h2>
        <p className="text-center text-white w-75 mb-5 planHead-con m-auto">
        The most popular use cases for streaming include servers that comply with the DMCA for streaming,
        servers that ignore DMCA regulations for streaming, and offshore IPTV servers
        </p>

        <div className='row'>
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-12 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm service-card">
                <div className=' d-flex p-4'>
                  <div className="mb-0  text-center me-3">
                    <img src={service.imgUrl} alt='icon' className='streaming-image-icon'/>
                  </div>
                  <div>
                    <div className='card-title'>{service.title}</div>
                    <div className='card-text service-desc mb-0'>{service.description}</div>
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

export default PopularStreamingUse
