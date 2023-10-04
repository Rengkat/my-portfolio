import { someProjects } from "../assets";
import { Fragment } from "react";
const ProjectShow = () => {
  return (
    <div className="project-show h-[110vh]">
      <div className="w-[70%] p-[2rem] project-grid grid grid-cols-3 gap-5">
        {someProjects.map((project, index) => {
          return (
            <Fragment key={index}>
              <div className=" h-[20rem] ">
                <img src={project.image} alt={project.name} />
              </div>
            </Fragment>
          );
        })}
      </div>
      <button className="bg-[#22252c] py-4 px-10 text-2xl font-normal text-[#60efff]">
        LOAD MORE
      </button>
    </div>
  );
};

export default ProjectShow;
