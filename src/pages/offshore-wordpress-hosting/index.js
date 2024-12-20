import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import OffWordpressPlan from "@/components/offshoreWordpressHosting/offshoreWordpressPlan";
import WordpressFeatureElement from "@/components/offshoreWordpressHosting/wordpressFeatureElement";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import React from "react";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/wordprssHosting.json"); // Adjust URL as needed
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const Wordpress = ({ data }) => {
  // Fallback if no data is provided
  if (!data) {
    return <div></div>;
  }

  // Destructure data for cleaner usage
  const { heroComponent, featureHeading, features, faqsData } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <OffWordpressPlan data={data}/>
      <WebHostingGurantees 
        title="QloudHost Guarantees"
        subHeading="Allow our Best & Cheap Offshore hosting in Netherlands to exceed your expectations."
      />
      <WordpressFeatureElement data={data}/>
      <QlodHostServices
        heading={featureHeading.Heading}
        content={featureHeading.subHeading}
        features={features}
      />
      <FAQsSection faqs={faqsData} />
      <ChatNow />
    </div>
  );
};

export default Wordpress;
