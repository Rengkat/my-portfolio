// Nav.jsx - Completely modernized navigation
import { useContext, useState, useEffect } from "react";
import { facebook, github, instagram, linkedin, twitter } from "../assets";
import { AppContext } from "../Context/AppContext";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const context = useContext(AppContext);
  const openMainNav = context?.openMainNav;
  const handleClick = () => {
    openMainNav?.();
  };
  
  const path = useLocation().pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-30 transition-all duration-500 ${
      path === "/" && !scrolled 
        ? "bg-transparent" 
        : "nav backdrop-blur-md shadow-md"
    }`}>
      <div className="w-[90%] md:w-[85%] lg:max-w-6xl mx-auto flex justify-between items-center py-4">
        {/* Social links with modern styling */}
        <ul className="flex list-none gap-4 md:gap-5">
          {[
            { icon: github, href: "https://github.com/Rengkat", alt: "github" },
            { icon: facebook, href: "https://m.facebook.com/profile.php/?id=100006361571808", alt: "facebook" },
            { icon: instagram, href: "https://www.instagram.com/alexrengkat/", alt: "instagram" },
            { icon: twitter, href: "https://twitter.com/RengkatAlex", alt: "twitter" },
            { icon: linkedin, href: "https://www.linkedin.com/in/alexander-rengkat-b2293b1a3", alt: "linkedin" }
          ].map((social, index) => (
            <li key={index}>
              <a 
                target="_blank" 
                href={social.href} 
                className="block p-2 rounded-full transition-all duration-300 hover:bg-teal-100/50"
                aria-label={social.alt}
              >
                <img 
                  src={social.icon} 
                  alt={social.alt} 
                  className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:scale-110" 
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Modern hamburger menu */}
        <button 
          onClick={handleClick}
          className="p-2 rounded-lg hover:bg-teal-100/50 transition-colors duration-300 group"
          aria-label="Open menu"
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
            <div className={`h-0.5 w-6 transition-all duration-300 ${path === "/" && !scrolled ? 'bg-white' : 'bg-gray-800'} group-hover:bg-teal-500`}></div>
            <div className={`h-0.5 w-5 transition-all duration-300 ${path === "/" && !scrolled ? 'bg-white' : 'bg-gray-800'} group-hover:bg-teal-500 group-hover:w-6`}></div>
            <div className={`h-0.5 w-4 transition-all duration-300 ${path === "/" && !scrolled ? 'bg-white' : 'bg-gray-800'} group-hover:bg-teal-500 group-hover:w-6`}></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Nav;