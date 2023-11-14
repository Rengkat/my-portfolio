import SchoolIcon from "@mui/icons-material/School";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

const Education = () => {
  return (
    <div id="education" className="bg-[#313741] py-[5rem] scroll-mt-40">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <h1 className="edu font-bold text-3xl md:text-5xl text-center mt-[4rem] mb-[6rem]">
          EDUCATION
        </h1>
        <div className="w-full ">
          <Timeline position="left" sx={{ width: "100%" }}>
            <TimelineItem className="-ml-[2rem] lg:-ml-[0rem]">
              <TimelineSeparator>
                <TimelineContent>
                  <div className="w-[4rem] h-[4rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                    <SchoolIcon sx={{ fontSize: "2rem", color: "#14e8c8" }} />
                  </div>
                </TimelineContent>
                <TimelineConnector sx={{ height: "6rem", width: ".3rem", background: "#14e8c8" }} />
              </TimelineSeparator>
              <TimelineContent className="hidden lg:block"></TimelineContent>
            </TimelineItem>
            <TimelineItem position="right" sx={{}}>
              <TimelineOppositeContent className=" hidden lg:block">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true }}>
                  <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">MASTER DEGREE</h1>
                  <h3 className="text-white">
                    UNIVERSITY OF NIGERIA, NSUKKA, NIGERIA | 2021 - 2023
                  </h3>
                </motion.div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <div className="w-[2rem] h-[2rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                  <TimelineDot sx={{ background: "#14e8c8" }} />
                </div>
                <TimelineConnector
                  sx={{ height: "12rem", width: ".3rem", background: "#14e8c8" }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true }}>
                  <div className="lg:hidden mb-3">
                    <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">MASTER DEGREE</h1>
                    <h3 className="text-white">
                      UNIVERSITY OF NIGERIA, NSUKKA, NIGERIA | 2021 - 2023
                    </h3>
                  </div>
                  <div className="text-white text-sm md:text-base">
                    I hold a Master of Science and Education in Chemistry from the University of
                    Nigeria, Nsukka, showcasing my expertise and dedication to advancing my
                    knowledge in the field of chemistry.
                  </div>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem position="right" sx={{}}>
              <TimelineOppositeContent className="hidden lg:block">
                <motion.div
                  className="text-white text-sm md:text-base"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true }}>
                  I Successfully completed a comprehensive four-year program at the University of
                  Jos, earning a Bachelor's degree in Chemistry and Education, honing analytical and
                  teaching skills.
                </motion.div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <div className="w-[2rem] h-[2rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                  <TimelineDot sx={{ background: "#14e8c8" }} />
                </div>
                <TimelineConnector
                  sx={{ height: "12rem", width: ".3rem", background: "#14e8c8" }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true }}>
                  <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">BACHELOR DEGREE</h1>
                  <h3 className="text-white mb-3 lg:mb-0">
                    UNIVERSITY OF JOS, JOS, NIGERIA | 2021 - 2023
                  </h3>
                  <Typography className="text-white lg:hidden text-sm md:text-base">
                    I Successfully completed a comprehensive four-year program at the University of
                    Jos, earning a Bachelor's degree in Chemistry and Education, honing analytical
                    and teaching skills.
                  </Typography>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem position="right" sx={{}}>
              <TimelineOppositeContent className="hidden lg:block">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true }}>
                  <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">
                    OTHER CERTIFICATIONS
                  </h1>
                  <h3 className="text-white">ONLINE COURSES | 2020 - Present</h3>
                </motion.div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <div className="w-[2rem] h-[2rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                  <TimelineDot sx={{ background: "#14e8c8" }} />
                </div>
                <TimelineConnector
                  sx={{ height: "20rem", width: ".3rem", background: "#14e8c8" }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true }}>
                  <div className="lg:hidden mb-3">
                    <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">
                      OTHER CERTIFICATIONS
                    </h1>
                    <h3 className="text-white">ONLINE COURSES | 2020 - Present</h3>
                  </div>
                  <div className="text-white text-sm md:text-base">
                    I have completed a series of comprehensive online courses and certifications to
                    enhance my skills in web development and programming. These courses include:
                  </div>
                  <ul className="text-white list-disc ml-5 text-sm md:text-base">
                    <li>Front-end Fundamentals from Purple.com</li>
                    <li>Modern JavaScript From The Beginning by Brad Traversy on Udemy.</li>
                    <li>
                      The Complete JavaScript Course: From Zero to Expert! by Jonson Schmedtmann on
                      Udemy.
                    </li>
                    <li>
                      WordPress for Beginners - Master WordPress Quickly by Andrew Williams on Udemy
                    </li>
                    <li>React Js. Course by John Smilga on Udemy</li>
                    <li>Understanding Typescript by Maximilian Schwarzmüller on Udemy.</li>
                    <li>Next Js & React by Maximilian Schwarzmüller on Udemy</li>
                  </ul>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="-ml-[1rem] lg:-ml-[0rem]">
              <TimelineSeparator>
                <TimelineContent>
                  <div className="w-[2rem] h-[2rem] rounded-full bg-[#14e8c8]">
                    {/* <SchoolIcon sx={{ fontSize: "2rem", color: "#14e8c8" }} /> */}
                  </div>
                </TimelineContent>
              </TimelineSeparator>
              <TimelineContent className="hidden lg:block"></TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
