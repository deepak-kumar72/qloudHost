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

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/ffmpegHosting.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const FFmpeg = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent, installationPanel, hostingGurantees } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <FFmpegVpsPlan />
      <WebHostingGurantees {...hostingGurantees} />
      <FFmpegTechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <FeatureElement data={data}/>
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <FFmpegFeaturesYouGet data={data}/>
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default FFmpeg;
