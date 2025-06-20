import { useContext } from "react";
import { facebook, github, instagram, linkedin, twitter } from "../assets";
import { AppContext } from "../Context/AppContext";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const context = useContext(AppContext);
  const openMainNav = context?.openMainNav;
  const handleClick = () => {
    openMainNav?.();
  };
  // bg-[#313741]
  const path = useLocation().pathname;

  return (
    <>
      <div
        className={`${path === "/" ? "nav" : "bg-[#313741] py-[1.8rem]"} fixed top-0 w-full z-[5]`}>
        <div className="w-[90%] md:w-[75%] mx-auto flex justify-between py-[1rem]">
          <ul className="flex list-none gap-5">
            <li>
              <a target="_blank" href="https://github.com/Rengkat" className=" w-5 h-5">
                <img src={github} alt="github" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://m.facebook.com/profile.php/?id=100006361571808" className=" w-5 h-5">
                <img src={facebook} alt="facebook" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alexrengkat/">
                <img src={instagram} alt="instagram" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/RengkatAlex">
                <img src={twitter} alt="twitter" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/alexander-rengkat-b2293b1a3">
                <img src={linkedin} alt="linkedin" className="w-6 h-6" />
              </a>
            </li>
          </ul>
          <header className="cursor-pointer">
            <aside onClick={handleClick} className="menu w-8 flex flex-col gap-[.3rem]">
              <div className="bar w-[80%]"></div>
              <div className="bar"></div>
              <div className="bar w-[60%]"></div>
            </aside>
          </header>
        </div>
      </div>
    </>
  );
};

export default Nav;
