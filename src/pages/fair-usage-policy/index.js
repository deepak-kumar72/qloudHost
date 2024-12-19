import FairUsagePolicies from "@/components/fairUsage/fairUsagePolicies";
import HeroSection from "@/components/privacyPolicy/heroSection";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "fairUsage.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    return {
      props: { data }, // Pass data as props
    };
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return { props: { data: null } }; // Handle errors gracefully
  }
}

const FairUsagePolicy = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent} />
      <FairUsagePolicies />
    </div>
  );
};

export default FairUsagePolicy;
