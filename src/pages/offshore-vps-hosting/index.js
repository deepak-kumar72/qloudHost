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

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/offshoreVps.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const VpsHosting = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent, installationPanel } = data;

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
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <FeaturesYouGet />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default VpsHosting;
