import React from 'react';

const FeaturesYouGet = () => {


  const featureList = [
    "Benefit from our DMCA ignored Offshore data centers, boasting cutting-edge infrastructure and high-speed networks for an unparalleled hosting experience.",
    "QloudHost presents a host of valuable features coupled with rapid loading times, ensuring optimal performance for your online endeavors.",
    "Experience the unbeatable speed and performance, with all the essential features at your fingertips.",
    "Optimize costs and enhance user experience by hosting your cheap offshore VPS where your customers are located.",
    "Free up your time to focus on business management while we handle the intricacies of server management.",
    "Thanks to our Anti-DDoS Protected Offshore Hosting servers, our network is protected and secure, ensuring the safety of your data.",
    "At QloudHost, we prioritize customer privacy and uphold their right to express themselves freely, offering absolute anonymity.",
    "Explore tailored solutions for unique requirements with our range of special plans"
  ];

  return (
    <div className="container vps-page">
      {/* Heading Section */}
      <div className="text-center my-5">
      <h2 className="text-center m-auto mb-3 w-100">What Sets QloudHost Offshore VPS Hosting Apart?</h2>
      
      </div>

      {/* Content Section */}
      <div className="row align-items-center">
        {/* Features List */}
        <div className="col-lg-7 mb-4">
            {featureList.map((feature, index) => (
              <div class="mb-3 p-3 vps-features">
              <span key={index}>{feature}</span>
              </div>
            ))}

        </div>

        {/* VPS Image Section */}
        <div className="col-lg-5 text-center mb-4">
          <img
            src='/assets/vpsServer.png'
            alt="VPS Server"
            className="vps-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesYouGet;
