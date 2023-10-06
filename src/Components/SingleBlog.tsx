import React from "react";
import { projectHub } from "../assets";
import { MdChevronRight } from "react-icons/md";

const SingleBlog = ({ blog }: { blog: any }) => {
  return (
    <div className="bg-[#313741] shadow my-10 md:my-0">
      <img src={projectHub} alt="" />
      <div className="text-white p-5">
        <h1 className="text-[#02cfb4] font-semibold text-xl py-[5px]">
          Montu is Going to Breakup with Tuntuni
        </h1>
        <p className="font-semibold">18, March, 2017 | 33 Comments</p>
        <p className="py-2 md:py-3">
          There are many variations of passages of the Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised.
        </p>
        <button className="blog-btn flex shadow items-center justify-center gap-2 text-white py-3 px-4 my-2 text-sm">
          <span>READ MORE</span>
          <MdChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
