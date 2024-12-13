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
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder or project directory
    const filePath = path.join(process.cwd(), 'public', 'data', 'dedicatedServer.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    return {
      props: { data }, // Pass data as props
    };
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return { props: { data: null } }; // Handle errors gracefully
  }
}

const Dedicated = ({ data }) => {
  // Show fallback UI if data is missing
  if (!data) {
    return <div>Error loading page data.</div>;
  }

  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, enterPriseGrade, featureHeading, features, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <DedicatedServerPlan />
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
