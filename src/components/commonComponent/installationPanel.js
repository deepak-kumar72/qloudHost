import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const InstallationPanel = ({
  title,
  description,
  buttonText,
  panelOptions,
  url,
}) => {
  return (
    <div className="install-panel">
      <div className="container py-5">
        <div className="row panel-sec m-auto">
          <div className="col-md-7 d-flex">
            <div className="m-auto">
              <h2 className="mb-4 w-100">{title}</h2>
              <p className="planHead-con w-100 mb-4">{description}</p>
              <ScrollLink to={url} smooth={true} duration={200}>
                <button className="start-now-btn mb-4">
                  {buttonText}
                  <FaArrowRight className="ms-4" />
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-column align-items-center gap-3 panel-item">
              {panelOptions.map((option, index) => (
                <div key={index} size="lg" className=" panel-opt">
                  <img src={option.img} alt="icon" />
                  {option.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPanel;
