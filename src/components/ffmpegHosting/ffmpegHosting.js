import React from 'react'
import HeroComponent from '../commonComponent/heroComponent'
import FFmpegVpsPlan from './components/ffmpegVpsPlan';
import WebHostingGurantees from '../offShoreHosting/components/webHostingGurantees';
import FFmpegTechnicalSpecification from './components/ffmpegTechincalSpecification';
import InstallationPanel from '../commonComponent/installationPanel';
import FeatureElement from './components/featureElement';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FFmpegFeaturesYouGet from './components/ffmpegFeatureYouGet';
import FAQsSection from '../commonComponent/faqSection';
import { LuShieldCheck } from "react-icons/lu";

const options = [
    "KVM Virtualization", 
    "NVMe SSD Storage", 
    "Full Root Access", 
    "Instant Setup"
  ];

  const features = [
    {
      img: '/assets/serviceImg/high-performance_1.svg',
      title: "High-Performance Hardware",
      description:
        "Ensure fast processing and smooth transcoding of videos with NVMe SSD storage and powerful multi-core processors that are optimized for media-heavy tasks like FFmpeg encoding and decoding.",
      link: "",
    },
    {
      img: '/assets/serviceImg/full-root-access_1.svg',
      title: "Full Root Access",
      description: `Offer full root access for advanced users, enabling them to customize the server, install required libraries, and tweak FFmpeg settings to their exact needs for optimal media processing.`,
      link: "",
    },
    {
      img: '/assets/serviceImg/pre-installed.svg',
      title: "Pre-installed FFmpeg Libraries",
      description:
        "Highlight that FFmpeg libraries are pre-installed, providing an easy setup for users to immediately start working with video/audio processing without manual installation.",
      link: "",
    },
    {
      img: '/assets/serviceImg/high-speed-bandwidth.svg',
      title: "High-Speed Bandwidth",
      description:
        "Emphasize the benefit of unlimited or high-bandwidth allocation for smooth streaming and data transfer, ensuring that users can stream or process media without throttling or interruption.",
      link: "",
    },
    {
      img: '/assets/serviceImg/DC-location.svg',
      title: "Powerful DC Location",
      description: `Highlight the use of a high-performance data center located in the Netherlands, ensuring low-latency hosting for European and global users, providing fast, reliable access to media processing and streaming.`,
      link: "",
    },
    {
      img: '/assets/serviceImg/robust-security.svg',
      title: "Robust Security",
      description:
        "Include robust security measures, such as DDoS protection and encryption, to ensure that both the media files and users' data remain secure from external threats, maintaining privacy and uptime.",
      link: "",
    },
  ];

  const faqsData = [
    {
      question: "What is FFmpeg Hosting?",
      answer: "In very simple words, FFmpeg Hosting refers to a special type of server hosting environment for audio and video files using FFmpeg multimedia framework. This type of hosting is perfect for media-specific projects like live streaming, podcasts, and more. "
    },
    {
      question: "How does QloudHost ensure fast media processing?",
      answer: "QloudHost offers its servers, backed-by top performing hardware, ultra low-latency network and pre-installed FFmpeg software. This sort of setup is highly demanding to ensure fast media processing, which is offered by none other than QloudHost."
    },
    {
      question: "Can I scale my resources as my media project grows?",
      answer: "Absolutely, You Can! QloudHost offers a scalable FFmpeg Hosting plan that allows you to upgrade resources like CPU, RAM and storage as per the need. This further ensures that your media project can handle growing demands without interruptions."
    },
    {
      question: "What level of control do I have over my server?",
      answer: "You get full server access, enabling complete control over configurations, software installations and customizations to meet the specific needs of your media projects."
    },
    {
      question: "Where is QloudHost’s FFmpeg Hosting located?",
      answer: "QloudHost’s FFmpeg Hosting servers are located in the data centers of US/ UK/ NT. It ensures ultra-low latency and faster streaming for users across the globe. You can choose the data center location falling near to your targeted audience for high performance."
    },
    {
      question: "How fast will my server be set up?",
      answer: "At QloudHost, you get swift server deployment! In a matter of minutes, QloudHost sets up your server right after the purchasing is done. This further allows you to focus more on the content of media projects and maximize productivity without delays.  "
    },
    {
      question: "What kind of support is available?",
      answer: "You get multiple support channels to connect from via 24/7 LiveChat support, Ticketing system, email and phone support as well. QloudHost’s team works round-the-clock to assist you with server setup, troubleshooting and optimizing FFmpeg configuration to ensure smoother operations. "
    },
  ];
  

const FFmpegHosting = () => {
  return (
    <div>
      <HeroComponent
        subTitle='Robust FFmpeg Hosting'
        title="Best FFmpeg Hosting Server"
        description="Enjoy blazing-fast FFmpeg Hosting with Offshore DMCA Ignored VPS Hosting. Powered by KVM Virtualization, NVMe SSDs, and full root access, it offers instant setup, untraceable footprints, and robust data protection for seamless multimedia hosting and streaming."
        button1Text="Get Started Now"
        button1Link="explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/Robust-FFmpeg-Hosting.webp'
        moneyBackText={
          <>
            <LuShieldCheck className="me-2" /> 14-Day Money-Back Guarantee
          </>
        }
        options={options} 
      />
      <FFmpegVpsPlan/>
      <WebHostingGurantees
      title='Why Choose QloudHost as your FFmpeg Hosting Server?'
      subHeading="Boost your multimedia with FFmpeg Hosting on DMCA-ignored Offshore servers. Enjoy seamless hosting, streaming, and media processing with world-class performance and reliability."/>
      <FFmpegTechnicalSpecification/>
      <InstallationPanel
        title="Available Operating Systems"
        description="Work with your desired Operating system without any errors!"
        buttonText="Get Started Now"
        url="explore"
        panelOptions={[
          { name: "AlmaLinux", img: '/assets/icon/almaLinux.png' },
          { name: "Rockey Linux", img: '/assets/icon/rockyLinux.png'},
          { name: "Debian", img: '/assets/icon/debain.png' },
          { name: "Ubuntu", img: '/assets/icon/ubuntu.png'},
          { name: "Windows", img: '/assets/icon/window-icon.png'},
        ]}
      />
      <FeatureElement/>
      <QlodHostServices
        heading="What You Get with Your FFmpeg Hosting"
        content="Looking for some good reasons to choose Qloudhost? Here’s the reason of our confidence. "
        features={features}
      />
      <FFmpegFeaturesYouGet/>
      <Testimonials/>
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
    
  )
}

export default FFmpegHosting;
