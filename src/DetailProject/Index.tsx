import { motion, AnimatePresence } from "framer-motion";
import { FaLink, FaGithub, FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Client, sanityImageUrl } from "../../lib/sanity";
import { DetailProjectType, Image } from "../Types";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";

interface DetailPro extends DetailProjectType {
  imageSlider: Image[];
}

const DetailProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);
  const { slug } = useParams();
  const [project, setProject] = useState<DetailPro | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Auto-rotate images
  useEffect(() => {
    if (!project?.imageSlider?.length) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev >= project.imageSlider.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project?.imageSlider]);

  const goToPrevImage = () => {
    if (!project?.imageSlider?.length) return;
    setCurrentImageIndex(prev => 
      prev === 0 ? project.imageSlider.length - 1 : prev - 1
    );
  };

  const goToNextImage = () => {
    if (!project?.imageSlider?.length) return;
    setCurrentImageIndex(prev => 
      prev >= project.imageSlider.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const fetchProject = async (slug: string | undefined) => {
      setLoading(true);
      try {
        const query = `*[_type == 'projects' && slug.current == '${slug}'][0]{
            _id,
            title,
            slug,
            subtitle,
            mainImage,
            imageSlider,
            description,
            client,
            technologiesUsed,
            githubLink,
            liveUrl
          }`;
        const data = await Client.fetch(query);
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProject(slug);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
          <p className="text-gray-400">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Project not found</h2>
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-teal-400 hover:text-teal-300 mb-8 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div 
              className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden bg-gray-800"
              onMouseEnter={() => setIsHoveringSlider(true)}
              onMouseLeave={() => setIsHoveringSlider(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={sanityImageUrl(project.imageSlider[currentImageIndex]).width(1000).url()}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <motion.button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: isHoveringSlider ? 1 : 0.7,
                  x: isHoveringSlider ? 0 : -5 
                }}
              >
                <PiArrowLeftLight className="text-xl" />
              </motion.button>

              <motion.button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: isHoveringSlider ? 1 : 0.7,
                  x: isHoveringSlider ? 0 : 5 
                }}
              >
                <PiArrowRightLight className="text-xl" />
              </motion.button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.imageSlider.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-teal-400 w-6' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {project.imageSlider.length > 1 && (
              <div className="flex mt-4 space-x-3 overflow-x-auto py-2">
                {project.imageSlider.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'border-teal-400'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={sanityImageUrl(image).width(100).height(100).url()}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white"
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-2 text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.title}
            </motion.h1>

            <motion.p 
              className="text-teal-300 text-lg mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {project.subtitle}
            </motion.p>

            {/* Project Info Sections */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-3 text-teal-400 flex items-center">
                  <span className="w-3 h-3 bg-teal-400 rounded-full mr-3"></span>
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {project.client && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-teal-400 flex items-center">
                    <span className="w-3 h-3 bg-teal-400 rounded-full mr-3"></span>
                    Client
                  </h2>
                  <p className="text-gray-300">{project.client}</p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-xl font-semibold mb-3 text-teal-400 flex items-center">
                  <span className="w-3 h-3 bg-teal-400 rounded-full mr-3"></span>
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologiesUsed.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-800 text-teal-300 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLink />
                  View Live Demo
                </motion.a>
              )}
              
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  View Code
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;