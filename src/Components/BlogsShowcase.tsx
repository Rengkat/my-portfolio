import { Fragment } from "react";
import SingleBlog from "./SingleBlog";
import ContactForm from "./ContactForm";
const BlogsShowcase = () => {
  const blogs = [1, 2, 3, 4, 5, 3, 4, 2, 4, 2, 4, 5];
  return (
    <div className="bg-[#22252c] pb-[10rem]">
      <h1 className="edu font-bold text-5xl text-center py-[8rem]">BLOG POSTS </h1>
      <div className="w-[80%] mx-auto flex justify-center gap-5 ">
        {blogs.slice(0, 3).map((blog, index) => {
          return (
            <Fragment key={index}>
              <SingleBlog blog={blog} />
            </Fragment>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className="blog-btn flex items-center justify-center gap-2 text-white py-5 font-semibold px-[5rem] mt-[5rem] text-sm">
          LOAD MORE
        </button>
      </div>
      <ContactForm />
    </div>
  );
};

export default BlogsShowcase;
