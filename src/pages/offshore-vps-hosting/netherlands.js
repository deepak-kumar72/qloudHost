import QloudGuarantees from "@/components/adultHosting/qloudGurantees";
import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import FAQsSection from "@/components/commonComponent/faqSection";
import NeitherlandVpFeatureElement from "@/components/neitherlandOffshoreVps/neitherlandVpsFeatureElement";
import NeitherLandOffshoreVpsPlan from "@/components/neitherlandOffshoreVps/neitherlandVpsPlan";
import ChatNow from "@/components/commonComponent/chatNow";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/vpsneitherlandoffshore.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const VpsNetherlands = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent, installationPanel } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <NeitherLandOffshoreVpsPlan />
      <QloudGuarantees
        subHeading="Boost your website performance with world-class Best & Cheap Netherlands offshore VPS Hosting servers and guaranteed performance."
      />
      <TechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <NeitherlandVpFeatureElement />
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

export default VpsNetherlands;
