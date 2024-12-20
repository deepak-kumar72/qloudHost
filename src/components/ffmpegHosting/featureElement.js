
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const FeatureElement = ({data}) => {

  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div></div>;
  }

  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        {/* Loop through features from the fetched data */}
        {data.ffmpegfeatures.map((feature, index) => (
          <div className="row align-items-center" key={index}>
            <div className={`col-md-6 ${index % 2 === 0 ? 'mb-4' : 'order-md-2 mb-3'} text-center`}>
              <Image src={feature.image} alt={feature.title} className="img-fluid" width={1000} height={1000} />
            </div>
            <div className={`col-md-6 ${index % 2 === 0 ? '' : 'order-md-1'} feature-element-sec`}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <Link href={feature.link} smooth={true} duration={200}>
                <button className="btn start-now-btn mt-3">
                  Get Started Now <FaArrowRight className="ms-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureElement;
