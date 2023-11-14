import { Fragment, useContext } from "react";
import SingleBlog from "./SingleBlog";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../Context/AppContext";
import { Blog } from "../Types";
const BlogsShowcase = () => {
  const { blogsLoading, blogs } = useContext(AppContext);
  const fadeInAnimate = {
    initial: (index: number) => ({
      y: index === 0 ? 0 : index === 1 ? 100 : 0,
      x: index === 0 ? -100 : index === 1 ? 0 : 100,
      opacity: 0,
    }),
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <div id="blogs" className="bg-[#22252c] pb-[10rem] scroll-mt-40">
      <h1 className="edu font-bold text-3xl md:text-5xl text-center py-[5rem] md:py-[8rem]">
        BLOG POSTS
      </h1>
      {blogsLoading ? (
        <div className="w-full h-[50vh] flex items-center justify-center">
          <div className="text-white text-2xl font-bold">Loading...</div>
        </div>
      ) : (
        <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 ">
          {blogs.slice(0, 3).map((blog: Blog, index: number) => {
            return (
              <Fragment key={blog._id}>
                <motion.div
                  variants={fadeInAnimate}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{ once: true }}>
                  <SingleBlog blog={blog} />
                </motion.div>
              </Fragment>
            );
          })}
        </div>
      )}
      <div className="flex justify-center">
        {!blogsLoading && (
          <Link to={"/blogs"}>
            <button className="blog-btn flex items-center justify-center gap-2 text-white py-4 md:py-5 font-semibold px-[3rem] md:px-[5rem] mt-[2rem] md:mt-[5rem] text-sm">
              LOAD MORE
            </button>
          </Link>
        )}
      </div>
      <ContactForm />
    </div>
  );
};

export default BlogsShowcase;
