import React from 'react'
import HeroSection from '../privacyPolicy/heroSection'
import AboutFeatures from './components/aboutFeature'
import QloudHostGurantees from './components/qloudHostGurantees'
// import InstallationPanel from '../commonComponent/installationPanel';
import TechnologyPartners from './components/technologyPartners';
import Resources from '../homeComponent/components/resources';

const About = () => {
  return (
    <div>
      <HeroSection
      subTitle=""
        title="About QloudHost"
        description="Founded in 2022, QloudHost has quickly risen to become a top contender in Offshore DMCA Ignored Hosting services. Our mission? To power your business with tailor-made hosting solutions and unbeatable 24/7 customer support. We go beyond expectations, fueled by a skilled team that keeps us leading the pack. Trust QloudHost for reliable, high-performance DMCA Ignored Hosting that drives your success forward!"
        imageSrc='/assets/Frame/about-us.png'     
      />
      <AboutFeatures/>
      <QloudHostGurantees/>
      <TechnologyPartners/>
      {/* <InstallationPanel
        title="Operating Systems"
        description="Work with your desired Operating system without any errors!"
       buttonText="Get Started Now"
        panelOptions={[
          { name: 'cPanel', img: '/assets/icon/cPanel.png' },
          { name: 'debian', img: '/assets/icon/debain.png' },
          { name: 'fedora', img: '/assets/icon/fedora.png'},
          { name: 'OpenSUSE', img: '/assets/icon/opensuse.png'},
          { name: 'plesk', img: '/assets/icon/plesk.png'},
        ]}
      /> */}
      <Resources />
    </div>
  )
}

export default About
