import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiReact,
  SiTypescript,
  SiWordpress,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { FaFlask, FaChalkboardTeacher } from "react-icons/fa";

export const icons = [
  { icon: <SiHtml5 />, title: "HTML5", color: "text-orange-500" },
  { icon: <SiCss3 />, title: "CSS3", color: "text-blue-500" },
  { icon: <SiJavascript />, title: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS", color: "text-cyan-400" },
  { icon: <SiSass />, title: "Sass", color: "text-pink-500" },
  { icon: <SiReact />, title: "React", color: "text-blue-400" },
  { icon: <SiTypescript />, title: "TypeScript", color: "text-blue-600" },
  { icon: <SiWordpress />, title: "WordPress", color: "text-blue-700" },
  { icon: <SiNextdotjs />, title: "Next.js", color: "text-black dark:text-white" },
  { icon: <SiNodedotjs />, title: "Node.js", color: "text-green-600" },
  { icon: <SiExpress />, title: "Express", color: "text-gray-400" },
  { icon: <SiRedux />, title: "Redux", color: "text-purple-500" },
  { icon: <SiMongodb />, title: "MongoDB", color: "text-green-500" },
  { icon: <SiPostgresql />, title: "PostgreSQL", color: "text-blue-400" },
  { icon: <FaFlask />, title: "Chemistry", color: "text-teal-400" },
  { icon: <FaChalkboardTeacher />, title: "Teaching", color: "text-blue-400" },
];
const Skills = () => {
  const staggerAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
    hover: {
      y: -5,
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const glowAnimation = {
    initial: { boxShadow: "0 0 0 0 rgba(20, 232, 200, 0.4)" },
    hover: {
      boxShadow: [
        "0 0 0 0 rgba(20, 232, 200, 0.4)",
        "0 0 10px 5px rgba(20, 232, 200, 0.4)",
        "0 0 0 0 rgba(20, 232, 200, 0.4)",
      ],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <section id="skills" className="bg-gray-800 py-20 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          PROFESSIONAL SKILLS
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-8">
          {icons.map((skill, index) => (
            <motion.div
              key={`${skill.title}-${index}`}
              className="flex flex-col items-center group"
              variants={staggerAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              custom={index}>
              <motion.div
                className="relative p-4 rounded-2xl bg-gray-700 mb-4 hover:bg-gray-600 transition-colors duration-300"
                variants={glowAnimation}>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className={`w-16 h-16 flex items-center justify-center text-4xl ${skill.color}`}>
                  {skill.icon}
                </div>
              </motion.div>
              <h3 className="text-white font-medium text-sm sm:text-base text-center uppercase tracking-wider">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.h2
          id="projects"
          className="text-4xl md:text-5xl font-bold text-center mt-32 mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}>
          SOME OF MY WORKS
        </motion.h2>
      </div>
    </section>
  );
};

export default Skills;
