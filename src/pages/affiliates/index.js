import GetPaidMethod from "@/components/affiliate/getPaidMethod";
import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import FAQsSection from "@/components/commonComponent/faqSection";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "affiliate.json");
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

const Affiliate = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, qlodHostServices } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <GetPaidMethod />
      <QlodHostServices {...qlodHostServices} />
      <FAQsSection faqs={data.faqs} />
    </div>
  );
};

export default Affiliate;
