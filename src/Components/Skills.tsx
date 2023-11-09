import { Fragment } from "react";
import { icons } from "../assets";
import { motion } from "framer-motion";
const Skills = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        type: "tween",
      },
    }),
  };
  return (
    <div id="skills" className="bg-[#313741] pt-[10rem] pb-[5rem] scroll-mt-40">
      <h1 className="edu font-bold text-3xl md:text-5xl text-center pb-[4rem] md:pb-[8rem]">
        PROFESSIONAL SKILLS{" "}
      </h1>
      <div className="flex justify-center w-full">
        <div className="w-[70%] mx-auto grid grid-cols-3 gap-12 md:gap-5  ">
          {icons.map((skill, index) => {
            return (
              <Fragment key={index}>
                <motion.div
                  className=" flex flex-col items-center"
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}>
                  <div className="skill-icon grid place-content-center rounded-full ">
                    <img
                      src={skill.icon}
                      alt={skill.title}
                      className="w-[4rem] md:w-[5rem] h-[4rem] md:h-[5rem] skill-img"
                    />
                  </div>
                  <h1 className="skill-title uppercase font-bold text-sm md:text-3xl text-center my-5">
                    {skill.title}
                  </h1>
                </motion.div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <h1
        id="projects"
        className="edu font-bold text-3xl md:text-5xl text-center pt-[8rem] md:pt-[15rem] !scroll-smooth">
        SOME OF MY WORKS
      </h1>
    </div>
  );
};

export default Skills;
