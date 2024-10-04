import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './common.css'; // Optional: For custom styles
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import images from '../../constants/images';


// Custom Arrow Components
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <span><FaArrowRight /></span>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <span><FaArrowLeft /></span>
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
        {   imgUrl: images.anubhav,
            name: 'Anubhav Chauhan',
            role: 'Freelancer',
            feedback: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
        },
        {
            imgUrl: images.anubhav,
            name: 'Jacob Joshua',
            role: 'Chief Manager',
            feedback: 'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it\'s got to be Embrace!'
        },
        {
            imgUrl: images.anubhav,
            name: 'Jacob David',
            role: 'Project Manager',
            feedback: 'Embrace really nails it! Creativity, strategy, and an approachable style. They’re where artistry meets strategy. Thrilled with what we achieved!'
        }
    ];

    return (
        <div className='testimonial-sec p-5'>
        <div className='container'>
        <div className="testimonial-section">
            <h2 className='testimonial-head'>What Our Clients Said About Us</h2>
            <p className='w-50 mb-5 testimonial-subHeading'>We are loved by marketers, agencies, small business owners, and many more. Our customers’ testimonials are the best social proof we can get!</p>
            <Slider {...settings} className=''>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className=" ">
                        <div className="testimonial-content testimonial-card p-4">
                            <div className='d-flex mb-3'>
                            <img src={testimonial.imgUrl} alt='' className='me-3'/>
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
    );
}

export default Testimonials;
