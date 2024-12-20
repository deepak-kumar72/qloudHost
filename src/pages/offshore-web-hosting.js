import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import OffshoreFeatureElement from "@/components/offShoreHosting/offshoreFeatureElement";
import OffShoreHostingPlan from "@/components/offShoreHosting/offShoreHostingPlan";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/webHosting.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const Offshorewebhosting = ({ data }) => {
  if (!data) {
    return <div></div>; // Better fallback UI
  }

  const { heroComponent, featureHeading, features, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <OffShoreHostingPlan data={data}/>
      <WebHostingGurantees 
        title="QloudHost Guarantees"
        subHeading="Allow our Best & Cheap Offshore hosting in Netherlands to exceed your expectations."
      />
      <TechnicalSpecification />
      <OffshoreFeatureElement data={data}/>
      <QlodHostServices
        heading={featureHeading.Heading}
        content={featureHeading.subHeading}
        features={features}
      />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default Offshorewebhosting;
