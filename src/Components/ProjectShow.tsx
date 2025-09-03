import { PiGithubLogoFill } from "react-icons/pi";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Project } from "../Types";
import { sanityImageUrl } from "../../lib/sanity";
import { motion } from "framer-motion";

const ProjectShow = () => {
  const { projects, projectsLoading } = useContext(AppContext);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[#22252c] scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development expertise
          </p>
        </motion.div>

        {projectsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden h-80 animate-pulse">
                <div className="w-full h-full bg-gray-700"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project: Project, index: number) => (
              <motion.div
                key={project._id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                whileHover="hover"
                variants={itemVariants}
                className="h-80"
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg group bg-gray-800">
                  <img
                    src={sanityImageUrl(project.mainImage).width(700).url()}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-xl font-semibold mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {project.subtitle}
                      </p>
                      
                      <div className="flex gap-4">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 transition-colors duration-300 text-white"
                          aria-label="View source code on GitHub"
                        >
                          <PiGithubLogoFill className="text-xl" />
                        </a>
                        <Link
                          to={`/projects/${project.slug.current}`}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 transition-colors duration-300 text-white"
                          aria-label="View project details"
                        >
                          <LinkIcon sx={{ fontSize: "1.25rem" }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!projectsLoading && projects.length > 6 && (
          <motion.div 
            className="flex justify-center mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/projects">
              <motion.button
                className="px-6 py-3 bg-transparent text-teal-400 font-medium rounded-lg hover:bg-teal-400/10 transition-colors duration-300 border border-teal-400/30 hover:border-teal-400/50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectShow;