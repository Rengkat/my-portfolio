// SideBar.jsx - Modernized sidebar navigation
import { Link, useLocation } from "react-router-dom";
import { logo2 } from "../assets";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

const SideBar = () => {
  const context = useContext(AppContext);
  const openMainNav = context?.openMainNav;
  const location = useLocation();
  
  const homeRoute =
    location.pathname !== "/" ? (
      <Link to={"/"} className="link" onClick={() => openMainNav?.()}>
        Home
      </Link>
    ) : (
      <a href="#top" className="link" onClick={() => openMainNav?.()}>
        Home
      </a>
    );
    
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experiences", label: "Experiences" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="w-72 h-full bg-gradient-to-b from-teal-800 to-cyan-900 shadow-xl">
      <div className="flex justify-between items-center p-6 border-b border-teal-600/30">
        <Link to={"/"} onClick={() => openMainNav?.()}>
          <img src={logo2} alt="Alexander Rengkat" className="h-8" />
        </Link>
        <button 
          onClick={() => openMainNav?.()}
          className="p-1.5 rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200"
          aria-label="Close menu"
        >
          <CloseIcon sx={{ color: "white", fontSize: "1.5rem" }} />
        </button>
      </div>
      
      <nav className="p-6 flex flex-col gap-2">
        <div className="mb-4">
          {homeRoute}
        </div>
        
        {navItems.map((item, index) => (
          <a 
            key={index}
            href={item.href} 
            className="link py-3 px-4 rounded-lg transition-all duration-300 hover:bg-teal-700/50 hover:pl-6"
            onClick={() => openMainNav?.()}
          >
            {item.label}
          </a>
        ))}
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Alexander Rengkat
      </div>
    </div>
  );
};

export default SideBar;