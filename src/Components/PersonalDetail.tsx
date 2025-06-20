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
    initial: (index: number) => ({
      y: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      scale: 0.9,
    }),
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const personalInfo = [
    { icon: <NameIcon className="text-teal-400" />, label: "NAME:", value: "Alexander Rengkat" },
    { icon: <FlagIcon className="text-teal-400" />, label: "NATIONALITY:", value: "Nigeria" },
    {
      icon: <LocationIcon className="text-teal-400" />,
      label: "ADDRESS:",
      value: "Narayi, Kaduna State, Nigeria",
    },
    { icon: <ZipIcon className="text-teal-400" />, label: "ZIP/ POSTAL CODE:", value: "930272" },
    {
      icon: <PhoneIcon className="text-teal-400" />,
      label: "PHONE:",
      value: "+234 806 758 1175, +234 815 326 3319",
    },
    {
      icon: <EmailIcon className="text-teal-400" />,
      label: "EMAIL:",
      value: "alexrengkat@gmail.com",
    },
  ];

  return (
    <section id="about" className="bg-gray-900 py-20 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative border-4 border-teal-400 rounded-xl overflow-hidden">
                <img
                  src={personalImage3}
                  alt="Alexander Rengkat"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <motion.a
              href="https://drive.google.com/uc?export=download&id=13R9z6jrnRvEg7h2ja27ZRsxRtBNkhWRf"
              download="Alexander_Rengkat_Resume.pdf"
              className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Download Resume
            </motion.a>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
              ABOUT ME
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Results-driven Full-Stack Developer with 4+ years of experience building dynamic web
              applications using modern technologies. Adept at both frontend and backend
              development, with expertise in React, Next.js, Node.js, Express, MongoDB, and Go
              (Golang). Combines technical proficiency with a strong educational background in
              Chemistry and a passion for mentoring aspiring developers.
            </p>

            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">{info.icon}</div>
                  <div>
                    <div className="text-teal-400 font-semibold">{info.label}</div>
                    <div className="text-gray-300">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <div className="mt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
            MY INTERESTS
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.text}
                className="flex flex-col items-center"
                variants={interestAnimate}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}>
                <div className="w-20 h-20 rounded-full border-2 border-teal-400 flex items-center justify-center mb-4 transition-all duration-300 hover:bg-gradient-to-r from-teal-400 to-cyan-500 hover:border-transparent group">
                  <interest.icon className="text-3xl text-teal-400 group-hover:text-white" />
                </div>
                <h3 className="text-white text-center font-medium text-lg">{interest.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
