import ContactCompo from "@/components/contactUs/contactCompo";
import ContactSupport from "@/components/contactUs/contactSupport";
import HeroSection from "@/components/privacyPolicy/heroSection";
import fs from "fs";
import path from "path";

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), "public", "data", "contactUs.json");
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

const ContactUs = ({ data }) => {
  // Destructure data for cleaner usage
  const { heroSection } = data;

  return (
    <div>
      <HeroSection {...heroSection} />
      <ContactSupport />
      <ContactCompo />
    </div>
  );
};

export default ContactUs;
