import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import OffshoreFeatureElement from "@/components/offShoreHosting/offshoreFeatureElement";
import OffShoreHostingPlan from "@/components/offShoreHosting/offShoreHostingPlan";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "webHosting.json");
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

const Offshorewebhosting = ({ data }) => {
  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div>Loading...</div>; // Show loading state in case of an error
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <OffShoreHostingPlan />
      <WebHostingGurantees
        title="QloudHost Guarantees"
        subHeading="Allow our Best & Cheap Offshore hosting in Netherlands to exceed your expectations."
      />
      <TechnicalSpecification />
      <OffshoreFeatureElement />
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

export default Offshorewebhosting;
