import img from "../assets/projecthub.png";
import { FaLink } from "react-icons/fa";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
const DetailProject = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="w-[95%] md:w-[80%] lg:w-[90%] xl:w-[75%] mx-auto pt-[5rem] flex flex-col lg:flex-row gap-[1.5rem]">
      <aside
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className="w-full lg:w-[65%] h-[60%] md:h-[65vh] relative overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div>
          <ArrowBackIosIcon
            sx={{
              fontSize: "4rem",
              left: `${isHover ? 1 : -10}rem`,
              position: "absolute",
              top: "50%",
              transition: "left 0.5s",
              cursor: "pointer",
            }}
          />
          <ArrowForwardIosIcon
            sx={{
              fontSize: "3.5rem",
              right: `${isHover ? 1 : -10}rem`,
              position: "absolute",
              top: "50%",
              transition: "right 0.5s",
              cursor: "pointer",
            }}
          />
        </div>
      </aside>
      <aside className="w-full md:w-[70%] lg:w-[30%] text-white">
        <h1 className="font-bold text-xl pb-3 text-[#14e8c8]">PROJECT INFO.</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreu fugiat
            nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl py-3 text-[#14e8c8]">CLIENT</h1>
          <p>Personal Project</p>
        </div>
        <div>
          <h1 className="font-bold text-xl py-3 text-[#14e8c8]">TECHNOLOGY USED</h1>
          <p>HTML, CSS, JavaScript</p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center gap-3 bg-[#14e8c8] rounded py-3 px-5 shadow mt-[1rem] font-bold w-full  lg:w-[50%]">
          <span>
            <FaLink />
          </span>
          Go Live
        </a>
      </aside>
    </div>
  );
};

export default DetailProject;
