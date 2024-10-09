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
    <div className="project-show py-[8rem] bg-gray-900 min-h-screen">
      <div className="w-full xl:w-[80%] mx-auto">
        {projectsLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-2xl font-bold text-white animate-pulse mt-[3rem]">Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project: Project) => (
              <Fragment key={project._id}>
                <div className="relative h-[40vh] w-full shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <img
                    src={sanityImageUrl(project.mainImage).width(700).url()}
                    className="w-full h-full object-cover"
                    alt={project.title}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 p-4">
                    <div className="text-center">
                      <div className="flex justify-center gap-5 mb-4">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <PiGithubLogoFill className="text-white text-4xl transition-transform duration-300 hover:scale-125" />
                        </a>
                        <Link to={`/projects/${project.slug.current}`}>
                          <LinkIcon
                            sx={{ fontSize: "3rem", color: "white" }}
                            className="transition-transform duration-300 hover:scale-125"
                          />
                        </Link>
                      </div>
                      <h1 className="text-white uppercase font-semibold text-xl">
                        {project.title}
                      </h1>
                      <p className="text-white text-sm font-medium uppercase">{project.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="mt-[4rem] relative z-5">
          {!projectsLoading && (
            <div className="w-full flex justify-center">
              <Link to="/projects">
                <button className="bg-[#22252c] py-3 px-5 text-base md:py-4 md:px-8 md:text-xl font-semibold text-[#02cfb4] hover:text-white hover:bg-[#383d48] transition-colors duration-300 rounded-lg shadow-lg">
                  LOAD MORE
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
