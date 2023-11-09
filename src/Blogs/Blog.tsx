import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
interface Blog {
  title: string;
  data: string;
  link: string;
  summary: string;
  image: string;
}
interface Props {
  singleBlog: Blog;
}

const Blog = ({ singleBlog }: Props) => {
  return (
    <motion.article
      className="flex flex-col md:flex-row mt-[3rem] bg-[#313741] shadow"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      viewport={{ amount: 0.2, once: true }}>
      <img src={singleBlog.image} alt="" className="w-full md:w-[40%] object-cover" />
      <aside className="w-full md:w-[60%] p-5 text-white">
        <h1 className="font-bold text-2xl capitalize text-[#02cfb4]">{singleBlog.title}</h1>
        <p className="font-semibold">{singleBlog.data}</p>
        <p className="mt-3">{singleBlog.summary}</p>
        <button className="blog-btn flex shadow items-center justify-center gap-2 text-white py-3 px-4 my-4 text-sm">
          <span>READ MORE</span>
          <MdChevronRight />
        </button>
      </aside>
    </motion.article>
  );
};

export default Blog;
