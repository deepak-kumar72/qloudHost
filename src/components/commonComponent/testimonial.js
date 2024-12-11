import React, { useState, useEffect } from "react";
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
    const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/home.json"); // Fetch from public folder
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div>Loading...</div>;
  }

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


    return (
        <div className='testimonial-sec py-5'>
        <div className='container'>
        <div className="testimonial-section">
            <h2 className='testimonial-head'>{data.testimonials.heading}</h2>
            <p className='w-75 mb-5 testimonial-subHeading'>{data.testimonials.subHeading}</p>
            <div className='container'>
            <Slider {...settings} className=''>
                {data.testimonials.data.map((testimonial, index) => (
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
