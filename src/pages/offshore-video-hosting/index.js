import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Guarantees from "@/components/streamingServer/qloudHostGurantees";
import VideocustomSolution from "@/components/videoHosting/videoCustomSol";
import VideoHostingFeatureElement from "@/components/videoHosting/videoHostingFeatureElement";
import VideoHostingPlan from "@/components/videoHosting/videoHostingPlan";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "videohosting.json");
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

const OffshoreVideo = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, featureHeading, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <VideoHostingPlan />
      <VideocustomSolution />
      <Guarantees subHeading={data.Guarantees.subHeading} />
      <TechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <VideoHostingFeatureElement />
      <QlodHostServices
        heading={featureHeading?.Heading}
        content={featureHeading?.subHeading}
        features={data.features}
      />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default OffshoreVideo;
