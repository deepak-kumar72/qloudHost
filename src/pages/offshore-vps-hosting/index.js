import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import FeaturesYouGet from "@/components/offShoreVps/featuresYouGet";
import OffshoreVpsPlan from "@/components/offShoreVps/offshoreVpsPlan";
import PrivacyHardwarePage from "@/components/offShoreVps/privacyHardwarePage";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "offshoreVps.json");
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

const VpsHosting = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, featureHeading, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <OffshoreVpsPlan />
      <WebHostingGurantees
        title="Why choose QloudHost as your Offshore VPS provider?"
        subHeading="Boost your website performance with world-class Best Offshore hosting DMCA Ignored servers and guaranteed performance."
      />
      <TechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <PrivacyHardwarePage />
      <QlodHostServices
        heading={featureHeading?.Heading}
        content={featureHeading?.subHeading}
        features={data.features}
      />
      <FeaturesYouGet />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default VpsHosting;
