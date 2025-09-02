// SharedRoute.jsx - Updated with modern design
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SideBar from "./Components/SideBar";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

const SharedRoute = () => {
  const { isMainMenuOpen } = useContext(AppContext) ?? { isMainMenuOpen: false };

  return (
    <div className="relative !scroll-smooth min-h-screen flex flex-col">
      {/* Overlay for sidebar */}
      <div
        className={`${
          isMainMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-500`}
      >
        <SideBar />
      </div>
      
      <main className="relative flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      
      {/* Back to top button */}
      <a href="#top" className="group">
        <div className="w-12 h-12 cursor-pointer z-20 rounded-full fixed bottom-6 right-6 grid place-content-center bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <KeyboardArrowUpIcon sx={{ fontSize: "1.8rem", color: "white" }} />
        </div>
      </a>
    </div>
  );
};

export default SharedRoute;