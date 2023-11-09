import { Fragment } from "react";
import SingleBlog from "./SingleBlog";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const BlogsShowcase = () => {
  const blogs = [1, 2, 3, 4, 5, 3, 4, 2, 4, 2, 4, 5];
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
        BLOG POSTS{" "}
      </h1>
      <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 ">
        {blogs.slice(0, 3).map((_, index) => {
          return (
            <Fragment key={index}>
              <motion.div
                variants={fadeInAnimate}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}>
                <SingleBlog />
              </motion.div>
            </Fragment>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link to={"/blogs"}>
          <button className="blog-btn flex items-center justify-center gap-2 text-white py-4 md:py-5 font-semibold px-[3rem] md:px-[5rem] mt-[2rem] md:mt-[5rem] text-sm">
            LOAD MORE
          </button>
        </Link>
      </div>
      <ContactForm />
    </div>
  );
};

export default BlogsShowcase;
