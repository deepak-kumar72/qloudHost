// ResourcesPage.jsx
import React from "react";
import images from "../../../constants/images";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BlogSection = () => {
  const articles = [
    {
      title: "Start a Blog",

      type: "Blog",
      description:
        "By information about design the world to the best instructors, heatc helping By information about design.",
      imgSrc: images.blogImg1,
      urlText: 'Get Started',
      url: 'https://qloudhost.com/blog/host-a-website-anonymously/',
    },
    {
      title: "Discover Our Blog And Know About Us More",
      imgSrc: images.blogImg2,
      urlText: 'Get Started',
      url: 'https://qloudhost.com/blog/',
    },
    {
      title: "Migrate to Us!",
      imgSrc: images.blogImg3,
      urlText: 'Get Started',
      url: '',
    },
    {
      title: "Migrate to Us!",

      imgSrc: images.blogImg3,
      urlText: 'Get Started',
      url: '',
    },
    {
      title: "Discover Our Blog And Know About Us More",

      imgSrc: images.blogImg2,
      urlText: 'Get Started',
      url: 'https://qloudhost.com/blog/',
    },
    // Add more articles as needed
  ];

  return (
    <div className="container blog-section my-5">
      <header className="text-center mb-5">
        <h2 className="mb-3 m-auto">Blog & Support Section</h2>
        <p className="w-75 m-auto mb-3 sub-heading text-center">
          Facing issues with your website? Get precise solutions from our
          extensive knowledge base.
        </p>
      </header>

      <div className="row">
        {/* Main Featured Article */}
        <div className="col-md-6 mb-4">
          <div className="card blog-card">
            <img
              src={articles[0].imgSrc}
              className="card-img-top mb-2"
              alt={articles[0].title}
            />
            <div className="card-body blog-body">
              
              <h5 className="card-title blog-title">{articles[0].title}</h5>
              <p className="card-text blog-text">{articles[0].description}</p>
              <Link to={articles[0].urlText} className='faq-link'>{articles[0].urlText} <FaArrowRight className="ms-2"/></Link>
            </div>
          </div>
        </div>

        {/* Secondary Articles */}
        <div className="col-md-6">
          <div className="row">
            {articles.slice(1).map((article, index) => (
              <div className="col-6 mb-4" key={index}>
                <div className="card blog-card">
                  <img
                    src={article.imgSrc}
                    className="card-img-top mb-2"
                    alt={article.title}
                  />
                  <div className="card-body blog-body">
                    <h5 className="card-title blog-title1">{article.title}</h5>
                    <Link to={article.url} className='faq-link'>{article.urlText} <FaArrowRight className="ms-2"/></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
