import React from "react";
import Nav from "../Components/Nav";
import HeroComponent from "../Components/HeroComponent";
interface Props {
  children: React.ReactNode;
}
const SharedRoute = ({ children }: Props) => {
  return (
    <div className="bg-[#22252c]">
      <Nav />
      <HeroComponent
        title="PROJECTS"
        subHeading="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae velit at odit nihil
          quidem quo quae."
      />
      <nav className="w-full flex list-none justify-center my-[5rem]">
        <li className="px-5 border-r-2 border-[#02cfb4] text-white font-semibold cursor-pointer ">
          HTML, CSS, JAVASCRIPT
        </li>
        <li className="px-5 border-r-2 border-[#02cfb4] text-white font-semibold cursor-pointer">
          REACT
        </li>
        <li className="px-5 border-r-2 border-[#02cfb4] text-white font-semibold cursor-pointer">
          NEXT.JS
        </li>
        <li className="px-5 text-white font-semibold cursor-pointer">OTHERS</li>
      </nav>
      <div className="">{children}</div>
    </div>
  );
};

export default SharedRoute;
