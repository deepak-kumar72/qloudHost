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

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/highPerformanceVps.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const HighPerformanceVpsHosting = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

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
