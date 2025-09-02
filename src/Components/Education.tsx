import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Master Degree",
      institution: "University of Nigeria, Nsukka, Nigeria",
      period: "2020 - 2024",
      description: "Master of Science and Education in Chemistry from the University of Nigeria, Nsukka, showcasing expertise and dedication to advancing knowledge in the field of chemistry."
    },
    {
      degree: "Bachelor Degree",
      institution: "University of Jos, Jos, Nigeria",
      period: "2014 - 2018",
      description: "Successfully completed a comprehensive four-year program earning a Bachelor's degree in Chemistry and Education, honing analytical and teaching skills."
    },
    {
      degree: "Other Certifications",
      institution: "Online Courses",
      period: "2020 - Present",
      description: "Completed a series of comprehensive online courses and certifications to enhance skills in web development and programming.",
      courses: [
        "Front-end Fundamentals from Purple.com",
        "Modern JavaScript From The Beginning by Brad Traversy on Udemy",
        "The Complete JavaScript Course: From Zero to Expert! by Jonson Schmedtmann on Udemy",
        "WordPress for Beginners - Master WordPress Quickly by Andrew Williams on Udemy",
        "React Js. Course by John Smilga on Udemy",
        "Understanding Typescript by Maximilian Schwarzmüller on Udemy",
        "Next Js & React by Maximilian Schwarzmüller on Udemy",
        "Node, Express and MongoDB by John Smilga on Udemy"
      ]
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
    <section id="education" className="py-16 md:py-24 bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and continuous learning path in both chemistry and technology
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
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="flex md:flex-col items-center md:items-start md:justify-start md:w-1/2">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 border-4 border-gray-900 shadow-lg">
                  <SchoolIcon className="text-white text-lg" />
                </div>
                <div className="md:hidden ml-4 flex-1">
                  <h3 className="text-teal-400 font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-gray-300 text-sm">{edu.institution} | {edu.period}</p>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="hidden md:block">
                  <h3 className="text-teal-400 font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-gray-300 text-sm mb-2">{edu.institution} | {edu.period}</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/30 hover:border-teal-500/30 transition-colors duration-300">
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  {edu.courses && (
                    <>
                      <h4 className="text-teal-400 font-medium mb-3">Courses Completed:</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {edu.courses.map((course, i) => (
                          <li key={i} className="flex">
                            <span className="text-teal-500 mr-2">•</span>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;