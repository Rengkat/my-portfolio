import { personalImage } from "../assets";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import FlightIcon from "@mui/icons-material/Flight";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import LiveTvIcon from "@mui/icons-material/LiveTv";
const AboutMe = () => {
  return (
    <div className="bg-[#22252c] p-5">
      <div className="flex flex-col">
        <aside className="my-[2rem]">
          <div className="border-[.3rem] border-[#60efff] w-full h-[60vh] ">
            <img
              src={personalImage}
              alt="personal Image"
              className="w-[100%] h-full object-cover"
            />
          </div>
          <button className="resume text-white text-xl font-bold py-3 px-6 my-5 shadow-lg">
            Download Resume
          </button>
        </aside>
        <aside>
          <h1 className="abtm font-bold text-5xl my-5">ABOUT ME</h1>
          <p className="text-white text-xl">
            Hello! I'm Alexander Rengkat, a Front-End Developer based in Jos, Plateau State,
            Nigeria, with over 4 years of experience. I specialize in creating dynamic web projects
            using modern front-end technologies. My expertise includes advanced HTML5, CSS3,
            JavaScript, Tailwind CSS, React, and Next.js. Beyond my technical skills, I bring a
            strong educational background in Chemistry and Education to my work.
          </p>
        </aside>
      </div>
      <div className="my-[6rem]">
        <h1 className="int font-bold text-5xl my-[10rem] text-center">MY INTERESTS</h1>
        <div className="w-[90%] mx-auto grid grid-cols-2 gap-5">
          <aside className="circle-cont">
            <div className="circle">
              <AutoStoriesIcon />
            </div>
            <h1 className="interest-title">Reading</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <AudiotrackIcon />
            </div>
            <h1 className="interest-title">Music</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <FlightIcon />
            </div>
            <h1 className="interest-title">Travel</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <CastForEducationIcon />
            </div>
            <h1 className="interest-title">Teaching</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <SchoolIcon />
            </div>
            <h1 className="interest-title">Learning</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <LiveTvIcon />
            </div>
            <h1 className="interest-title">Movies</h1>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
