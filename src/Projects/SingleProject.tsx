import { PiGithubLogoFill } from "react-icons/pi";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Project } from "../Types";
import { sanityImageUrl } from "../../lib/sanity";
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

const SingleProject = ({ project }: Props) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="relative h-80 w-full rounded-xl overflow-hidden group"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <img
        src={sanityImageUrl(project.mainImage).width(700).url()}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={project.title}
        loading="lazy"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.subtitle}</p>
          
          {/* Category tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.slice(0, 3).map((cat, index) => (
              <span 
                key={index} 
                className="px-2.5 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full"
              >
                {cat}
              </span>
            ))}
            {project.category.length > 3 && (
              <span className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                +{project.category.length - 3}
              </span>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 transition-colors duration-300 text-white shadow-md"
              aria-label="View source code on GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PiGithubLogoFill className="text-xl" />
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/projects/${project.slug.current}`}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 transition-colors duration-300 text-white shadow-md"
                aria-label="View project details"
              >
                <LinkIcon sx={{ fontSize: "1.25rem" }} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Quick info (always visible) */}
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-semibold text-sm drop-shadow-md">{project.title}</h3>
      </div>
    </motion.div>
  );
};

export default SingleProject;