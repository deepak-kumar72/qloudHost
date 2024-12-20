import HeroSection from "@/components/privacyPolicy/heroSection";
import TermOfServices from "@/components/terms/termOfServices";
import React from "react";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/terms.json"); // Adjust URL as needed
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const Term = ({ data }) => {
  // Fallback if no data is provided
  if (!data) {
    return <div></div>;
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroSection
        subTitle=""
        {...heroComponent}
      />
      <TermOfServices data={data}/>
    </div>
  );
};

export default Term;
