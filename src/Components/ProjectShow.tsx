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
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="relative py-20 min-h-screen bg-[#22252c]">
      <div className="absolute inset-0 bg-[url('/src/assets/hedaer-bg-3.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {projectsLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-2xl font-bold text-white">Loading projects...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project: Project, index: number) => (
              <motion.div
                key={project._id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                variants={itemVariants}>
                <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl group">
                  <img
                    src={sanityImageUrl(project.mainImage).width(700).url()}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={project.title}
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-center gap-6 mb-6">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#14e8c8] transition-colors duration-300">
                          <PiGithubLogoFill className="text-4xl" />
                        </a>
                        <Link
                          to={`/projects/${project.slug.current}`}
                          className="text-white hover:text-[#14e8c8] transition-colors duration-300">
                          <LinkIcon sx={{ fontSize: "2.5rem" }} />
                        </Link>
                      </div>

                      <h3 className="text-white text-xl font-bold uppercase mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium uppercase">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!projectsLoading && (
          <div className="flex justify-center mt-16">
            <Link to="/projects">
              <motion.button
                className="px-8 py-3 bg-[#22252c] text-[#02cfb4] font-semibold rounded-lg shadow-lg hover:bg-[#383d48] hover:text-white transition-colors duration-300 border-2 border-[#02cfb4]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                VIEW ALL PROJECTS
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShow;
