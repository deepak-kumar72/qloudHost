import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NetherLandStreamingFeature = () => {
  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Privacy Section */}
        <div className="row align-items-center mb-3">
          <div className="col-md-6 mb-4 text-center">
            <Image
              src='/assets/feature/netherlands-streaming-server.webp'
              alt="Guaranteed protection in the Netherlands"
              className="img-fluid m-auto"
              width={1000}
              height={1000}
              
            />
          </div>
          <div className="col-md-6 feature-element-sec">
            <h2 className="w-100 mb-3">
              Guaranteed protection in the Netherlands
            </h2>
            <p className="">
              <Link href='/' className='faq-link'>QloudHost</Link> presents a diverse selection of Netherlands Media
              Streaming Servers featuring cutting-edge hardware. Our servers are
              finely tuned for robust load balancing and unmetered resources,
              ensuring your dependable streaming services.
            </p>
            <p className="">
              QloudHost offers user-friendly services with automated features,
              allowing you to concentrate on your media streaming without
              concerns about the technical backend. Stream with confidence!
            </p>
            <Link href="#explore" smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="row align-items-center mb-3">
          <div className="col-md-6 order-md-2 mb-3 text-center">
            <Image src='/assets/feature/netherlands-streaming-server-02.webp' alt="DMCA Ignored Streaming Server" className="img-fluid" width={1000} height={1000}/>
          </div>
          <div className="col-md-6 order-md-1 feature-element-sec">
            <h2 className="mb-3 w-100">DMCA Ignored Streaming Server</h2>
            <p className="">
              QloudHost offers top-notch offshore Netherlands servers for global
              audio and video streaming. Our DMCA-compliant offshore streaming
              servers are not only cost-effective but also deliver superior
              speed and reliability compared to other providers.{" "}
            </p>
            <p className="">
              Our dedicated streaming servers operate on our purpose-built
              network, meticulously configured for high-quality video streaming,
              video on demand, Offshore IPTV services, and high-traffic
              projects. QloudHost’s DMCA-ignored streaming servers are your
              ideal solution for all your streaming requirements.{" "}
            </p>

            <Link href="#explore" smooth={true} duration={200}>
              <button className="btn start-now-btn mt-3">
                Get Started Now <FaArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetherLandStreamingFeature;
