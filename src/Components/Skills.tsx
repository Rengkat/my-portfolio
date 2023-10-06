import { Fragment } from "react";
import { icons } from "../assets";

const Skills = () => {
  return (
    <div className="bg-[#313741] pt-[10rem] pb-[5rem]">
      <h1 className="edu font-bold text-3xl md:text-5xl text-center pb-[4rem] md:pb-[8rem]">
        PROFESSIONAL SKILLS{" "}
      </h1>
      <div className="flex justify-center w-full">
        <div className="w-[70%] mx-auto grid grid-cols-3 gap-12 md:gap-5  ">
          {icons.map((skill, index) => {
            return (
              <Fragment key={index}>
                <div className=" flex flex-col items-center">
                  <div className="skill-icon grid place-content-center rounded-full ">
                    <img
                      src={skill.icon}
                      alt={skill.title}
                      className="w-[4rem] md:w-[5rem] h-[4rem] md:h-[5rem] skill-img"
                    />
                  </div>
                  <h1 className="skill-title uppercase font-bold text-sm md:text-3xl text-center my-5">
                    {skill.title}
                  </h1>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <h1 className="edu font-bold text-3xl md:text-5xl text-center pt-[8rem] md:pt-[15rem]">
        PROFESSIONAL SKILLS{" "}
      </h1>
    </div>
  );
};

export default Skills;
