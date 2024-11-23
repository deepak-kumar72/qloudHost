import React from "react";
import Link from "next/link";
import VpsPlan from "../../commonComponent/vpsPlan";


const AdultHostingPlans = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">
          Adult VPS Hosting Plans & Pricing
        </h2>
        <p className="text-center mb-5 planHead-con m-auto">
          Unlock Peak Performance and Unparalleled Security with <Link href='/offshore-vps-hosting/' className="faq-link">VPS Hosting</Link>  for
          Adult Websites. Choose from Linux or Windows Operating Systems and
          experience the ultimate hosting solution for your website or
          application.
        </p>

        {/* <div className="row offshoreVps-plan justify-content-center" id="explore">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className="col-12 col-md-6 col-lg-3   mb-4 explore-plan-col"
            >
              <div
                className={`${
                  plan.popular
                    ? "popular-qloudhost-card position-relative h-100"
                    : "card-body offshore-plan-body position-relative h-100"
                }`}
              >
                {plan.popular && (
                  <div className="popular-badge vps-badge position-absolute">
                    Popular
                  </div>
                )}

                <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                <h3 className="card-price vps-plan-price mb-3">
                  {plan.price} <span className="price-unit">/month</span>
                </h3>
                <p className="save mb-1">{plan.save}</p>
                <p className="save-price mb-4">
                  Was <del>{plan.yearlyPrice}</del>
                </p>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 offshoreVps-features">
                      <i className="bi bi-check-circle-fill"></i>
                      <FaCheck className="check" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link href={plan.url}>
                  <button className="plan-btn vps-plan-btn">Select</button>
                </Link>
              </div>
            </div>
          ))}
        </div> */}

        <VpsPlan/>
        <div className="text-center mt-3">
          <span className="consult">
            Looking for more power? Check our DMCA Ignored Offshore Dedicated
            Server Plans{" "}
            <Link href="/offshore-dedicated-servers/" className=" fw-bold">
              Dedicated Server
            </Link>
            Plans
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdultHostingPlans;
