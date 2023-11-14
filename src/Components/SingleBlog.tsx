import { sanityImageUrl } from "../../lib/sanity";
import { Blog, formatDate } from "../Types";
import { MdChevronRight } from "react-icons/md";
interface Props {
  blog: Blog;
}
const SingleBlog = ({ blog }: Props) => {
  const formattedDate = formatDate(blog.dateOfPublication);

  return (
    <div className="bg-[#313741] shadow my-5 md:my-0">
      <img
        src={sanityImageUrl(blog.image).width(800).height(550).url()}
        // className="w-[100%] h-[100%] object-cover "
      />
      <div className="text-white p-5">
        <h1 className="text-[#02cfb4] font-semibold text-xl py-[5px] capitalize">{blog.title}</h1>
        <p className="font-semibold">{formattedDate}</p>
        <p className="py-2 md:py-3">{blog.shortDescription.slice(0, 200)}...</p>
        <a href={blog.externalUrl} target="_blank">
          <button className="blog-btn flex shadow items-center justify-center gap-2 text-white py-3 px-4 my-2 text-sm">
            <span>READ MORE</span>
            <MdChevronRight />
          </button>
        </a>
      </div>
    </div>
  );
};

export default SingleBlog;
