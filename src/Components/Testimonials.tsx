// import { testimonials } from "../assets";
import { useEffect, useState, useContext, Fragment } from "react";
import { AppContext } from "../Context/AppContext";
import { sanityImageUrl } from "../../lib/sanity";

const Testimonials = () => {
  const { testimonials, testminialsLoading } = useContext(AppContext);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    if (currentTestimonial >= testimonials.length) {
      setCurrentTestimonial(0);
    }
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => prev + 1);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [currentTestimonial, testimonials]);
  return (
    <div id="testimonials" className="scroll-mt-40 overflow-hidden bg-[#22252c]">
      {testminialsLoading ? (
        <div className="w-full h-[40vh] flex items-center justify-center">
          <div className="text-white text-2xl font-bold">Loading...</div>
        </div>
      ) : (
        <div className="pt-[4rem] md:pt-[6rem] pb-[6rem] md:pb-[10rem] ">
          <h1 className="edu font-bold text-5xl text-center py-[5rem]">TESTIMONIALS </h1>
          <div className="w-[90%] md:w-[60%] h-[50vh] mx-auto flex flex-col items-center relative overflow-hidden">
            {testimonials.map((testimonial, index) => {
              return (
                <Fragment key={testimonial._id}>
                  <div
                    className={`absolute ${
                      currentTestimonial > index
                        ? "-translate-x-[150%]"
                        : currentTestimonial === index
                        ? "translate-x-0"
                        : "translate-x-[150%]"
                    } flex flex-col items-center transition-all duration-[0.5s] ease-linear `}>
                    <img
                      src={sanityImageUrl(testimonial.image).width(700).url()}
                      className="w-[8rem] h-[8rem] rounded-full object-cover"
                    />

                    <h2 className="testimonial text-2xl font-bold my-5">
                      {testimonial.firstName} {testimonial.surname}
                    </h2>

                    <p className="testimonisl-text text-white text-center">
                      {testimonial.testimony}
                    </p>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <button onClick={() => setCurrentTestimonial((prev) => prev + 1)}>CLICK</button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;

// {
//   testimonials.map((testimonial, index) => {
//     return <Fragment></Fragment>;
//   });
// }
