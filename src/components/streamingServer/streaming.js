import React from 'react'
import HeroComponent from '../commonComponent/heroComponent';
import StreamingServerPlan from './components/streamingServerPlan';
import InstallationPanel from '../commonComponent/installationPanel';
import TechnicalSpecification from '../commonComponent/technicalSpecification';
import StreamingServerQuality from './components/streamingServerQuality';
import QlodHostServices from '../commonComponent/qlodHostServices';
import Testimonials from '../commonComponent/testimonial';
import FAQsSection from '../commonComponent/faqSection';
import PopularStreamingUse from './components/popularStreamingUse';
import CustomSolution from './components/customSolution';
import Guarantees from './components/qloudHostGurantees';
import Link from "next/link";


const options = [
  "Fast, Secure, Reliable",
  "DDoS Protection",
  "Strong Infrastructure",
  "Cost-effective & Scalable"
];

const features = [
    {img: '/assets/serviceImg/secure-offshore-location.svg',
      title: "Secure Offshore Location",
      description:`Our <a href='/offshore-dedicated-servers/' class='faq-link'>Offshore Dedicated server</a>  are built far away from the origin country to bypass all the country-specific restrictions and allow you to post your desired DMCA ignored content without any arbitrary restrictions or interruptions.`,
      link: "",
    },
    {img: '/assets/serviceImg/anonymous-service.svg',
      title: "100% Anonymous Service",
      description:`We are running our offshore streaming servers at the best locations that are especially <a href='/' class='faq-link'>popular for offshore hosting services</a>  and help us to decrease your visibility on the internet making you untraceable.`,
      link: "",
    },
    {img: '/assets/serviceImg/os-choice.svg',
      title: "OS Choice",
      description: `All thanks to our resilient server that is compatible with all the Operating systems, we can offer you a wide range of options to choose and work with your desired OS anytime and anywhere!!`,
      link: "",
    },
    {img: '/assets/serviceImg/ddos.svg',
      title: "DDoS Protection",
      description: `Our servers come with the best and industry-standard security features that will help you to save your website against illegitimate traffic and ensure your maximum availability on the internet. .`,
      link: "",
    },
    {img: '/assets/feature/uptime.svg',
      title: "99.9% Uptime",
      description: `Why go anywhere else when you get maximum uptime here? Yes!! Our services come with a 99.9% uptime guarantee to provide full assurance of your availability on the internet.`,
      link: "",
    },
    {img: '/assets/serviceImg/secure-offshore-location.svg',
      title: "24/7 Tech Support",
      description: `We have built a dedicated team of technical experts that are working 24*7 to help you at every stage of your journey and ensure that you can set up your offshore streaming servers without any errors!`,
      link: "",
    },
    
  ];

  const faqsData = [
    {
      question: "What is Offshore streaming server?",
      answer: <>Offshore streaming servers are especially optimized servers that are used to perform bufferless online video or game streaming on the video platforms such as <Link href='https://discord.com/' className='faq-link'>Discord</Link> , YouTube, 
      Facebook streaming and much more.</>
    },
    {
      question: "How does Video Streaming Server Work?",
      answer: <>Offshore streaming servers work pretty much similar to regular servers but one aspect that creates the difference is that in streaming servers, 
      audio and <Link href='' className='faq-link'>videos</Link> are broken into smaller data packets that are shared the same as the files are shared from the server to the client.</>
    },
    {
      question: "How Long Does It Take for Offshore Streaming Server Setup?",
      answer: <>Once you finish the payment, <Link href='/contact-us/' className='faq-link'></Link>our team of technical experts will immediately start working on your servers to complete the setup as soon as possible,
      and your servers will be ready to use within 2-3 days.</>
    },
    {
      question: "Are Your Offshore Streaming Servers Managed?",
      answer: `No, our offshore streaming servers are unmanaged to ensure that you get complete resilience and customisation options with your servers so that you 
      can customise your resources as per your needs and requirements. `
    },
    {
      question: "Can I upgrade my Offshore Streaming Servers?",
      answer: <>Yes…..! Along with our normal <Link href='/offshore-hosting/' className='faq-link'>offshore hosting plans</Link> , we also offer you upgraded plans that comes with more powerful resources and features. 
      You can anytime shift to our upgraded plans without any complex formalities. </>
    },
    {
      question: "What Payment Methods Do You Accept?",
      answer: <>We use multiple payment methods such as PayPal, debit card, credit card,<Link href='https://g.co/kgs/g41cnt' className='faq-link'>UPI</Link>  and much more to ensure that you can easily avail our services 
      from any country with any method you are comfortable! </>
    },
  ];

const Streaming = () => {
  return (
    <div>
    <HeroComponent
    subTitle='Offshore Streaming Server'
    title="Robust offshore Streaming Server"
        description="Host your IPTV or movie site offshore in Amsterdam with powerful DMCA-ignored streaming servers. Get 100% uptime, unmetered ports, white-label IP, and a fully redundant network. Secure, reliable, and unshared."
        button1Text="Get Started Now"
        button1Link="#explore"
        button2Text="Explore Features"
        button2Link="" // Link for the second button
        imageSrc='/assets/Frame/robust-offshore-streaming-server.webp'
        moneyBackText="14-Day Money-Back Guarantee"
        options={options} // Pass the options to the HeroComponent
      />
      <StreamingServerPlan/>
      <CustomSolution
        solTitle="Need Custom Solution Media Streaming Offshore Servers"
        solText="Server solutions that scale with your business to deliver exceptional performance on even the most demanding Streaming, IPTV media streaming projects."
      />
      <Guarantees
        subHeading="Boost your website performance with world-class Best & Cheap offshore streaming servers
          and guaranteed performance."
      />
      <TechnicalSpecification/>
      <InstallationPanel
        title="Operating Systems"
        description="Install your desired OS in just a matter of seconds!"
        buttonText="Get Started Now"
        url='#explore'
        panelOptions={[
          { name: 'AlmaLinux', img: '/assets/icon/almaLinux.png'},
          { name: 'Rocky Linux', img: '/assets/icon/rockyLinux.png'},
          { name: 'Debian', img: '/assets/icon/debain.png'},
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'Windows', img: '/assets/icon/window-icon.png' },
        ]}
      />
      <StreamingServerQuality/>
      <QlodHostServices 
      heading="Some Good Reasons To Go With Us!"
      content="Why choose QloudHost? Well, the clear and confident answer is our features that are mentioned below! "
      features={features} />
      <PopularStreamingUse/>
      <Testimonials/>
      <FAQsSection
        faqs={faqsData} 
      />
    </div>
  )
}

export default Streaming;
