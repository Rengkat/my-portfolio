import { PiGithubLogoFill } from "react-icons/pi";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Project } from "../Types";
import { sanityImageUrl } from "../../lib/sanity";
const ProjectShow = () => {
  const { projects, projectsLoading } = useContext(AppContext);
  return (
    <div className="project-show h-[350vh] md:h-[190vh] lg:md:h-[120vh] ">
      <div className="flex justify-center pt-[3rem]">
        {projectsLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-2xl font-bold text-white relative mt-[3rem]">Loading...</div>
          </div>
        ) : (
          <div className="w-full xl:w-[80%] p-[0.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project: Project) => {
              return (
                <Fragment key={project._id}>
                  <div className="project-relative h-[50vh] lg:h-[40vh] w-full">
                    <img
                      src={sanityImageUrl(project.mainImage).width(700).url()}
                      className="w-full h-full object-cover border-2 border-white"
                    />

                    <div className="project-overlay py-10 px-5 flex flex-col justify-between">
                      <div className="w-full flex justify-center gap-5 mt-[2rem]">
                        <a href={project.githubLink} target="_blank">
                          <PiGithubLogoFill className="single-pro-icon " />
                        </a>
                        <Link to={`/projects/${project.slug.current}`}>
                          <LinkIcon sx={{ fontSize: "3rem" }} className="single-pro-icon " />
                        </Link>
                      </div>
                      <div>
                        <h1 className=" uppercase font-semibold text-2xl">{project.title}</h1>
                        <p className="subpro text-base font-semibold uppercase">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        )}
        {!projectsLoading && (
          <div className="w-full absolute bottom-[5rem] flex justify-center ]">
            <Link to={"/projects"}>
              <button className="bg-[#22252c] py-4 px-8 text-xl font-normal text-[#02cfb4] my-[5rem">
                LOAD MORE
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShow;
