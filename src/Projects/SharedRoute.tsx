import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import HeroComponent from "../Components/HeroComponent";

const SharedProjectRoute = () => {
  
  return (
    <div className="bg-[#22252c]">
      <Nav />
      <HeroComponent
        title="PROJECTS"
        subHeading="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae velit at odit nihil
          quidem quo quae."
      />
      <div className="pb-[5rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedProjectRoute;
