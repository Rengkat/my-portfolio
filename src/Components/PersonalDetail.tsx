import { personalImage } from "../assets";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import FlightIcon from "@mui/icons-material/Flight";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import FlagIcon from "@mui/icons-material/Flag";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import FolderZipIcon from "@mui/icons-material/FolderZip";
const AboutMe = () => {
  return (
    <div className="bg-[#22252c] p-4 ">
      <div className="md:w-[80%] mx-auto flex flex-col md:flex-row">
        <aside className="my-[2rem] md:w-[50%]">
          <div className="border-[.3rem] border-[#14e8c8] w-full md:w-[90%] md:h-full ">
            <img
              src={personalImage}
              alt="personal Image"
              className="w-[80%] md:h-full  object-cover"
            />
          </div>
          <button className="resume text-white text-xl font-bold py-3 px-6 my-5 shadow-lg hover:shadow-2xl">
            Download Resume
          </button>
        </aside>
        <aside className="md:w-1/2">
          <h1 className="abtm font-bold text-4xl md:text-5xl my-5">ABOUT ME</h1>
          <p className="text-white text-base md:text-xl">
            Hello! I'm Alexander Rengkat, a Front-End Developer based in Jos, Plateau State,
            Nigeria, with over 4 years of experience. I specialize in creating dynamic web projects
            using modern front-end technologies. My expertise includes advanced HTML5, CSS3,
            JavaScript, Tailwind CSS, React, and Next.js. Beyond my technical skills, I bring a
            strong educational background in Chemistry and Education to my work.
          </p>
          <section className="mt-[2rem]">
            <aside className="detail-info">
              <div className="label-detail">
                <DriveFileRenameOutlineIcon /> <label htmlFor="name">NAME:</label>
              </div>
              <h2 className="info-text">Alexander Rengkat</h2>
            </aside>
            <aside className="detail-info">
              <div className="label-detail">
                <FlagIcon /> <label htmlFor="nationality">NATIONALITY:</label>
              </div>
              <h2 className="info-text">Nigeria</h2>
            </aside>
            <aside className="detail-info">
              <div className="label-detail">
                <LocationOnIcon /> <label htmlFor="address">ADDRESS:</label>
              </div>
              <h2 className="info-text">Jos, Plateau State, Nigeria</h2>
            </aside>
            <aside className="detail-info">
              <div className="label-detail">
                <FolderZipIcon /> <label htmlFor="address">ZIP/ POSTAL CODE:</label>
              </div>
              <h2 className="info-text">930272</h2>
            </aside>
            <aside className="detail-info">
              <div className="label-detail">
                <PhoneEnabledIcon /> <label htmlFor="address">PHONE:</label>
              </div>
              <h2 className="info-text">+234 806 758 1175, +234 815 326 3319</h2>
            </aside>
            <aside className="detail-info">
              <div className="label-detail">
                <EmailIcon /> <label htmlFor="address">EMAIL:</label>
              </div>
              <h2 className="info-text">alexrengkat@gmail.com</h2>
            </aside>
          </section>
        </aside>
      </div>
      <div className="my-[6rem]">
        <h1 className="int font-bold text-4xl md:text-5xl mt-[8rem] mb-[4rem] md:mt-[10rem] md:mb-[10rem] text-center">
          MY INTERESTS
        </h1>
        <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
          <aside className="circle-cont">
            <div className="circle">
              <AutoStoriesIcon sx={{ fontSize: "2rem" }} />
            </div>
            <h1 className="interest-title">Reading</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <AudiotrackIcon sx={{ fontSize: "2rem" }} />
            </div>
            <h1 className="interest-title">Music</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <FlightIcon sx={{ fontSize: "2rem" }} />
            </div>
            <h1 className="interest-title">Travel</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <CastForEducationIcon sx={{ fontSize: "2rem" }} />
            </div>
            <h1 className="interest-title">Teaching</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <SchoolIcon sx={{ fontSize: "2rem" }} />
            </div>
            <h1 className="interest-title">Learning</h1>
          </aside>
          <aside className="circle-cont">
            <div className="circle">
              <LiveTvIcon sx={{ fontSize: "2rem" }} />
            </div>
            <h1 className="interest-title">Movies</h1>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
