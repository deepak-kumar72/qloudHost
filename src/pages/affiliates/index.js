import GetPaidMethod from "@/components/affiliate/getPaidMethod";
import HeroComponent from "@/components/commonComponent/heroComponent";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import FAQsSection from "@/components/commonComponent/faqSection";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/affiliate.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const Affiliate = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  // Destructure data for cleaner usage
  const { heroComponent, qlodHostServices } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <GetPaidMethod data={data}/>
      <QlodHostServices {...qlodHostServices} />
      <FAQsSection faqs={data.faqs} />
    </div>
  );
};

export default Affiliate;
