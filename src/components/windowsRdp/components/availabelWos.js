
import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";


const AvailableWos = () => {

    const osOption = [{
title: 'Windows Server 2019',
imgUrl: '/assets/icon/windows-2019.png'

    },
    {
      
      title: 'Windows Server 2022',
      imgUrl: '/assets/icon/windows-2022.png'

    }
    ];
  return (
    <>
    <div className='install-panel'>
    <div className="container py-5">
      <div className="row panel-sec m-auto">
        <div className="col-md-7 mb-4">
          <h2 className='mb-4 w-100'>Available Windows Operating Systems</h2>
          <p className='planHead-con w-100 mb-4'>Work with your desired Operating system without any errors!</p>
          <Link href='#explore' smooth={true} duration={200}>
                <button className="start-now-btn mb-4">
                  Get Started Now
                  <FaArrowRight className="ms-4" />
                </button>
              </Link>
        </div>
        <div className="col-md-5 m-auto">
          <div className="d-flex flex-column align-items-center gap-3 panel-item">
            {osOption.map((option, index) => (
              <button key={index}  size="lg" className=" os-opt w-50">
              <Image src={option.imgUrl} alt={option.title} width={1000} height={1000} className='h-100'/>
                
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='container'>
        <div className='row py-5 text-center feature-element-sec'>
        <h2 className='mb-3'>What is an offshore Windows VPS?</h2>
        <p className='w-75 m-auto mb-2'>An offshore Windows VPS (Virtual Private Server) is a virtual server hosted in a country different from the user’s own, typically chosen for enhanced privacy, data security, or favourable legal environments. </p>
        <p className='w-75 m-auto'>These servers run on Windows operating systems and provide users with dedicated resources, root access, and the ability to install custom software, all while benefiting from the hosting country’s legal protections and data privacy laws.</p>
      </div>
      <div className='row pb-5 text-center feature-element-sec'>
        <h2 className='mb-3'>How does an offshore Windows VPS work?</h2>
        <p className='w-75 m-auto mb-2'>QloudHost offers Microsoft enthusiasts feature-packed, Semi-Managed offshore Windows VPS plans that ignore DMCA complaints. You can install your preferred Windows Server version, and the setup takes just a few minutes after you place your order.</p>
        <p className='w-75 m-auto'>Every client gets full root access, giving you complete control over your VPS environment. This means you can customize your server and install any Microsoft products you need.</p>
      </div>
        </div>
    </>
  );
};

export default AvailableWos;
