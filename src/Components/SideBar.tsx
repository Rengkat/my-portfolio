import { Link } from "react-router-dom";
import { logo2 } from "../assets";
import CloseIcon from "@mui/icons-material/Close";
const SideBar = () => {
  return (
    <div className="w-[50%] md:w-[40%] lg:w-[20%] h-full bg-[#1c9d6c]">
      <div className="flex justify-between items-center shadow pb-[3rem] px-5 pt-5">
        <Link to={"/"}>
          <img src={logo2} alt="" />
        </Link>{" "}
        <CloseIcon
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
            padding: "3px",
          }}
        />
      </div>
      <nav className="flex flex-col">
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
