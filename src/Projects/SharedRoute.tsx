import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import HeroComponent from "../Components/HeroComponent";

const SharedProjectRoute = () => {
  return (
    <div className="bg-[#22252c]">
      <Nav />
      <HeroComponent
        title="PROJECTS"
        subHeading="Exploring the intersection of creativity and technology – showcasing my journey in front-end development through diverse and impactful projects."
      />
      <div className="pb-[5rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedProjectRoute;
