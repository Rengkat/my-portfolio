import SchoolIcon from "@mui/icons-material/School";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";

const Education = () => {
  return (
    <div className="bg-[#313741] py-[5rem]">
      <h1 className="edu font-bold text-5xl text-center mt-[4rem] mb-[6rem]">EDUCATION</h1>
      <div className="w-full flex justify-start">
        <Timeline position="left" sx={{}}>
          <TimelineItem sx={{}}>
            <TimelineSeparator>
              <TimelineContent>
                <div className="w-[4rem] h-[4rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                  <SchoolIcon sx={{ fontSize: "2rem", color: "#14e8c8" }} />
                </div>
              </TimelineContent>
              <TimelineConnector sx={{ height: "7rem", width: ".3rem", background: "#14e8c8" }} />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem position="right" sx={{}}>
            <TimelineOppositeContent>
              <h1 className="text-[#14e8c8] font-bold text-3xl">MASTER DEGREE</h1>
              <h3 className="text-white">UNIVERSITY OF NIGERIA, NSUKKA, NIGERIA | 2021 - 2023</h3>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <div className="w-[2rem] h-[2rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                <TimelineDot sx={{ background: "#14e8c8" }} />
              </div>
              <TimelineConnector sx={{ height: "7rem", width: ".3rem", background: "#14e8c8" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="text-white">
                I hold a Master of Science and Education in Chemistry from the University of
                Nigeria, Nsukka, showcasing my expertise and dedication to advancing my knowledge in
                the field of chemistry.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem position="right" sx={{}}>
            <TimelineOppositeContent>
              <Typography className="text-white">
                I hold a Master of Science and Education in Chemistry from the University of
                Nigeria, Nsukka, showcasing my expertise and dedication to advancing my knowledge in
                the field of chemistry.
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <div className="w-[2rem] h-[2rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                <TimelineDot sx={{ background: "#14e8c8" }} />
              </div>
              <TimelineConnector sx={{ height: "7rem", width: ".3rem", background: "#14e8c8" }} />
            </TimelineSeparator>
            <TimelineContent>
              <h1 className="text-[#14e8c8] font-bold text-3xl">BACHELOR DEGREE</h1>
              <h3 className="text-white">UNIVERSITY OF JOS, JOS, NIGERIA | 2021 - 2023</h3>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem position="right" sx={{}}>
            <TimelineOppositeContent>
              <h1 className="text-[#14e8c8] font-bold text-3xl">OTHER CERTIFICATIONS</h1>
              <h3 className="text-white">ONLINE COURSES | 2020 - Present</h3>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <div className="w-[2rem] h-[2rem] rounded-full border-2 border-[#14e8c8] grid place-content-center">
                <TimelineDot sx={{ background: "#14e8c8" }} />
              </div>
              <TimelineConnector sx={{ height: "20rem", width: ".3rem", background: "#14e8c8" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="text-white">
                I have completed a series of comprehensive online courses and certifications to
                enhance my skills in web development and programming. These courses include:
              </Typography>

              <ul className="text-white list-disc ml-5">
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
            </TimelineContent>
          </TimelineItem>
          <TimelineItem sx={{}}>
            <TimelineSeparator>
              <TimelineContent>
                <div className="w-[2rem] h-[2rem] rounded-full bg-[#14e8c8]">
                  {/* <SchoolIcon sx={{ fontSize: "2rem", color: "#14e8c8" }} /> */}
                </div>
              </TimelineContent>
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
