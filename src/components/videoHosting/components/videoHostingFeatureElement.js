import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";

const VideoHostingFeatureElement = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/videohosting.json"); // Fetch from public folder
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
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 text-center">
            <Image src='/assets/feature/video-hosting.webp' alt="Video Hosting for Business" className="img-fluid m-auto" width={1000} height={1000} />
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2 className='w-100 mb-3'>Video Hosting for Business</h2>
            <p className="">
              QloudHost has deployed multiple <Link href='/offshore-vps-hosting/' className='faq-link'>offshore hosting servers</Link>  at the best locations with a dedicated team of onsite technical experts working 24*7 to ensure optimum performance for your website.
            </p>
            <p className="">
              In addition, our servers are running servers equipped with best-in-class and latest hardware technologies such as powerful SSD storage, latest processors and much more.
            </p>
            <p className="">
              Hence if you are looking for an offshore Adult video hosting service provider to <Link href='/offshore-streaming-server/' className='faq-link'>start your video</Link> streaming business, then we have bundled up everything for you!
            </p>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <Image src='/assets/feature/high-performance.webp' alt="High Performance Network" className="img-fluid" width={1000} height={1000} />
          </div>
          <div className="col-md-6 order-md-1 feature-element-sec">
            <h2 className='mb-3 w-100'>High Performance Network</h2>
            <p className="">
              QloudHost has deployed multiple robust servers on the best data centers to provide you with high-speed network communication for ultra-fast loading speed, bufferless <Link href='/offshore-streaming-server/' className='faq-link'>streaming </Link>and excellent connectivity.
            </p>
            <p className="">
              One more interesting aspect is low-latency, that means our servers are especially optimized to perform faster even with high-load, making us capable enough to provide maximum uptime!
            </p>
            <Link
              href='#explore'
              smooth={true}
              duration={200}
            >
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />

              </button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoHostingFeatureElement;
