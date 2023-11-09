import { motion } from "framer-motion";
import Nav from "./Nav";

const Hero = () => {
  return (
    <>
      <div className="hero" id="home">
        <Nav />
        <div className="banner absolute z-[2] left-[2rem] md:left-[7rem] xl:left-[12rem]">
          <motion.h1
            className="font-light text-[6rem] md:text-[8rem] text-white"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 1 }}>
            Hello!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", delay: 1, duration: 0.5 }}>
            <h1 className="font-bold text-[2rem] md:text-[4rem] text-white -mt-5">
              I'm Alexander Rengkat
            </h1>
            <p className="text-white text-2xl lg:text-3xl">Front-End Developer</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
