import React from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Replace useLocation with useRouter
import { FaArrowRight } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link"; 
import { MdNotificationsActive } from "react-icons/md";
import PropTypes from "prop-types";


const HeroComponent = ({
  subTitle,
  title,
  description,
  button1Text,
  imageSrc,
  button1Link,
  options = [],
}) => {
  const router = useRouter(); // Use Next.js useRouter hook

  const isBlackFridayPage =
    router.pathname === "/deals/black-friday-cyber-monday-web-hosting-deals";

  return (
    <div className={`hero-container p-50 ${isBlackFridayPage ? "hero-black-friday" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="hero-content">
              {router.pathname !== "/coupons" && (
                <h4 className="mb-3 hero-subTitle">
                  <MdNotificationsActive className="me-2 sub-title-icon" />
                  {subTitle}
                </h4>
              )}
              <h1 className="mb-4 ">{title}</h1>
              <p className="mb-4">{description}</p>
              <div className="hero-options-container mb-4">
                {options.map((option, index) => (
                  <div key={index} className="option-item d-flex align-items-center mb-2">
                    <FaRegCircleCheck className="me-2 option-icon" />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
              <div className="hero-buttons mb-4">
                <Link href={button1Link} passHref>
                  <button className="btn-primary start-now-btn me-3">
                    {button1Text}
                    <FaArrowRight className="ms-4 start-now-icon" />
                  </button>
                </Link>
              </div>
              <div className="money-back-text">
                <LuShieldCheck className="me-2" />
                14-Day Money-Back Guarantee
              </div>
            </div>
          </div>
          <div className="col-md-6 m-auto">
            <div className="hero-image-container position-relative text-end w-100 h-100">
              <Image  src={imageSrc} alt={title} className="hero-frame h-100" width={1000}
              height={1000}/>
              <div className="features"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroComponent.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  primaryButtonLink: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

HeroComponent.defaultProps = {
  options: [],
};

export default HeroComponent;
