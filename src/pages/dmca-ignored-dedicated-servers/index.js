import EnterpriseGrade from "@/components/commonComponent/enterpriseGrade";
import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import WebsiteCover from "@/components/commonComponent/websiteCover";
import DedicatedHostingSolution from "@/components/dmcaDedicatedServers/dedicatedHostingSolution";
import DmcaDedicatedPlan from "@/components/dmcaDedicatedServers/dmcaDedicatedServerPlan";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "dmcaDedicatedServer.json");
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

const DmcaDedicated = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, qloudHostGurantees, customSol, enterpriseGrade } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <DmcaDedicatedPlan />
      <EnterpriseGrade {...enterpriseGrade} />
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <DedicatedHostingSolution />
      <InstallationPanel {...installationPanel} />
      <WebsiteCover />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default DmcaDedicated;
