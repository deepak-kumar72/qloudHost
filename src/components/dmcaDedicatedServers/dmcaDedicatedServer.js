import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import images from '../../constants/images';

const DmcaDedicatedServer = () => {
  return (
    <div>
      <HeroComponent
        title="Best DMCA Ignored Dedicated Server"
        description="Host your IPTV or movie site offshore in Amsterdam with powerful DMCA-ignored streaming servers. Get 100% uptime, unmetered ports, white-label IP, and a fully redundant network. Secure, reliable, and unshared."
        button1Text="Get Started Now"
        button1Link=""
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc={images.heroImage2}
        moneyBackText="14-Day Money-Back Guarantee"
      />
    </div>
  )
}

export default DmcaDedicatedServer
