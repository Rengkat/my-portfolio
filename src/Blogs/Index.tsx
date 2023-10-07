import HeroComponent from "../Components/HeroComponent";
import { Fragment } from "react";
import Nav from "../Components/Nav";
import { someBlogs } from "../assets";
import Blog from "./Blog";
// interface Blog {
//   title: string;
//   data: string;
//   link: string;
//   summary: string;
//   image: string;
// }
const categories = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Uncategorized"];
const Blogs = () => {
  return (
    <>
      <div className="bg-[#22252c]">
        <Nav />
        <HeroComponent
          title="BLOGS"
          subHeading="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae velit at odit nihil
          quidem quo quae."
        />
        <main className="flex flex-col md:flex-row w-[76%] py-[3rem] mx-auto gap-3">
          <aside className="w-full md:w-[70%] ">
            <div className="w-full">
              {someBlogs.map((blog, index) => {
                return (
                  <Fragment key={index}>
                    <Blog singleBlog={blog} />
                  </Fragment>
                );
              })}
            </div>
          </aside>
          <aside className="w-full md:w-[30%] py-[3rem] px-[1rem]">
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Enter keyword..."
                className="w-[70%] py-3 px-2 outline-none"
              />
              <button className="w-[30%] bg-[#02cfb4] text-white font-semibold">Search</button>
            </div>
            <div className="mt-[3rem]">
              <h1 className="text-[#02cfb4] font-bold text-3xl pb-5 border-b-[2px] border-[#02cfb4]">
                Categories
              </h1>
              <ul className="text-white list-none mt-5">
                {categories.map((category, i) => {
                  return (
                    <Fragment key={i}>
                      <li className="py-[5px] cursor-pointer">{category}</li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="mt-[3rem]">
              <h1 className="text-[#02cfb4] font-bold text-3xl pb-5 border-b-[2px] border-[#02cfb4]">
                Tags
              </h1>
              <ul className=" list-none flex flex-wrap gap-[5px] my-5">
                {categories.map((category, i) => {
                  return (
                    <Fragment key={i}>
                      <li className="text-[#02cfb4] bg-[#313741] py-[5px] px-[7px] cursor-pointer">
                        {category}
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
};

export default Blogs;
