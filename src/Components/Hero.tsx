// Hero.jsx - Modernized hero section
import { motion } from "framer-motion";
import Nav from "./Nav";
import Particles from "./Particles";

const Hero = () => {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* Background with modern gradient overlay */}
      <div className="absolute inset-0 bg-[url('/src/assets/hedaer-bg-2.jpg')] bg-cover bg-center z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-cyan-800/70 to-teal-700/90 z-1"></div>

      <Particles />

      <div className="relative z-20 h-full flex flex-col">
        <Nav />

        {/* Hero content centered with modern typography */}
        <div className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-4xl">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
            >
              Hello!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.4, stiffness: 100, damping: 12 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                I'm <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">Alexander Rengkat</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto">
                Full-Stack Developer & UI/UX Enthusiast
              </p>

              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-white text-teal-700 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore My Work
                </motion.a>
                <motion.a
                  href="#hire"
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;