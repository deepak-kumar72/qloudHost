import EnterpriseGrade from '@/components/commonComponent/enterpriseGrade';
import HeroComponent from '@/components/commonComponent/heroComponent';
import InstallationPanel from '@/components/commonComponent/installationPanel';
import QlodHostServices from '@/components/commonComponent/qlodHostServices';
import Testimonials from '@/components/commonComponent/testimonial';
import WebsiteCover from '@/components/commonComponent/websiteCover';
import DedicatedServerPlan from '@/components/dedicatedServer/dedicatedServerPlan';
import DedicatedHostingSolution from '@/components/dmcaDedicatedServers/dedicatedHostingSolution';
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from '@/components/commonComponent/chatNow';

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/dedicatedServer.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const Dedicated = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent, installationPanel, enterPriseGrade, featureHeading, features, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <DedicatedServerPlan data={data}/>
      <EnterpriseGrade
        heading={enterPriseGrade.heading}
        subHeading={enterPriseGrade.subHeading}
      />
      <QlodHostServices
        heading={featureHeading.Heading}
        content={featureHeading.subHeading}
        features={features}
      />
      <DedicatedHostingSolution />
      <InstallationPanel {...installationPanel} />
      <WebsiteCover />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default Dedicated;
