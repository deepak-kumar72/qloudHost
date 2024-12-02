// ResourcesPage.jsx
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const BlogSection = () => {

  return (
    <div className="container blog-section my-5">
      <header className="text-center mb-5">
        <h2 className="mb-3 m-auto">Blog & Support Section</h2>
        <p className="w-75 m-auto mb-3 sub-heading text-center">
          Facing issues with your website? Get precise solutions from our
          extensive knowledge base.
        </p>
      </header>

      
        
  
          <div className="row mb-4">
            
              <div className="col-md-5 mb-4" >
                <div className="card blog-card">
                  <Image
                    src='/assets/blogImg1.jpg'
                    className="card-img-top mb-2 h-100"
                    alt='Discover Our Blog'
                    width={1000}
                    height={1000}
                  />
                  
                </div>
              </div>
              <div className="col-md-7 mb-4 blog-sec d-flex align-items-center" >
              <div className="card-body blog-body">
                    <h5 className="card-title blog-title1 mb-4">How to Start a Adult Blog?</h5>
                    <p className="mb-4 blog-con">Learn how to start an adult blog, covering essential steps like choosing a niche, setting up hosting, content creation tips, SEO, and marketing strategies to build a successful adult website.</p>
                    <Link href='https://qloudhost.com/blog/how-to-start-an-adult-website/'  className='start-now-btn blog-link'>Get Started <FaArrowRight className="ms-2"/></Link>
                  </div>
              </div>
           
          </div>
          <div className="row">
          <div className="col-md-5 order-md-2 mb-4" >
                <div className="card blog-card">
                  <Image
                    src='/assets/blogImg2.jpg'
                    className="card-img-top mb-2 h-100"
                    alt='Discover Our Blog'
                    width={1000}
                    height={1000}
                  />
                  
                </div>
              </div>
          <div className="col-md-7 order-md-1 mb-4 blog-sec d-flex align-items-center" >
          <div className="card-body blog-body">
                    <h5 className="card-title blog-title1 mb-4">Discover Our Blog And Know About Us More</h5>
                    <p className="mb-4 blog-con">Dive into our blog to explore who we are! From industry insights to our journey, discover stories, tips, and updates that bring you closer to our world. Stay informed, inspired, and connected with us!</p>
                    <Link href='https://qloudhost.com/blog/'  className=' start-now-btn blog-link'>Get Started <FaArrowRight className="ms-2"/></Link>
                  </div>
          </div>
           
              
          
          </div>
        </div>
  );
};

export default BlogSection;
