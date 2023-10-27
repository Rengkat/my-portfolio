import { Fragment } from "react";
import SingleProject from "./SingleProject";
import { someProjects } from "../assets";
const Projects = () => {
  return (
    <>
      <nav className="w-full flex list-none justify-center my-[5rem]">
        <li className="project-nav">HTML, CSS, JS</li>
        <li className="project-nav">REACT</li>
        <li className="project-nav">NEXT.JS</li>
        <li className="px-5 text-white font-semibold cursor-pointer">OTHERS</li>
      </nav>
      <div className="w-[95%] lg:w-[75%] mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {someProjects.map((project, index) => {
            return (
              <Fragment key={index}>
                <SingleProject project={project} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
