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

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/streaming.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const StreamingServer = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <StreamingServerPlan data={data}/>
      <CustomSolution
        solTitle="Need Custom Solution Media Streaming Offshore Servers"
        solText="Server solutions that scale with your business to deliver exceptional performance on even the most demanding Streaming, IPTV media streaming projects."
      />
      <Guarantees
        subHeading="Boost your website performance with world-class Best & Cheap offshore streaming servers
        and guaranteed performance."
      />
      <TechnicalSpecification />
      <InstallationPanel
        title="Operating Systems"
        description="Install your desired OS in just a matter of seconds!"
        buttonText="Get Started Now"
        url="#explore"
        panelOptions={[
          { name: 'AlmaLinux', img: '/assets/icon/almaLinux.png' },
          { name: 'Rocky Linux', img: '/assets/icon/rockyLinux.png' },
          { name: 'Debian', img: '/assets/icon/debain.png' },
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'Windows', img: '/assets/icon/window-icon.png' },
        ]}
      />
      <StreamingServerQuality />
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <PopularStreamingUse />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default StreamingServer;
