import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import DmcaFeatureElement from "@/components/dmcaIgnoredVps/dmcaFeatureElement";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import DmcaIgnoredVpsPlan from "@/components/dmcaIgnoredVps/dmcaIgnoredVpsPlan";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "dmcaIgnoredVps.json");
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

const DmcaVps = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, hostingGurantees, featureHeading, features, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <DmcaIgnoredVpsPlan />
      <WebHostingGurantees {...hostingGurantees} />
      <TechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <DmcaFeatureElement />
      <QlodHostServices
        heading={featureHeading.Heading}
        content={featureHeading.subHeading}
        features={features}
      />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default DmcaVps;
