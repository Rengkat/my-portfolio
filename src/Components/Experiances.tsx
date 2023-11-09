import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
const Experiences = () => {
  return (
    <div id="experiences" className="bg-[#22252c] py-[5rem] scroll-mt-40">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <h1 className="edu font-bold text-3xl md:text-5xl text-center mt-[4rem] mb-[6rem]">
          EXPERIENCES{" "}
        </h1>
        <div className="w-full">
          <Timeline position="left" sx={{ width: "100%" }}>
            <TimelineItem className="-ml-[2rem] lg:-ml-[0rem]">
              <TimelineSeparator>
                <TimelineContent>
                  <div className="w-[4rem] h-[4rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                    <AccountBalanceIcon sx={{ fontSize: "2rem", color: "#14e8c8" }} />
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
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true }}>
                  <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">
                    FRONT-END DEVELOPER
                  </h1>
                  <h3 className="text-white">YOSRIS AFRICA, LAGOS, NIGERIA | 2021 - PRESENT</h3>
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
                    <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">
                      FRONT-END DEVELOPER
                    </h1>
                    <h3 className="text-white">YOSRIS AFRICA, LAGOS, NIGERIA | 2021 - PRESENT</h3>
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
                  I hold a Master of Science and Education in Chemistry from the University of
                  Nigeria, Nsukka, showcasing my expertise and dedication to advancing my knowledge
                  in the field of chemistry.
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
                  <div>
                    <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">
                      WORDPRESS DESIGNER/ BLOGGER
                    </h1>
                    <h3 className="text-white mb-3 lg:mb-0">
                      HEADLINE NEWS, LAGOS, NIGERIA | 2021 - 2023
                    </h3>
                  </div>

                  <Typography className="text-white lg:hidden text-sm md:text-base">
                    I hold a Master of Science and Education in Chemistry from the University of
                    Nigeria, Nsukka, showcasing my expertise and dedication to advancing my
                    knowledge in the field of chemistry.
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
                    YOUTUBE CONTENT CREATOR
                  </h1>
                  <h3 className="text-white">THE CATALYST | 2020 - Present</h3>
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
                      YOUTUBE CONTENT CREATOR
                    </h1>
                    <h3 className="text-white">THE CATALYST | 2020 - Present</h3>
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
                  </ul>
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
                  I have completed a series of comprehensive online courses and certifications to
                  enhance my skills in web development and programming. These courses include:
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
                  <div className="mb-3 lg:mb-0">
                    <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">
                      MATHEMATICS/ CHEMISTRY INSTRUCTOR
                    </h1>
                    <h3 className="text-white">NATIONAL YOUTH SERVICE CORP | 2018 - 2019</h3>
                  </div>
                  <div className=" block lg:hidden text-white text-sm md:text-base">
                    I have completed a series of comprehensive online courses and certifications to
                    enhance my skills in web development and programming. These courses include:
                  </div>
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

export default Experiences;
