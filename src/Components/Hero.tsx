import { motion } from "framer-motion";
import Nav from "./Nav";
import Particles from "./Particles";
// import Particles from "./Particles";

const Hero = () => {
  return (
    <section className="hero-section relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#17d497] via-[#12deb3] to-[#08f7f7] opacity-70 z-10"></div>
      <div className="absolute inset-0 bg-[url('/src/assets/hedaer-bg-2.jpg')] bg-cover bg-center z-0"></div>

      <Particles />

      <div className="relative z-20 h-full flex flex-col">
        <Nav />

        <div className="flex-grow flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}>
              Hello!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.5, stiffness: 100, damping: 10 }}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                I'm Alexander Rengkat
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-light mb-8">
                Full-Stack Developer
              </p>

              <motion.a
                href="#about"
                className="inline-block px-8 py-3 bg-white text-[#12deb3] font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Explore My Work
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
