import HeroSection from "@/components/privacyPolicy/heroSection";
import ReportAbusecon from "@/components/reportAbuse/reportAbusecon";
import React from "react";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/reportAbuse.json"); // Adjust URL as needed
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const ReportAbu = ({ data }) => {
  // Fallback if no data is provided
  if (!data) {
    return <div></div>;
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent} />
      <ReportAbusecon  data={data}/>
    </div>
  );
};

export default ReportAbu;
