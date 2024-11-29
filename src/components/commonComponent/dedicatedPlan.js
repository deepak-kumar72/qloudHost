import React from 'react'
import dedicatedplansData from './dedicatedPlanData'
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const DedicatedPlan = () => {
  return (
    <div className='dedicated-plan-responsive'>
     <div className="container my-4">
            <div className="plan-table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                        <tr>
                            <th className='plan-table-heading start-radius'>Server Name</th>
                            <th className='plan-table-heading'>CPU</th>
                            <th className='plan-table-heading'>Memory</th>
                            <th className='plan-table-heading'>Storage</th>
                            <th className='plan-table-heading'>Bandwidth</th>
                            <th className='plan-table-heading'>Price</th>
                            <th className='plan-table-heading end-radius'>Get Started</th>
                        </tr>
                    </thead>
                    <tbody>
                    {dedicatedplansData.map((plan) => (
                            <tr key={plan.id}>
                                <td className='text-start position-relative plan-table-data'>
                                    {plan.name}
                                    <span className='setup-fees'>No Setup Fees</span>
                                    
                                </td>
                                <td className='plan-table-data'>{plan.cpu}</td>
                                <td className='plan-table-data'>{plan.memory}</td>
                                <td className='plan-table-data'>{plan.storage}</td>
                                <td className='plan-table-data'>{plan.bandwidth}</td>
                                <td className='plan-table-data'>{plan.price}</td>
                                <td className='plan-table-data'>
                                <Link href={plan.url} className='dedicated-plan-btn'>
                  <button className="plan-btn dedicated-plan-btn text-center">
                    Buy Now
                    {/* <FaArrowRight className=""/> */}
                  </button></Link> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      {/* <div className="row offshoreVps-plan justify-content-center gy-2" id='explore'>
          {dedicatedplansData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
            <div className={`${plan.popular ? "popular-qloudhost-card position-relative h-100" : "card-body offshore-plan-body position-relative h-100"} ${plan.bestForStreaming ? "popular-qloudhost-card" : ""} ${plan.newServer ? "popular-qloudhost-card" : ""}`}>
                {plan.popular && (
                  <div className="qloud-popular-badge position-absolute">Popular</div>
                )}
                {plan.newServer && (
                  <div className="new-server qloud-popular-badge position-absolute">New Server</div>
                )}
                {plan.bestForStreaming && (
                  <div className="qloud-streaming-badge position-absolute">Best for Streaming</div>
                )}
                  <h5 className="dedicated-card-title mt-3 mb-4">{plan.name}</h5>
                  <h3 className="card-price vps-plan-price mb-3">{plan.price} <span className="price-unit">/month</span></h3>
                  <p className="save dedicated-save-badge  mb-3">{plan.save} </p>
                  <p className="save-price mb-4">Renews at {plan.yearlyPrice}</p>
                  

                  <Link href={plan.url} className='dedicated-plan-btn'>
                  <button className="plan-btn dedicated-plan-btn d-flex justify-content-between mb-4">
                    Buy Now<FaArrowRight className=""/>
                  </button></Link> 
                  <h4 className='mb-3 top-feature'>Top Features</h4>
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2 offshoreVps-features">
                        <FaCheck className="check" /> {feature}
                      </li>
                    ))}
                  </ul>
            </div>
            </div>
          ))}
        </div> */}
    </div>
  )
}

export default DedicatedPlan
