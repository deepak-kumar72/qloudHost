import React, { useState, useEffect } from "react";
import Link from "next/link";

const DedicatedPlan = () => {

  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dedicatedServer.json"); // Fetch from public folder
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
    return <div></div>;
  }
  
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
                    {data.planSection.plans.map((plan) => (
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
                    
                  </button></Link> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

export default DedicatedPlan
