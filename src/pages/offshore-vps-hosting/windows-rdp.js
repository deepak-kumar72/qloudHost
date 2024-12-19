import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import AvailableWos from "@/components/windowsRdp/availabelWos";
import ChooseQloudHost from "@/components/windowsRdp/chooseQloudHost";
import RdpFeatureBanner from "@/components/windowsRdp/rdpfeaturebanner";
import WindowsRdpPlan from "@/components/windowsRdp/windowsRdpPlan";
import FAQsSection from "@/components/commonComponent/faqSection";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "windowrdp.json");
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

const WindowsVps = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, featureHeading, faqsData } = data;

  if (!data) {
    return <div>Loading...</div>; // Show a loading state in case data is unavailable
  }

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <WindowsRdpPlan />
      <ChooseQloudHost />
      <TechnicalSpecification />
      <AvailableWos />
      <QlodHostServices
        heading={featureHeading?.Heading}
        content={featureHeading?.subHeading}
        features={data.features}
      />
      <RdpFeatureBanner />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
    </div>
  );
};

export default WindowsVps;
