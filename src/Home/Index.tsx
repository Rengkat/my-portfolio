// import AboutMe from "../Components/AboutMe"

import BlogsShowcase from "../Components/BlogsShowcase";
import Education from "../Components/Education";
import Experiences from "../Components/Experiances";
import Hero from "../Components/Hero";
import HireMe from "../Components/Hire";
import AboutMe from "../Components/PersonalDetail";
import ProjectShow from "../Components/ProjectShow";
import Skills from "../Components/Skills";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
      <div id="top" className="scroll-smooth">
        <Hero />
        <AboutMe />
        <Education />
        <Experiences />
        <Skills />
        <ProjectShow />
        <Testimonials />
        <HireMe />
        <BlogsShowcase />
      </div>
    </>
  );
};

export default Home;
