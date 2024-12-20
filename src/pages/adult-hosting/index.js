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

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/adultHosting.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const Adult = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, qloudHostGurantees, customSol } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <AdultHostingPlans data={data}/>
      <DedicatedAdultPlan data={data}/>
      <CustomSolution {...customSol} />
      <QloudGuarantees subHeading={qloudHostGurantees.subHeading} />
      <TechnicalSpecification />
      <InstallationPanel {...installationPanel} />
      <AdultHostingFeatureElement data={data}/>
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
