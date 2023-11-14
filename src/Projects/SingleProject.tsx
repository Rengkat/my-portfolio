import { PiGithubLogoFill } from "react-icons/pi";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Project } from "../Types";
import { sanityImageUrl } from "../../lib/sanity";

interface Props {
  project: Project;
}
// cons
const SingleProject = ({ project }: Props) => {
  return (
    <div className="project-relative h-[40vh] lg:h-[40vh] w-full">
      <img
        src={sanityImageUrl(project.mainImage).width(700).url()}
        className="w-full h-full object-cover"
      />
      <div className="project-overlay py-10 px-5 flex flex-col justify-between">
        <div className="w-full flex justify-center gap-5 mt-[2rem]">
          <a href={project.githubLink} target="_blank">
            <PiGithubLogoFill className="single-pro-icon " />
          </a>
          <Link to={`/projects/${project.slug.current}`}>
            <LinkIcon sx={{ fontSize: "3rem" }} className="single-pro-icon " />
          </Link>
        </div>
        <div>
          <h1 className=" uppercase font-semibold text-2xl">{project.title}</h1>
          <p className="subpro text-xl font-semibold uppercase">{project.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
