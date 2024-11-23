import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";


// Custom Arrow Components
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <FaArrowRight className='testimonial-arrow' />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <FaArrowLeft className='testimonial-arrow'/>
        </div>
    );
};

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Testimonial data array
    const testimonialsData = [
        {   imgUrl: '/assets/testimonial1.png',
            name: 'Peters',
            role: 'Qloud Host is the best Offshore hosting…',
            feedback: 'Qloud Host is the best Offshore hosting one will always desire to have. Their support is always very much ready to help most especially Isha who handled my little hitches like a professional that he is. I will always recommend Qloud Host at all times to friends and Family.'
        },
        {
            imgUrl: '/assets/testimonial2.png',
            name: 'Vihari Anand',
            role: 'qloud host is the best hosting service…',
            feedback: 'qloud host is the best hosting service provides excellent when its matter of safety and security. isha pandey guiding me in and every step to make the hosting process simple and succesful. she is best in handling the customer issues 24x7.'
        },
        {
            imgUrl: '/assets/testimonial3.png',
            name: 'With Niolex',
            role: 'These guys are excellent',
            feedback: 'These guys are excellent. After purchasing the service yawin has assigned me a dedicated support member who setup my server in quick and helped me to setup my apps. Any issue that i had was resolved quick. Their speed is very developer friendly. I recommend them unreservedly.'
        },

        {
            imgUrl: '/assets/testimonial4.png',
            name: 'Joram Dymisster',
            role: 'BEST HOSTING SERVICE',
            feedback: 'Thanks to the Ranjeet,Aisha and Whole Team of Qloudhost.Am happy with there support and understanding.At some point i was having problems with my payment gateway.I ask them and they agree to extend my overdue invoice time to let me solve the problem without suspend my services.'
        },
        {
            imgUrl: '/assets/testimonial5.png',
            name: 'Adam Johnson',
            role: 'Qloud host is the best',
            feedback: 'Qloud is the best hosting service. Servers are super fast, the support team is fantastic just a fantastic service you also do not have to wait for someone to activate the service after purchase the system immediately activates it for you which is amazing and also I love the pricing. Highly recommended A++++++++'
        },
        {
            imgUrl: '/assets/testimonial6.png',
            name: 'Lucifer XVI',
            role: 'Definitely would suggest to other friends of mine who have their own companies',
            feedback: 'Well the server was never really out of order except for once when I was not even able to login or even open the site. So I figured that there must be some maintenance going on. I was still able to access my admin panel so all is good.'
        },
        {
            imgUrl: '/assets/testimonial7.png',
            name: 'ADITYA KUMAR',
            role: 'Great server speed & affordable',
            feedback: 'These servers are fast and there team even resolved my plugin issues.I was hesitant at first, as not a well known company. But the dedicated servers were so cheap that I purchased just to give it a shot. Now I regret wasting so much more money on less powerful vps servers for so long',
        },
        {
            imgUrl: '/assets/testimonial8.png',
            name: 'With Niolex',
            role: 'These guys are excellent',
            feedback: 'These guys are excellent. After purchasing the service yawin has assigned me a dedicated support member who setup my server in quick and helped me to setup my apps. Any issue that i had was resolved quick. Their speed is very developer friendly. I recommend them unreservedly.'
        }
    ];

    return (
        <div className='testimonial-sec py-5'>
        <div className='container'>
        <div className="testimonial-section">
            <h2 className='testimonial-head'>What Our Clients Said About Us</h2>
            <p className='w-75 mb-5 testimonial-subHeading'>We are loved by marketers, agencies, small business owners, and many more. Our customers’ testimonials are the best social proof we can get!</p>
            <div className='container'>
            <Slider {...settings} className=''>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className=" ">
                        <div className="testimonial-content testimonial-card p-4">
                            <div className='d-flex mb-3'>
                            <Image src={testimonial.imgUrl} alt='' className='me-3 testimonial-img' width={1000} height={1000}/>
                            <div>
                            <h3 className='testimonial-name'>{testimonial.name}</h3>
                            <p className="testimonial-role">{testimonial.role}</p>
                            </div>
                            </div>
                            <p className='feedback'>{testimonial.feedback}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Testimonials;
