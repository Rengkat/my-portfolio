import { MdOutlineLightMode, MdContactMail, MdOutlineDarkMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { FaUserTie, FaBlogger } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillContainer } from "react-icons/ai";
import { SiFacebookgaming } from "react-icons/si";
import sun from "../assets/sun.svg";
import { Link } from "react-router-dom";
const DesktopNav = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      <header className=" py-[2rem] bg-red-400 flex flex-col gap-[2rem] ">
        <aside className="grid place-content-center">
          <div className="menu w-8 flex flex-col gap-[.3rem] ">
            <div className="bar w-[80%]"></div>
            <div className="bar"></div>
            <div className="bar w-[60%]"></div>
          </div>
        </aside>
        <aside className="grid place-content-center">
          <img src={sun} className=" h-8" />
        </aside>
      </header>
      <nav className="bg-red-400 p-5 flex flex-col gap-[.3rem]">
        <Link to={"/"} className="link">
          <span>About</span>
          <FaUserTie className="nav-icon" />
        </Link>
        <Link to={"/resume"} className="link">
          <span>Resume</span>
          <AiFillContainer className="nav-icon" />
        </Link>
        <Link to={"/portfolios"} className="link">
          <span>Portfolio</span>
          <SiFacebookgaming className="nav-icon" />
        </Link>
        <Link to={"/blogs"} className="link">
          <span>Blogs</span>
          <FaBlogger className="nav-icon" />
        </Link>
        <Link to={"/contact"} className="link">
          <span>Contact</span>
          <BsFillEnvelopeFill className="nav-icon" />
        </Link>
      </nav>
    </div>
  );
};

export default DesktopNav;
