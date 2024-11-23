import React from 'react';
import Image from "next/image";

const DedicatedHostingSolution = () => {
  return (
    <div className='service-section'>
      <div className="container py-5">
        <h2 className="text-center text-white mb-3 m-auto w-100">For Whom Offshore Dedicated Web Hosting Solutions?</h2>
        <p className="text-center text-white mb-5 planHead-con m-auto">
        Semi-Managed Dedicated Offshore Server Unmetered solutions are perfect for businesses and individuals who:
        </p>

        <div className='row'>
          
            <div  className="col-md-12 col-lg-6">
              <ul className='text-white sol'>
                <li>Want to keep their information secure from government surveillance
                and censorship.</li>
                <li>Security and anonymity are the top priorities for their site.</li>
                <li>Do not want their host location to be made public.</li>
                <li>Want the freedom to speak no matter the place they live.</li>
                <li>Would prefer to host their site in a country that has better internet infrastructure.</li>
                <li>Blogs, forums or other sites which could be subject to censorship.</li>
                <li>Pharmaceutical companies can utilize DMCA Ignored servers to prevent violating their country’s terms of service when hosting their websites.</li>
              </ul>
            </div>
            <div  className="col-md-12 col-lg-6 text-center">
             <Image src='/assets/Offshore-Dedicated-Web-Hosting-Solutions.png' alt='offshore-dedicated-server' className='hostingSolImg h-100' width={1000} height={1000}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedHostingSolution;
