import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import HighPerformanceVpsPlan from "@/components/highPerformanceVps/highPerformanceVpsPlan";
import VpsFeatureElement from "@/components/highPerformanceVps/vpsFeatureElement";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "highPerformanceVps.json");
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

const HighPerformanceVpsHosting = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, hostingGurantees } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <HighPerformanceVpsPlan />
      <WebHostingGurantees {...hostingGurantees} />
      <TechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <VpsFeatureElement />
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default HighPerformanceVpsHosting;
