import React from "react";
import HeroComponent from "@/components/commonComponent/heroComponent";
import HostingPlans from "@/components/homeComponent/hostingPlans";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QloudHostFeatures from "@/components/homeComponent/qloudHostFeatures";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import Services from "@/components/homeComponent/services";
import BlogSection from "@/components/homeComponent/blogSection";
import Resources from "@/components/homeComponent/resources";
import Testimonials from "@/components/commonComponent/testimonial";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/home.json"); // Adjust URL as needed
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const HomePage = ({ data }) => {
  // Fallback if no data is provided
  if (!data) {
    return <div>Error loading page data.</div>;
  }

  // Destructure data for cleaner usage
  const {
    heroComponent,
    installationPanel,
    featureHeading,
    features,
    servicesData1,
    faqsData,
  } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <HostingPlans plansData={data.plansData} />
      <TechnicalSpecification />
      <QloudHostFeatures />
      <InstallationPanel {...installationPanel} />
      <QlodHostServices
        heading={featureHeading.Heading}
        content={featureHeading.subHeading}
        features={features}
      />
      <Services servicesData={servicesData1} />
      <BlogSection />
      <Resources />
      <Testimonials />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default HomePage;
