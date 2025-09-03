import { motion } from "framer-motion";

const Experiences = () => {
  const experiencesData = [
    {
      title: "Web Development Instructor",
      company: "Orphanage Care & Support Foundation and Help Vulnerable Children Aid Foundation, Kaduna",
      collaboration: "in Collaboration with World Bank and Federal Government of Nigeria",
      period: "2024 - 2025 (CONTRACT)",
      responsibilities: [
        "Delivered web development courses (HTML, CSS, JavaScript and React) tailored to mainstream and hearing-impaired students",
        "Implemented inclusive teaching strategies in both virtual and physical classrooms",
        "Assessed students' progress via quizzes, projects, and personalized feedback",
        "Mentored students on career paths and industry best practices"
      ],
      techStack: ["React", "Next", "Styled Component", "Redux toolkit", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Full-Stack Developer",
      company: "NOSA",
      location: "Jos, Nigeria",
      period: "2023 - 2024 (CONTRACT)",
      responsibilities: [
        "Designed, developed and maintained the organization's front and backend web application",
        "Integrated front end application with backend APIs",
        "Collaborated with a 3-member cross-functional team using GitHub, Google Meet, and Slack"
      ],
      techStack: ["React", "Next", "Styled Component", "Redux toolkit", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Frontend Developer",
      company: "Yoris Africa Enterprise",
      location: "Lagos, Nigeria",
      period: "2021 - 2023",
      responsibilities: [
        "Developed the company's super admin dashboard",
        "Collaborated with a 6-member team using GitHub, Google Meet, and Slack",
        "Evaluated 7 UI/UX designs for technical feasibility, enhancing implementation",
        "Enhanced dashboard features by integrating APIs with the back end"
      ],
      techStack: ["React", "Styled Component", "Redux toolkit", "Axios", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Frontend Developer",
      company: "Headline News",
      location: "Lagos, Nigeria",
      period: "2020 - 2021",
      responsibilities: [
        "Developed, updated and maintained front-end components using Sanity Content lake",
        "Uploaded and published 20+ daily news stories and feature articles to company web app"
      ],
      techStack: ["React", "CSS", "Sanity.io", "Redux toolkit", "Node", "Express", "MongoDB", "Axios"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experiences" className="py-16 md:py-24 bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through various roles where I've applied and expanded my technical expertise
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-500/30 transform -translate-x-1/2"></div>
          
          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="flex md:flex-col items-center md:items-start md:justify-start md:w-1/2">
                {/* <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 border-4 border-gray-900 shadow-lg">
                  <WorkIcon className="text-white text-lg" />
                </div> */}
                <div className="md:hidden ml-4 flex-1">
                  <h3 className="text-teal-400 font-semibold text-lg">{exp.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {exp.company}{exp.location && `, ${exp.location}`} | {exp.period}
                  </p>
                  {exp.collaboration && (
                    <p className="text-gray-400 text-xs mt-1">{exp.collaboration}</p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="hidden md:block">
                  <h3 className="text-teal-400 font-semibold text-lg">{exp.title}</h3>
                  <p className="text-gray-300 text-sm mb-1">
                    {exp.company}{exp.location && `, ${exp.location}`} | {exp.period}
                  </p>
                  {exp.collaboration && (
                    <p className="text-gray-400 text-xs mb-2">{exp.collaboration}</p>
                  )}
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/30 hover:border-teal-500/30 transition-colors duration-300">
                  <h4 className="text-white font-medium mb-3">Key Responsibilities:</h4>
                  <ul className="text-gray-300 space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4">
                    <span className="text-teal-400 font-medium mr-2">Tech Stack:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.techStack.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs rounded-full border border-teal-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;