import { useEffect, useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { sanityImageUrl } from "../../lib/sanity";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { testimonials, testminialsLoading } = useContext(AppContext);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (testimonials.length > 0 && currentTestimonial >= testimonials.length) {
      setCurrentTestimonial(0);
    }
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentTestimonial, testimonials]);

  function getInitials(name: string) {
    const names = name.split(" ");
    return names.map((n) => n[0]).join("");
  }

  return (
    <section id="testimonials" className="bg-[#22252c] py-20 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#17d497] via-[#12deb3] to-[#08f7f7]">
          TESTIMONIALS
        </h1>

        {testminialsLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-2xl font-bold text-white">
              Loading testimonials...
            </div>
          </div>
        ) : (
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial._id}
                className={`absolute inset-0 flex flex-col items-center transition-all duration-500 ease-in-out ${
                  currentTestimonial === index
                    ? "opacity-100 translate-x-0"
                    : index < currentTestimonial
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}>
                <div className="relative">
                  {testimonial?.image ? (
                    <img
                      src={sanityImageUrl(testimonial.image).width(700).url()}
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#14e8c8] shadow-lg"
                      alt={`${testimonial.firstName} ${testimonial.surname}`}
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full border-4 border-[#14e8c8] flex items-center justify-center bg-[#1a1d24] shadow-lg">
                      <span className="text-4xl font-bold text-[#14e8c8]">
                        {getInitials(`${testimonial.firstName} ${testimonial.surname}`)}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mt-6 mb-2">
                  {testimonial.firstName} {testimonial.surname}
                </h3>

                <div className="max-w-2xl mx-auto text-center text-white text-lg leading-relaxed px-4">
                  "{testimonial.testimony}"
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "bg-[#14e8c8] w-6" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
