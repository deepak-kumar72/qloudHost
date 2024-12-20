import EnterpriseGrade from "@/components/commonComponent/enterpriseGrade";
import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import WebsiteCover from "@/components/commonComponent/websiteCover";
import DedicatedHostingSolution from "@/components/dmcaDedicatedServers/dedicatedHostingSolution";
import DmcaDedicatedPlan from "@/components/dmcaDedicatedServers/dmcaDedicatedServerPlan";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/dmcaDedicatedServer.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const DmcaDedicated = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, enterpriseGrade } = data;

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
