import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import WebHostingGurantees from "@/components/offShoreHosting/webHostingGurantees";
import OffWordpressPlan from "@/components/offshoreWordpressHosting/offshoreWordpressPlan";
import WordpressFeatureElement from "@/components/offshoreWordpressHosting/wordpressFeatureElement";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Read JSON file from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "wordprssHosting.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    return {
      props: { data }, // Pass the data as props
    };
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return { props: { data: null } }; // Handle errors gracefully
  }
}

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
      <OffWordpressPlan />
      <WebHostingGurantees
        title="QloudHost Guarantees"
        subHeading="Allow our Best & Cheap Offshore hosting in Netherlands to exceed your expectations."
      />
      <WordpressFeatureElement />
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
