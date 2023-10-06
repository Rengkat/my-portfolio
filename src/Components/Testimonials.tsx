import { projectHub } from "../assets";
const Testimonials = () => {
  return (
    <div className="bg-[#22252c] pt-[4rem] md:pt-[8rem] pb-[6rem] md:pb-[10rem]">
      <h1 className="edu font-bold text-5xl text-center py-[5rem]">TESTIMONIALS </h1>
      <div className="w-[90%] md:w-[60%] mx-auto flex flex-col items-center">
        <img
          src={projectHub}
          alt=""
          className="w-[8rem] h-[8rem] rounded-full
        "
        />
        <h2 className="testimonial text-2xl font-bold my-5">Kamshinen Joel</h2>

        <p className="testimonisl-text text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde deserunt sed inventore,
          molestiae voluptatibus magnam perspiciatis hic ullam, incidunt nemo omnis dolorem animi
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
