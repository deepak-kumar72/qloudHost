import React, { useState, useEffect } from 'react';
import Image from "next/image";

const ChooseQloudHost = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/windowrdp.json"); // Fetch from public folder
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='service-section'>
      <div className="container my-5 py-5">
        <h2 className="text-center text-white mb-3 m-auto w-100">Why choose QloudHost Offshore Windows VPS provider?</h2>
        <p className="text-center text-white w-75 mb-5 planHead-con m-auto">
          Boost your website performance with world-class Best Offshore Windows VPS DMCA Ignored servers and guaranteed performance.
        </p>

        <div className='row'>
          {data.ChooseQloudHost.map((service) => (
            <div key={service.id} className="col-md-12 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className='service-card d-flex p-4'>
                  <div className="mb-3 text-center me-2">
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
  );
};

export default ChooseQloudHost;
