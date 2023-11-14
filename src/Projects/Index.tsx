import { Fragment, useContext, useState } from "react";
import SingleProject from "./SingleProject";
import { AppContext } from "../Context/AppContext";
import { Project } from "../Types";
const Projects = () => {
  const { projects, projectsLoading } = useContext(AppContext);
  const [filter, setFilter] = useState("all");
  const allCategories = projects.flatMap((project: Project) => project.category);

  // Get unique categories
  const uniqueCategories = ["all", ...new Set(allCategories)];
  const handleFilter = (category: string) => {
    setFilter(category);
  };

  // Filter projects based on the selected category
  const filteredProjects =
    filter === "all"
      ? projects // Show all projects if 'all' is selected
      : projects.filter((project: Project) => project.category.includes(filter));

  return (
    <>
      <nav className="w-full flex list-none justify-center my-[5rem]">
        {uniqueCategories.map((category, index) => {
          return (
            <li
              className="project-nav capitalize"
              key={index}
              onClick={() => handleFilter(category)}>
              {category}
            </li>
          );
        })}
      </nav>
      <div className="w-[95%] lg:w-[75%] mx-auto">
        {projectsLoading ? (
          <div className="w-full h-[50vh] flex items-center justify-center">
            <div className="text-white text-2xl font-bold">Loading...</div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProjects.map((project: Project) => {
              return (
                <Fragment key={project?._id}>
                  <SingleProject project={project} />
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
