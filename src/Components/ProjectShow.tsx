import { someProjects } from "../assets";
import { Fragment } from "react";
const ProjectShow = () => {
  return (
    <div className="project-show h-[100vh]">
      <div className="hidden w-[70%] p-[2rem] project-grid md:grid grid-cols-3 gap-5">
        {someProjects.map((project, index) => {
          return (
            <Fragment key={index}>
              <div className=" w-[20rem] h-[15rem] border-[1px] border-white reltiv">
                <img src={project.image} alt={project.name} className="h-full object-contain" />
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className="w-full absolute bottom-10 flex justify-center ]">
        <button className="bg-[#22252c] py-4 px-8 text-xl font-normal text-[#02cfb4] my-[5rem">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default ProjectShow;
