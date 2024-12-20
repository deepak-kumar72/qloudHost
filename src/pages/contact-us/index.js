import ContactCompo from "@/components/contactUs/contactCompo";
import ContactSupport from "@/components/contactUs/contactSupport";
import HeroSection from "@/components/privacyPolicy/heroSection";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/contactUs.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const ContactUs = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  // Destructure data for cleaner usage
  const { heroSection } = data;

  return (
    <div>
      <HeroSection {...heroSection} />
      <ContactSupport data={data}/>
      <ContactCompo />
    </div>
  );
};

export default ContactUs;
