import SharedRoute from "./SharedRoute";
import { Fragment } from "react";
import SingleProject from "./SingleProject";
import { someProjects } from "../assets";
const Projects = () => {
  return (
    <>
      <SharedRoute>
        <div className="w-[80%] mx-auto">
          <div className="w-full grid grid-cols-3 gap-5">
            {someProjects.map((project, index) => {
              return (
                <Fragment key={index}>
                  <SingleProject project={project} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </SharedRoute>
    </>
  );
};

export default Projects;
