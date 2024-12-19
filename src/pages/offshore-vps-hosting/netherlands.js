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
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "vpsneitherlandoffshore.json");
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

const VpsNetherlands = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, featureHeading, faqsData } = data;

  if (!data) {
    return <div>Loading...</div>; // Show a loading state in case data is unavailable
  }

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
        heading={featureHeading?.Heading}
        content={featureHeading?.subHeading}
        features={data.features}
      />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default VpsNetherlands;
