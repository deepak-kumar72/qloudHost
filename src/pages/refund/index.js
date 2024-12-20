import HeroSection from "@/components/privacyPolicy/heroSection";
import RefundPolicies from "@/components/refundPolicy/refundPolicies";
import React from "react";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/refund.json"); // Adjust URL as needed
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const RefundPolicy = ({ data }) => {
  // Fallback if no data is provided
  if (!data) {
    return <div></div>;
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent} />
      <RefundPolicies data={data}/>
    </div>
  );
};

export default RefundPolicy;
