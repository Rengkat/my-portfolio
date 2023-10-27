interface Props {
  title: string;
  subHeading: string;
}

const HeroComponent = ({ title, subHeading }: Props) => {
  return (
    <div className="project-hero w-full h-[55vh]">
      <div className="absolute top-[50%] left-[5%] md:left-[13%] z-[3]">
        <h1 className="proj-hero text-6xl font-bold">{title}</h1>
        <p className="text-white md:w-[60%] font-semibold my-2">{subHeading}</p>
      </div>
    </div>
  );
};

export default HeroComponent;
