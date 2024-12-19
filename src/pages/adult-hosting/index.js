import AdultHostingFeatureElement from '@/components/adultHosting/AdultHostingFeatureElement';
import AdultHostingPlans from '@/components/adultHosting/adultHostingPlans';
import DedicatedAdultPlan from '@/components/adultHosting/dedicatedAdultPlans';
import QloudGuarantees from '@/components/adultHosting/qloudGurantees';
import HeroComponent from '@/components/commonComponent/heroComponent';
import InstallationPanel from '@/components/commonComponent/installationPanel';
import QlodHostServices from '@/components/commonComponent/qlodHostServices';
import TechnicalSpecification from '@/components/commonComponent/technicalSpecification';
import Testimonials from '@/components/commonComponent/testimonial';
import CustomSolution from '@/components/streamingServer/customSolution';
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from '@/components/commonComponent/chatNow';
import fs from 'fs';
import path from 'path';

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), 'public', 'data', 'adultHosting.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    return {
      props: { data }, // Pass data as props
    };
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return { props: { data: null } }; // Handle errors gracefully
  }
}

const Adult = ({ data }) => {
  // Show fallback UI if data is missing
  if (!data) {
    return <div></div>;
  }

  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, qloudHostGurantees, customSol } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <AdultHostingPlans />
      <DedicatedAdultPlan />
      <CustomSolution {...customSol} />
      <QloudGuarantees subHeading={qloudHostGurantees.subHeading} />
      <TechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <AdultHostingFeatureElement />
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

export default Adult;
