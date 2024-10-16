import React from 'react'
import HeroSection from '../privacyPolicy/heroSection'
import AboutFeatures from './components/aboutFeature'
import QloudHostGurantees from './components/qloudHostGurantees'
import InstallationPanel from '../commonComponent/installationPanel';
import images from '../../constants/images';
import TechnologyPartners from './components/technologyPartners';

const About = () => {
  return (
    <div>
      <HeroSection
      subTitle=""
        title="About QloudHost"
        description="Hosting that respects your fundamental rights!"
        imageSrc=""      
      />
      <AboutFeatures/>
      <QloudHostGurantees/>
      <TechnologyPartners/>
      <InstallationPanel
        title="Operating Systems"
        description="Work with your desired Operating system without any errors!"
       buttonText="Get Started Now"
        panelOptions={[
          { name: 'cPanel', img: images.cpanel },
          { name: 'debian', img: images.directAdmin },
          { name: 'fedora', img: images.cyberPanel},
          { name: 'OpenSUSE', img: images.ubuntu },
          { name: 'CentOS', img: images.centos },
          { name: 'plesk', img: images.centos },
        ]}
      />
    </div>
  )
}

export default About
