import { PiGithubLogoFill } from "react-icons/pi";
import LinkIcon from "@mui/icons-material/Link";
// import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { someProjects } from "../assets";
import { Fragment } from "react";
const ProjectShow = () => {
  return (
    <div className="project-show h-[350vh] md:h-[190vh] lg:md:h-[120vh]">
      <div className="flex justify-center pt-[3rem]">
        <div className="w-full xl:w-[80%] p-[2rem] project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {someProjects.map((project, index) => {
            return (
              <Fragment key={index}>
                <div className="project-relative h-[50vh] lg:h-[40vh] w-full">
                  <img
                    src={project.image}
                    alt={project?.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="project-overlay py-10 px-5 flex flex-col justify-between">
                    <div className="w-full flex justify-center gap-5 mt-[2rem]">
                      <PiGithubLogoFill className="single-pro-icon " />
                      <Link to={`/projects/1`}>
                        <LinkIcon sx={{ fontSize: "3rem" }} className="single-pro-icon " />
                      </Link>
                    </div>
                    <div>
                      <h1 className=" uppercase font-semibold text-2xl">Lorem ipsum dolor</h1>
                      <p className="subpro text-xl font-semibold uppercase">Lorem, ipsum dolor</p>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="w-full absolute bottom-[5rem] flex justify-center ]">
          <button className="bg-[#22252c] py-4 px-8 text-xl font-normal text-[#02cfb4] my-[5rem">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
