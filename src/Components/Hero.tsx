import Nav from "./Nav";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Nav />
        <div className="banner absolute z-[2] left-[2rem] md:left-[7rem] xl:left-[12rem]">
          <h1 className="font-light text-[6rem] md:text-[8rem] text-white">Hello!</h1>
          <h1 className="font-bold text-[2rem] md:text-[4rem] text-white -mt-5">
            I'm Alexander Rengkat
          </h1>
          <p className="text-white text-2xl lg:text-3xl">Front-End Developer</p>
        </div>
      </div>
    </>
  );
};

export default Hero;

//  left: 10rem;
//   right: 0;
//   text-align: left;
//   padding: 20px;
//   z-index: 2;
