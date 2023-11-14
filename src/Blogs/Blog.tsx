import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import { Blog, formatDate } from "../Types";
import { sanityImageUrl } from "../../lib/sanity";

interface Props {
  singleBlog: Blog;
}

const BlogComp = ({ singleBlog }: Props) => {
  return (
    <motion.article
      className="flex flex-col md:flex-row mt-[3rem] bg-[#313741] shadow"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      viewport={{ amount: 0.2, once: true }}>
      <img
        src={sanityImageUrl(singleBlog.image).width(800).height(550).url()}
        className="w-full md:w-[40%] object-cover"
      />
      <aside className="w-full md:w-[60%] p-5 text-white">
        <h1 className="font-bold text-2xl capitalize text-[#02cfb4]">{singleBlog.title}</h1>
        <p className="font-semibold">{formatDate(singleBlog.dateOfPublication)}</p>
        <p className="mt-3">{singleBlog.shortDescription.slice(0, 200)}...</p>
        <a href={singleBlog.externalUrl}>
          <button className="blog-btn flex shadow items-center justify-center gap-2 text-white py-3 px-4 my-4 text-sm">
            <span>READ MORE</span>
            <MdChevronRight />
          </button>
        </a>
      </aside>
    </motion.article>
  );
};

export default BlogComp;
