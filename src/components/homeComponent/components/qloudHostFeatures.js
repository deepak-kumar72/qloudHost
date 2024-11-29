import React from "react";
import Image from "next/image";
import homeData from "../../../data/home.json"; // Adjust path as necessary

const QloudHostFeatures = () => {
  const features = homeData.featureshome; // Access features from the JSON data

  return (
    <div className="qloudfeatures">
      <div className="container">
        <h2 className="text-center text-white mb-3 mt-5 m-auto pt-5">QloudHost Features</h2>
        <p className="text-center text-white w-50 mb-5 planHead-con m-auto">
          Enjoy your privacy on the internet with our powerful features that let you host your website with impenetrable security.
        </p>
        <div className="row g-3 feature-row m-auto pb-5">
          {features.map((feature) => (
            <div key={feature.id} className="col-12 col-md-6 col-lg-4">
              <div className="feature-card">
                <Image
                  src={feature.imgsrc}
                  alt={feature.title}
                  className="mb-4"
                  width={1000}
                  height={1000}
                />
                <h3 className="mb-3">{feature.title}</h3>
                <span className="mb-3">{feature.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QloudHostFeatures;
