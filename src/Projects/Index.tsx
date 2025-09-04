import { Fragment, useContext, useState } from "react";
import SingleProject from "./SingleProject";
import { AppContext } from "../Context/AppContext";
import { Project } from "../Types";
import { motion, AnimatePresence } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of my work showcasing full-stack development expertise across various technologies
          </p>
        </motion.div>

        {/* Category Navigation Menu */}
        <motion.nav 
          className="w-full flex justify-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {uniqueCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => handleFilter(category)}
                variants={filterVariants}
                className={`cursor-pointer capitalize px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium
                  ${
                    filter === category
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/30" // Active category styling
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white" // Default styling
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.nav>

        {/* Project display section */}
        <div className="w-full">
          {projectsLoading ? (
            <div className="w-full h-[50vh] flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-teal-400 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-4 h-4 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div 
                key={filter}
                className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProjects.map((project: Project) => (
                  <Fragment key={project?._id}>
                    <SingleProject project={project} />
                  </Fragment>
                ))}
              </motion.div>
              
              {filteredProjects.length === 0 && (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-gray-400 text-xl mb-4">No projects found in this category</div>
                  <button 
                    onClick={() => setFilter("all")}
                    className="px-5 py-2.5 bg-gray-800 text-teal-400 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    View All Projects
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;