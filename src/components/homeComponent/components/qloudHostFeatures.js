import React from 'react';
import featureImg from "../../../assets/feature/featureImg.png";
import images from '../../../constants/images';

const  qloudFeature =[
    {
        id: 1,
        imgsrc: images.dataPrivacy,
        title: "Data Privacy",
        description: "Your website is completely safe in our hands because we understand the value of your privacy. That’s why we use smart features to ensure that you are untraceable on the internet.",
    },
    {
        id: 2,
        imgsrc: images.flexibiltyOfContent,
        title: "Flexibility of Content",
        description: "Post as much DMCA ignored content on your website as you want without restriction or interruption from our side!",
    },
    {
        id: 3,
        imgsrc: images.antiddosProtection,
        title: "Anti-DDoS Protection",
        description: "QloudHost uses Anti-DDoS equipped servers to ensure impenetrable security and maximum availability of your website on the internet.",
    },
    {
        id: 4,
        imgsrc: images.fullRootAccess,
        title: "Full Root Access",
        description: "Enjoy complete control over your server resources and customize it as per preferences without any restrictions or interruptions.",
    },
    {
        id: 5,
        imgsrc: images.weeklyBackup,
        title: "Weekly Backup",
        description: "QloudHost has created a smart data backup feature to make your website’s data safer and more secure.",
    },
    {
        id: 6,
        imgsrc: images.prioritizedSupport,
        title: "Prioritized Support",
        description: "Get instant solutions to your problem with a dedicated team of technical experts working 24*7 to support you at every step of your journey.",
    },
]

const QloudHostFeatures = () => {
  return (
    <div className='qloudfeatures'>
    <div className='container'>
    <h2 className="text-center text-white mb-3 mt-5 m-auto pt-5">QloudHost Features</h2>
    <p className="text-center text-white w-50 mb-5 planHead-con m-auto">Enjoy your privacy on the internet with our powerful features that let you host your website with Impenetrable security.</p>
    <div className='row g-3 feature-row m-auto  pb-5'>
    {qloudFeature.map((feature)=>(
    <div key={feature.id} className='col-12 col-md-6 col-lg-4'>
    <div className='feature-card'>
        <img src={feature.imgsrc} alt={feature.title} className='mb-4'/>
        <h3 className='mb-3'>{feature.title}</h3>
        <span className='mb-3'>{feature.description}</span>
        </div>
    </div>
    ))}
       
    </div>
    </div>
      
    </div>
  )
}

export default QloudHostFeatures
