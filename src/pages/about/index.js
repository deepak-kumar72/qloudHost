import AboutFeatures from '@/components/aboutQloudhost/aboutFeature';
import QloudHostGurantees from '@/components/aboutQloudhost/qloudHostGurantees';
import TechnologyPartners from '@/components/aboutQloudhost/technologyPartners';
import Resources from '@/components/homeComponent/resources';
import HeroSection from '@/components/privacyPolicy/heroSection';

export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/about.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const AboutPage = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  // Destructure data for cleaner usage
  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent} />
      <AboutFeatures data={data}/>
      <QloudHostGurantees data={data}/>
      <TechnologyPartners />
      <Resources />
    </div>
  );
};

export default AboutPage;
