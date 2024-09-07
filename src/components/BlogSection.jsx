import React from 'react';
import image1 from '../assets/images/backend.jpg';
import image2 from '../assets/images/image_2.jpg';
import image3 from '../assets/images/image_3.jpg';

const BlogSection = () => {
  return (
    <section className="ftco-section my-8 p-4" id="blog-section">
      <div className="container">
        <div className="row justify-center mb-5 pb-5">
          <div className="col-md-7 text-center">
            <h1 className="text-5xl font-bold">Blog</h1>
            <h2 className="mb-4 text-3xl">Our Blog</h2>
            <p className="text-gray-600">Some outstanding projects I have worked on so far</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <BlogEntry 
            image={image1} 
            date="June 21, 2019" 
            author="Admin" 
            comments={3} 
            title="Why Lead Generation is Key for Business Growth" 
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia." 
          />
          <BlogEntry 
            image={image2} 
            date="June 21, 2019" 
            author="Admin" 
            comments={3} 
            title="Why Lead Generation is Key for Business Growth" 
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia." 
          />
          <BlogEntry 
            image={image3} 
            date="June 21, 2019" 
            author="Admin" 
            comments={3} 
            title="Why Lead Generation is Key for Business Growth" 
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia." 
          />
        </div>
      </div>
    </section>
  );
};

const BlogEntry = ({ image, date, author, comments, title, description }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="blog-entry">
        <a href="single.html" className="block-20" style={{ backgroundImage: `url(${image})` }}>
          <img src={image} alt={title} className="object-cover h-48 w-full" />
        </a>
        <div className="text mt-3 text-center">
          <div className="d-flex align-items-center mb-3 text-gray-500">
            <p className="mb-0">
              <span className="mr-2">{date}</span>
              <a href="#" className="mr-2">{author}</a>
              <a href="#" className="meta-chat"><span className="icon-chat"></span> {comments}</a>
            </p>
          </div>
          <h3 className="heading"><a href="single.html" className="text-lg font-semibold">{title}</a></h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};



export default BlogSection;
