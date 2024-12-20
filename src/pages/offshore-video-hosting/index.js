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

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/videohosting.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const OffshoreVideo = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent, installationPanel } = data;

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
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default OffshoreVideo;
