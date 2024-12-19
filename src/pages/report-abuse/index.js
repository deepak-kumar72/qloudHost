import HeroSection from "@/components/privacyPolicy/heroSection";
import ReportAbusecon from "@/components/reportAbuse/reportAbusecon";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "reportAbuse.json");
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

const ReportAbu = ({ data }) => {
  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div>Loading...</div>; // Show loading state in case of an error
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent} />
      <ReportAbusecon />
    </div>
  );
};

export default ReportAbu;
