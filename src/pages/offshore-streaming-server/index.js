import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import CustomSolution from "@/components/streamingServer/customSolution";
import PopularStreamingUse from "@/components/streamingServer/popularStreamingUse";
import Guarantees from "@/components/streamingServer/qloudHostGurantees";
import StreamingServerPlan from "@/components/streamingServer/streamingServerPlan";
import StreamingServerQuality from "@/components/streamingServer/streamingServerQuality";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "streaming.json");
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

const StreamingServer = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroComponent, featureHeading, installationPanel, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <StreamingServerPlan />
      <CustomSolution
        solTitle="Need Custom Solution Media Streaming Offshore Servers"
        solText="Server solutions that scale with your business to deliver exceptional performance on even the most demanding Streaming, IPTV media streaming projects."
      />
      <Guarantees
        subHeading="Boost your website performance with world-class Best & Cheap offshore streaming servers and guaranteed performance."
      />
      <TechnicalSpecification />
      <InstallationPanel
        title="Operating Systems"
        description="Install your desired OS in just a matter of seconds!"
        buttonText="Get Started Now"
        url="#explore"
        panelOptions={[
          { name: "AlmaLinux", img: "/assets/icon/almaLinux.png" },
          { name: "Rocky Linux", img: "/assets/icon/rockyLinux.png" },
          { name: "Debian", img: "/assets/icon/debain.png" },
          { name: "Ubuntu", img: "/assets/icon/ubuntu.png" },
          { name: "Windows", img: "/assets/icon/window-icon.png" },
        ]}
      />
      <StreamingServerQuality />
      <QlodHostServices
        heading={featureHeading?.Heading}
        content={featureHeading?.subHeading}
        features={data.features}
      />
      <PopularStreamingUse />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default StreamingServer;
