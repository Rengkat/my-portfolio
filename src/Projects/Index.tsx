import { Fragment, useContext, useState } from "react";
import SingleProject from "./SingleProject";
import { AppContext } from "../Context/AppContext";
import { Project } from "../Types";

const Projects = () => {
  const { projects, projectsLoading } = useContext(AppContext);
  const [filter, setFilter] = useState("all");

  // Gather all categories from the projects
  const allCategories = projects.flatMap((project: Project) => project.category);
  const uniqueCategories = ["all", ...new Set(allCategories)]; // Unique categories, including 'all'

  // Update filter state with the selected category
  const handleFilter = (category: string) => {
    setFilter(category);
  };

  // Filter projects based on the selected category
  const filteredProjects =
    filter === "all"
      ? projects // Display all projects if 'all' is selected
      : projects.filter((project: Project) => project.category.includes(filter));

  return (
    <>
      {/* Category Navigation Menu */}
      <nav className="w-full flex justify-center my-12">
        <ul className="flex space-x-6">
          {uniqueCategories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleFilter(category)}
              className={`cursor-pointer capitalize px-4 py-2 rounded-lg transition-colors duration-200 
          ${
            filter === category
              ? "bg-[#2ba292] text-white font-semibold" // Active category styling
              : "bg-gray-200 text-gray-800 hover:bg-[#02cfb4cb] hover:text-white" // Default styling
          }`}>
              {category}
            </li>
          ))}
        </ul>
      </nav>

      {/* Project display section */}
      <div className="w-[95%] lg:w-[75%] mx-auto">
        {projectsLoading ? (
          <div className="w-full h-[50vh] flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Loading...</span>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProjects.map((project: Project) => (
              <Fragment key={project?._id}>
                <SingleProject project={project} />
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
