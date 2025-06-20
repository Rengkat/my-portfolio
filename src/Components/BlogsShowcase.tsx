import { useContext } from "react";
import SingleBlog from "./SingleBlog";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../Context/AppContext";
import { Blog } from "../Types";

const BlogsShowcase = () => {
  const { blogsLoading, blogs } = useContext(AppContext);

  const fadeInAnimate = {
    initial: () => ({
      y: 50,
      opacity: 0,
      scale: 0.9,
    }),
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="blogs" className="bg-[#22252c] py-20 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#17d497] via-[#12deb3] to-[#08f7f7]">
          BLOG POSTS
        </h1>

        {blogsLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-2xl font-bold text-white">Loading blogs...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog: Blog, index: number) => (
              <motion.div
                key={blog._id}
                variants={fadeInAnimate}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}>
                <SingleBlog blog={blog} />
              </motion.div>
            ))}
          </div>
        )}

        {!blogsLoading && (
          <div className="flex justify-center mt-16">
            <Link to="/blogs">
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-[#14e8c8] text-white font-semibold rounded-lg hover:bg-[#14e8c8] hover:text-[#22252c] transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                VIEW ALL BLOGS
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.button>
            </Link>
          </div>
        )}

        <ContactForm />
      </div>
    </section>
  );
};

export default BlogsShowcase;
