import HeroComponent from "../Components/HeroComponent";
import { Fragment, useContext, useState } from "react";
import Nav from "../Components/Nav";
import { motion } from "framer-motion";
import { AppContext, AppState } from "../Context/AppContext";
import BlogComp from "./Blog";
import { Blog } from "../Types";
const Blogs = () => {
  const [search, setSearch] = useState("");
  const [findCategory, setFindCategory] = useState("all");
  const { blogsLoading, blogs } = useContext<AppState>(AppContext);

  // Extract unique categories and tags from blogs
  const categories = ["all", ...new Set(blogs.flatMap((blog) => blog.category))];
  const tags = [...new Set(blogs.flatMap((blog) => blog.tags))];

  // Filter categories based on search input
  const searchCategories = categories.filter((category) =>
    category.toLowerCase().includes(search.toLowerCase())
  );

  // Handle category selection
  const handleFindCategory = (category: string) => {
    setFindCategory(category);
  };

  // Filter blogs based on selected category
  const filteredBlogs =
    findCategory === "all" ? blogs : blogs.filter((blog) => blog.category.includes(findCategory));
  return (
    <>
      <div className="bg-[#22252c]">
        <Nav />
        <HeroComponent
          title="BLOGS"
          subHeading="Dive into a world of insights and knowledge – navigating the ever-evolving landscape of web development, design, and tech trends through my blog posts"
        />
        {blogsLoading ? (
          <div className="w-full h-[40vh] flex justify-center items-center">
            <div className="text-white text-2xl font-bold">Loading...</div>
          </div>
        ) : (
          <main className="flex flex-col lg:flex-row w-[90%] xl:w-[75%] py-[3rem] mx-auto gap-3">
            <aside className="w-full lg:w-[70%] ">
              <div className="w-full">
                {filteredBlogs.map((blog: Blog) => {
                  return (
                    <Fragment key={blog._id}>
                      <BlogComp singleBlog={blog} />
                    </Fragment>
                  );
                })}
              </div>
            </aside>
            <aside className="w-full md:w-[50%] lg:w-[30%]  py-[3rem] px-[1rem]">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1 }}
                viewport={{ amount: 0.2, once: true }}>
                <div className="w-full flex">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    placeholder="Enter keyword..."
                    className="w-[70%] py-3 px-2 outline-none bg-transparent border-[1px] text-white"
                  />
                  <button className="w-[30%] bg-[#02cfb4] text-white font-semibold">Search</button>
                </div>
                <div className="mt-[3rem]">
                  <h1 className="text-[#02cfb4] font-bold text-3xl pb-5 border-b-[2px] border-[#02cfb4]">
                    Categories
                  </h1>
                  <ul className="text-white list-none mt-5">
                    {searchCategories.map((category, i) => {
                      return (
                        <Fragment key={i}>
                          <li
                            onClick={() => handleFindCategory(category)}
                            className="py-[5px] cursor-pointer capitalize hover:bg-[#15191e] ">
                            {category}
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="mt-[3rem]"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1 }}
                viewport={{ amount: 0.2, once: true }}>
                <h1 className="text-[#02cfb4] font-bold text-3xl pb-5 border-b-[2px] border-[#02cfb4]">
                  Tags
                </h1>
                <ul className=" list-none flex flex-wrap gap-[5px] my-5">
                  {tags.map((tag, i) => {
                    return (
                      <Fragment key={i}>
                        <li className="text-[#02cfb4] bg-[#313741] py-[5px] px-[7px] cursor-pointer">
                          {tag}
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </motion.div>
            </aside>
          </main>
        )}
      </div>
    </>
  );
};

export default Blogs;
