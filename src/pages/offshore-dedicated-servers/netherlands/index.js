import EnterpriseGrade from "@/components/commonComponent/enterpriseGrade";
import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import WebsiteCover from "@/components/commonComponent/websiteCover";
import DedicatedNetherlandPlan from "@/components/dedicatedServerNetherland.js/dedicatedNetherlandPlan";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "dedicatedServerNetherland.json");
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

const DedicatedNetherlands = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, installationPanel } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <DedicatedNetherlandPlan />
      <EnterpriseGrade
        heading={data.enterPriseGrade.heading}
        subHeading={data.enterPriseGrade.subHeading}
      />
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <InstallationPanel {...installationPanel} />
      <WebsiteCover />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default DedicatedNetherlands;
