import React from 'react';

const RdpFeatureBanner = () => {


  const featureList = [
    "All our Offshore Windows VPS plans can be easily upgraded to the next level. The upgrade process has almost no downtime, so your data, IP address, and other settings will stay the same.",
    "All our DMCA-ignored Offshore Windows VPS servers have super-fast 1 Gbps internet connections, making them perfect for shared hosting, forex trading, game servers, and various business needs.",
    "All our Windows host servers have at least AMD Epyc and higher processors and at least 256 GB of RAM",
    "We regularly install the latest updates and fixes to keep our DMCA Ignored Windows VPS offshore server safe and secure.",
    "You get Remote Desktop Access (RDP) with every Offshore Windows VPS plan. You can use Remote Desktop to connect to and manage your offshore Windows VPS from anywhere. You also get full administrative access, so you can install any applications you need on your server.",
    "With your DMCA Ignored Windows VPS hosting offshore server, you’ll get at least one dedicated IPv4 address. If you need more IP addresses, you can request them from certain server locations in the Netherlands.",
    "QloudHost DMCA Ignored Hosting offers Windows Server 2019/ 2022 as an operating system option for your Offshore Windows VPS DMCA Ignored Servers."
  ];

  return (
    <div className="container vps-page">
      {/* Heading Section */}
      <div className="text-center my-5">
      <h2 className="text-center m-auto mb-3 w-100">What Sets QloudHost Offshore Windows VPS Hosting Apart?</h2>
      {/* <p className="text-center mb-5 planHead-con m-auto">Looking for some good reasons to choose Qloudhost? Here’s the reason of our confidence.</p> */}
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
            src='/assets/windows-vps.png'
            alt="window Vps"
            className="vps-image"
            
          />
        </div>
      </div>
    </div>
  );
};

export default RdpFeatureBanner;
