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
    <div>
      <img src={project.image} alt={project?.name} className="" />
    </div>
  );
};

export default SingleProject;
