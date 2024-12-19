import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import NetherLandStreamingFeature from "@/components/netherlandStreamingServer/netherlandStreamingFeature";
import NetherLandStreamingPlan from "@/components/netherlandStreamingServer/netherlandStreamingPlan";
import OpenTicket from "@/components/netherlandStreamingServer/openTicket";
import PopularStreamingUse from "@/components/streamingServer/popularStreamingUse";
import Guarantees from "@/components/streamingServer/qloudHostGurantees";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "netherlandStreaming.json");
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

const NetherlandStreaming = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, featureHeading, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <NetherLandStreamingPlan />
      <OpenTicket />
      <Guarantees
        subHeading="Boost your website performance with world-class Best & Cheap Netherlands streaming servers and guaranteed performance."
      />
      <TechnicalSpecification />
      <InstallationPanel
        title="Operating Systems"
        description="Install your desired OS in just a matter of seconds!"
        buttonText="Get Started Now"
        url="#explore"
        panelOptions={[
          { name: "cPanel", img: "/assets/icon/cPanel.png" },
          { name: "CyberPanel", img: "/assets/icon/cyberPanel.png" },
          { name: "Ubuntu", img: "/assets/icon/ubuntu.png" },
          { name: "Windows", img: "/assets/icon/window-icon.png" },
          { name: "Debian", img: "/assets/icon/debain.png" },
        ]}
      />
      <NetherLandStreamingFeature />
      <QlodHostServices
        heading={featureHeading?.Heading}
        content={featureHeading?.subHeading}
        features={data.features}
      />
      <PopularStreamingUse />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default NetherlandStreaming;
