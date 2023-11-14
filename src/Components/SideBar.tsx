import { Link, useLocation } from "react-router-dom";
import { logo2 } from "../assets";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

const SideBar = () => {
  const context = useContext(AppContext);
  const openMainNav = context?.openMainNav;
  const location = useLocation();
  // console.log(location);
  const homeRoute =
    location.pathname !== "/" ? (
      <Link to={"/"} className="link">
        Home
      </Link>
    ) : (
      <a href="#home" className="link">
        Home
      </a>
    );
  return (
    <div className="w-[50%] md:w-[40%] lg:w-[25%] xl:w-[20%] h-full bg-[#1c9d6c]">
      <div className="flex justify-between items-center shadow pb-[3rem] px-5 pt-5">
        <Link to={"/"} onClick={() => openMainNav?.()}>
          <img src={logo2} alt="" />
        </Link>
        <CloseIcon
          onClick={() => openMainNav?.()}
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
            padding: "3px",
            cursor: "pointer",
          }}
        />
      </div>
      <nav onClick={() => openMainNav?.()} className="flex flex-col">
        {homeRoute}
        <a href="#about" className="link">
          About
        </a>
        <a href="#education" className="link">
          Education
        </a>
        <a href="#experiences" className="link">
          Experiences
        </a>
        <a href="#skills" className="link">
          Skills
        </a>
        <a href="#projects" className="link">
          Projects
        </a>
        <a href="#testimonials" className="link">
          Testimonial
        </a>
        <a href="#blogs" className="link">
          Blogs
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
