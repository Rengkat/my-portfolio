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
  SiNestjs,
  SiGithub,
  SiDocker,
  SiJest,
  SiCypress,
  SiVite,
  SiVercel,
  SiNetlify,
  SiGit,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
} from "react-icons/si";
import { FaFlask, FaChalkboardTeacher } from "react-icons/fa";

// Custom React Native icon
const ReactNativeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M6.5459 1.10399C6.72577 0.440987 7.52203 0.440987 7.7019 1.10399L8.51784 4.07568C8.59469 4.34905 8.84654 4.53964 9.13267 4.53964H12.3177C13.0122 4.53964 13.3123 5.42845 12.7508 5.83742L10.2449 7.64464C10.0108 7.80759 9.91389 8.1025 9.99074 8.37587L10.8067 11.3476C10.9866 12.0106 10.2388 12.5585 9.67733 12.1495L7.17139 10.3423C6.93733 10.1793 6.62567 10.1793 6.39161 10.3423L3.88567 12.1495C3.32422 12.5585 2.57639 12.0106 2.75626 11.3476L3.5722 8.37587C3.64905 8.1025 3.55215 7.80759 3.31809 7.64464L0.812148 5.83742C0.250699 5.42845 0.550815 4.53964 1.2453 4.53964H4.43033C4.71646 4.53964 4.96831 4.34905 5.04516 4.07568L5.8611 1.10399C6.04097 0.440987 6.36603 0.440987 6.5459 1.10399Z"/>
    <circle cx="12" cy="17" r="5" fill="currentColor"/>
  </svg>
);

export const icons = [
  { icon: <SiHtml5 />, title: "HTML5", color: "text-orange-500" },
  { icon: <SiCss3 />, title: "CSS3", color: "text-blue-500" },
  { icon: <SiJavascript />, title: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS", color: "text-cyan-400" },
  { icon: <SiSass />, title: "Sass", color: "text-pink-500" },
  { icon: <SiReact />, title: "React", color: "text-blue-400" },
  { icon: <SiTypescript />, title: "TypeScript", color: "text-blue-600" },
  { icon: <ReactNativeIcon />, title: "React Native", color: "text-blue-300" },
  { icon: <SiWordpress />, title: "WordPress", color: "text-blue-700" },
  { icon: <SiNextdotjs />, title: "Next.js", color: "text-black dark:text-white" },
  { icon: <SiNodedotjs />, title: "Node.js", color: "text-green-600" },
  { icon: <SiExpress />, title: "Express", color: "text-gray-400" },
  { icon: <SiNestjs />, title: "NestJS", color: "text-red-600" },
  { icon: <SiRedux />, title: "Redux", color: "text-purple-500" },
  { icon: <SiMongodb />, title: "MongoDB", color: "text-green-500" },
  { icon: <SiPostgresql />, title: "PostgreSQL", color: "text-blue-400" },
  { icon: <FaFlask />, title: "Chemistry", color: "text-teal-400" },
  { icon: <FaChalkboardTeacher />, title: "Teaching", color: "text-blue-400" },
  { icon: <SiNetlify />, title: "Netlify", color: "text-teal-500", category: "Platforms" },
  { icon: <SiDocker />, title: "Docker", color: "text-blue-500", category: "Tools" },
  { icon: <SiJest />, title: "Jest", color: "text-red-800", category: "Testing" },
  { icon: <SiCypress />, title: "Cypress", color: "text-gray-500", category: "Testing" },
  { icon: <SiVite />, title: "Vite", color: "text-purple-500", category: "Tools" },
  { icon: <SiVercel />, title: "Vercel", color: "text-black dark:text-white", category: "Platforms" },
  { icon: <SiGit />, title: "Git", color: "text-orange-600", category: "Tools" },
  { icon: <SiGithub />, title: "GitHub", color: "text-gray-800 dark:text-gray-200", category: "Tools" },
  { icon: <SiVite />, title: "Vite", color: "text-purple-500", category: "Tools" },
  { icon: <SiReactrouter />, title: "React Router", color: "text-pink-500", category: "Frontend" },
  { icon: <SiReacthookform />, title: "React Hook Form", color: "text-pink-600", category: "Frontend" },
  { icon: <SiReacttable />, title: "React Table", color: "text-rose-500", category: "Frontend" },
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