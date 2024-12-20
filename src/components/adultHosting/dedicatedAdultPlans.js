import React from "react";
import DedicatedPlan from "../commonComponent/dedicatedPlan";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/adultHosting.json"); // Replace with actual URL
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const DedicatedAdultPlan = ({ data }) => {
  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div></div>;
  }

  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
        <h2 className="text-center m-auto mb-3">{data.dedicatedPlan.title}</h2>
        <p className="text-center mb-5 planHead-con m-auto">{data.dedicatedPlan.description}</p>

        {/* Render the DedicatedPlan component */}
        <DedicatedPlan />
      </div>
    </div>
  );
};

export default DedicatedAdultPlan;
