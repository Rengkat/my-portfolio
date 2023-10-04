import { facebook, github, instagram, linkedin, twitter } from "../assets";

const Nav = () => {
  return (
    <>
      <div className="nav fixed top-0 w-full z-[5]">
        <div className="w-[90%] md:w-[75%] mx-auto flex justify-between">
          <ul className="flex list-none gap-5">
            <li>
              <a target="_blank" href="https://github.com/Rengkat" className=" w-5 h-5">
                <img src={github} alt="" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" className=" w-5 h-5">
                <img src={facebook} alt="" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/alexander-rengkat-b2293b1a3">
                <img src={linkedin} alt="" className="w-6 h-6" />
              </a>
            </li>
          </ul>
          <header className="cursor-pointer">
            <aside className="menu w-8 flex flex-col gap-[.3rem]">
              <div className="bar w-[80%]"></div>
              <div className="bar"></div>
              <div className="bar w-[60%]"></div>
            </aside>
          </header>
        </div>
        {/* <nav className="flex ">
          <Link to={"/"} className="link">
            About
          </Link>
          <Link to={"#"} className="link">
            Resume
          </Link>
          <Link to={"#"} className="link">
            Portfolio
          </Link>
          <Link to={"#"} className="link">
            Blogs
          </Link>
          <Link to={"#"} className="link">
            Contact
          </Link>
        </nav> */}
      </div>
    </>
  );
};

export default Nav;
