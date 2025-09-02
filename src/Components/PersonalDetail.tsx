import { interests, personalImage3 } from "../assets";
import { motion } from "framer-motion";
import {
  DriveFileRenameOutline as NameIcon,
  Flag as FlagIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  FolderZip as ZipIcon,
} from "@mui/icons-material";

const AboutMe = () => {
  const interestAnimate = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
      },
    }),
  };

  const personalInfo = [
    { icon: <NameIcon className="text-teal-500" />, label: "Name", value: "Alexander Rengkat" },
    { icon: <FlagIcon className="text-teal-500" />, label: "Nationality", value: "Nigeria" },
    {
      icon: <LocationIcon className="text-teal-500" />,
      label: "Address",
      value: "Narayi, Kaduna State, Nigeria",
    },
    { icon: <ZipIcon className="text-teal-500" />, label: "ZIP Code", value: "930272" },
    {
      icon: <PhoneIcon className="text-teal-500" />,
      label: "Phone",
      value: "+234 806 758 1175, +234 815 326 3319",
    },
    {
      icon: <EmailIcon className="text-teal-500" />,
      label: "Email",
      value: "alexrengkat@gmail.com",
    },
  ];

  return (
    <section id="about" className="bg-gray-900 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative rounded-xl overflow-hidden border border-gray-700/50 shadow-xl">
                <img
                  src={personalImage3}
                  alt="Alexander Rengkat"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <motion.a
              href="https://drive.google.com/uc?export=download&id=15BuVi8DNsU9CFwzF3sMmpAN1QLFM5egG"
              download="Alexander_Rengkat_Resume.pdf"
              className="inline-flex items-center justify-center mt-8 w-full px-6 py-3 bg-gray-800 hover:bg-gray-750 border border-teal-500/30 text-teal-400 font-medium rounded-lg shadow-md hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About Me
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Results-driven Full-Stack Developer with 4+ years of experience building dynamic web
              applications using modern technologies. Adept at both frontend and backend
              development, with expertise in React, Next.js, Node.js, Express, MongoDB, and Go
              (Golang). Combines technical proficiency with a strong educational background in
              Chemistry and a passion for mentoring aspiring developers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 pt-1">{info.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-teal-400 text-sm font-medium mb-1">{info.label}</div>
                    <div className="text-gray-300 text-base truncate">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div 
          className="mt-20 md:mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            My Interests
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.text}
                className="flex flex-col items-center group"
                variants={interestAnimate}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 transition-all duration-300 bg-gray-800 group-hover:bg-teal-500/10 border border-gray-700 group-hover:border-teal-500/30">
                  <interest.icon className="text-2xl md:text-3xl text-teal-500 group-hover:text-teal-400" />
                </div>
                <h3 className="text-gray-300 text-center text-sm md:text-base font-medium group-hover:text-teal-400 transition-colors">{interest.text}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;