import HeroSection from "@/components/privacyPolicy/heroSection";
import Policies from "@/components/privacyPolicy/policies";
import React from "react";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/privacyPolicy.json"); // Adjust URL as needed
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const Privacy = ({ data }) => {
  // Fallback if no data is provided
  if (!data) {
    return <div></div>;
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent} />
      <Policies data={data}/>
    </div>
  );
};

export default Privacy;
