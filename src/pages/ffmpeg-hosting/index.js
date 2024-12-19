import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import Testimonials from "@/components/commonComponent/testimonial";
import FeatureElement from "@/components/ffmpegHosting/featureElement";
import FFmpegFeaturesYouGet from "@/components/ffmpegHosting/ffmpegFeatureYouGet";
import FFmpegTechnicalSpecification from "@/components/ffmpegHosting/ffmpegTechincalSpecification";
import FFmpegVpsPlan from "@/components/ffmpegHosting/ffmpegVpsPlan";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "ffmpegHosting.json");
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

const FFmpeg = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, hostingGurantees } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <FFmpegVpsPlan />
      <WebHostingGurantees {...hostingGurantees} />
      <FFmpegTechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <FeatureElement />
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <FFmpegFeaturesYouGet />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default FFmpeg;
