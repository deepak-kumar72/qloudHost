import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import Testimonials from "@/components/commonComponent/testimonial";
import AvailableWos from "@/components/windowsRdp/availabelWos";
import ChooseQloudHost from "@/components/windowsRdp/chooseQloudHost";
import RdpFeatureBanner from "@/components/windowsRdp/rdpfeaturebanner";
import WindowsRdpPlan from "@/components/windowsRdp/windowsRdpPlan";
import FAQsSection from "@/components/commonComponent/faqSection";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/windowrdp.json"); // Adjust the URL as necessary
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const WindowsVps = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <WindowsRdpPlan />
      <ChooseQloudHost />
      <TechnicalSpecification />
      <AvailableWos />
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <RdpFeatureBanner data={data}/>
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
    </div>
  );
};

export default WindowsVps;
