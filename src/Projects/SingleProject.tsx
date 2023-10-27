import { PiGithubLogoFill } from "react-icons/pi";
import LinkIcon from "@mui/icons-material/Link";
// import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Project {
  name: string;
  link: string;
  github: string;
  image: string;
}
interface Props {
  project: Project;
}
const SingleProject = ({ project }: Props) => {
  return (
    <div className="project-relative h-[50vh] lg:h-[40vh] w-full">
      <img src={project.image} alt={project?.name} className="w-full h-full object-cover" />
      <div className="project-overlay py-10 px-5 flex flex-col justify-between">
        <div className="w-full flex justify-center gap-5 mt-[2rem]">
          <PiGithubLogoFill className="single-pro-icon " />
          <Link to={`/projects/1`}>
            <LinkIcon sx={{ fontSize: "3rem" }} className="single-pro-icon " />
          </Link>
        </div>
        <div>
          <h1 className=" uppercase font-semibold text-2xl">Lorem ipsum dolor</h1>
          <p className="subpro text-xl font-semibold uppercase">Lorem, ipsum dolor</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
