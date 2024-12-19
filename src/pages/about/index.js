import AboutFeatures from '@/components/aboutQloudhost/aboutFeature';
import QloudHostGurantees from '@/components/aboutQloudhost/qloudHostGurantees';
import TechnologyPartners from '@/components/aboutQloudhost/technologyPartners';
import Resources from '@/components/homeComponent/resources';
import HeroSection from '@/components/privacyPolicy/heroSection';
import fs from 'fs';
import path from 'path';

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch JSON data from the public folder
    const filePath = path.join(process.cwd(), 'public', 'data', 'about.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    return {
      props: { data }, // Pass data as props
    };
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return { props: { data: null } }; // Handle errors gracefully
  }
}

const AboutPage = ({ data }) => {
  // Show fallback UI if data is missing
  if (!data) {
    return <div></div>;
  }

  // Destructure data for cleaner usage
  const { heroComponent } = data;

  return (
    <div>
      <HeroSection {...heroComponent} />
      <AboutFeatures />
      <QloudHostGurantees />
      <TechnologyPartners />
      <Resources />
    </div>
  );
};

export default AboutPage;
