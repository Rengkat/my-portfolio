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
                  sx={{ height: "18rem", width: ".3rem", background: "#14e8c8" }}
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
                    <ul className=" list-disc ml-2">
                      <li>
                        Created super admin dashboard using {""}
                        <span className="tech-used">
                          React, Redux Toolkit, styled components, Material UI, Redux Persist, and
                          Recharts
                        </span>
                      </li>
                      <li>
                        Worked collaboratively in a 6-member cross-functional team, utilizing {""}
                        <span className="tech-used">GitHub, Google Meet, and Slack </span>
                      </li>
                      <li>
                        Evaluated 13+ UI/UX <span className="tech-used">Figma</span> designs for
                        technical feasibility and improved implementation
                      </li>
                      <li>
                        Expanded dashboard functionality by integrating 9+ APIs with {""}
                        <span className="tech-used">Axios and createAsyncThunk</span> for data
                        fetching
                      </li>
                    </ul>
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
                  <ul className=" list-disc text-justify">
                    <li>
                      Uploaded and published 20+ daily news stories and feature articles on
                      <span className="tech-used"> WordPress</span> , resulting in increased page
                      views and advertising revenue.
                    </li>
                    <li>
                      Developed and maintained front-end components with{" "}
                      <span className="tech-used">WordPress template</span>
                      hierarchy, custom post types, and advanced custom fields, using{" "}
                      <span className="tech-used">Elementor Page Builder</span> for a 35%
                      improvement in website functionality and user satisfaction.
                    </li>
                    <li>
                      Stayed updated on the latest <span className="tech-used">WordPress</span>{" "}
                      developments, integrating new versions and security updates to decrease
                      vulnerabilities and enhance website performance.
                    </li>
                  </ul>
                </motion.div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <div className="w-[2rem] h-[2rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                  <TimelineDot sx={{ background: "#14e8c8" }} />
                </div>
                <TimelineConnector
                  sx={{ height: "18rem", width: ".3rem", background: "#14e8c8" }}
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
                    <ul className=" list-disc text-justify">
                      <li>
                        Uploaded and published 20+ daily news stories and feature articles on
                        <span className="tech-used"> WordPress</span> , resulting in increased page
                        views and advertising revenue.
                      </li>
                      <li>
                        Developed and maintained front-end components with{" "}
                        <span className="tech-used">WordPress template</span>
                        hierarchy, custom post types, and advanced custom fields, using{" "}
                        <span className="tech-used">Elementor Page Builder</span> for a 35%
                        improvement in website functionality and user satisfaction.
                      </li>
                      <li>
                        Stayed updated on the latest <span className="tech-used">WordPress</span>{" "}
                        developments, integrating new versions and security updates to decrease
                        vulnerabilities and enhance website performance.
                      </li>
                    </ul>
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
                  sx={{ height: "16rem", width: ".3rem", background: "#14e8c8" }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true }}
                  className="text-white text-sm md:text-base">
                  <div className="lg:hidden mb-3 ">
                    <h1 className="text-[#14e8c8] font-bold text-xl md:text-3xl">
                      YOUTUBE CONTENT CREATOR
                    </h1>
                    <h3 className="text-white">THE CATALYST | 2020 - Present</h3>
                  </div>
                  <ul className=" list-disc ml-5">
                    <li>
                      Produced and published educational videos on chemistry and mathematics topics,
                      garnering subscribers.
                    </li>
                    <li>
                      Employed effective instructional strategies to break down complex mathematical
                      and chemistry concepts in video content.
                    </li>
                    <li>
                      Created video solutions for West African Examination Council, National
                      Examination Council, and Joint Admission Matriculation Board Past Questions
                      using Digital notepad and Microsoft whiteboard.
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
                  <ul className=" list-disc ml-5 text-justify">
                    <li>
                      Improved overall student performance by 30% through effective lesson plans in
                      <span className="tech-used">Further Mathematics and Chemistry</span>
                    </li>
                    <li>
                      Employed effective instructional strategies to break down complex{" "}
                      <span className="tech-used">mathematical and chemistry </span> concepts in
                      video content.
                    </li>
                    <li>
                      Enhanced student interest in <span className="tech-used">Chemistry</span>{" "}
                      through engaging laboratory experiments, achieving a 75% pass rate in National
                      examinations.
                    </li>
                  </ul>
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
                  <ul className=" list-disc ml-5 text-justify text-white text-sm md:text-base">
                    <li>
                      Improved overall student performance by 30% through effective lesson plans in
                      <span className="tech-used">Further Mathematics and Chemistry</span>
                    </li>
                    <li>
                      Employed effective instructional strategies to break down complex{" "}
                      <span className="tech-used">mathematical and chemistry </span> concepts in
                      video content.
                    </li>
                    <li>
                      Enhanced student interest in <span className="tech-used">Chemistry</span>{" "}
                      through engaging laboratory experiments, achieving a 75% pass rate in National
                      examinations.
                    </li>
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

export default Experiences;
