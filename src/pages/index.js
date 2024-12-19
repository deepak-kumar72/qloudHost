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
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder or project directory
    const filePath = path.join(process.cwd(), "public", "data", "home.json");
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

export default function HomePage({ data }) {
  // Show fallback UI if data is missing
  if (!data) {
    return <div></div>;
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
      <HostingPlans plansData={data.plansData}  />
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
}
