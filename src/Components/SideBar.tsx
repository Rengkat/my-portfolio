import { Link } from "react-router-dom";
import { logo2 } from "../assets";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
const SideBar = () => {
  const context = useContext(AppContext);
  const openMainNav = context?.openMainNav;

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
        <Link to={"/"} className="link">
          Home
        </Link>
        <Link to={"#"} className="link">
          About
        </Link>
        <Link to={"#"} className="link">
          Education
        </Link>
        <Link to={"#"} className="link">
          Experiences
        </Link>
        <Link to={"#"} className="link">
          Skills
        </Link>
        <Link to={"/projects"} className="link">
          Projects
        </Link>
        <Link to={"#"} className="link">
          Testimonial
        </Link>
        <Link to={"/blogs"} className="link">
          Blogs
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
