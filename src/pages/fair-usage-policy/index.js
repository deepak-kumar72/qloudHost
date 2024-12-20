import FairUsagePolicies from "@/components/fairUsage/fairUsagePolicies";
import HeroSection from "@/components/privacyPolicy/heroSection";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/fairUsage.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const FairUsagePolicy = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent} />
      <FairUsagePolicies data={data}/>
    </div>
  );
};

export default FairUsagePolicy;
