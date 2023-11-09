import { testimonials } from "../assets";
import { useEffect } from "react";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [currentTestimonial, testimonials]);
  const singleTestimony = testimonials[currentTestimonial];
  return (
    <div
      id="testimonials"
      className="bg-[#22252c] pt-[4rem] md:pt-[6rem] pb-[6rem] md:pb-[10rem] scroll-mt-40">
      <h1 className="edu font-bold text-5xl text-center py-[5rem]">TESTIMONIALS </h1>
      <div className="w-[90%] md:w-[60%] h-[50vh] mx-auto flex flex-col items-center">
        <img
          src={singleTestimony?.img}
          alt=""
          className="w-[8rem] h-[8rem] rounded-full object-cover
        "
        />
        <h2 className="testimonial text-2xl font-bold my-5">{singleTestimony.name}</h2>

        <p className="testimonisl-text text-white text-center">{singleTestimony.testimony}</p>
      </div>
    </div>
  );
};

export default Testimonials;
