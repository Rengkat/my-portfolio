import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SideBar from "./Components/SideBar";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
const SharedRoute = () => {
  const { isMainMenuOpen } = useContext(AppContext) ?? { isMainMenuOpen: false };

  return (
    <body className="relative !scroll-smooth">
      <div
        // onClick={openMainNav}
        className={`${
          isMainMenuOpen ? " translate-x-full" : " translate-x-0"
        } w-full bg-[#000000cf]  fixed z-10 backdrop-blur-[1px] inset-0 flex justify-end transition-all duration-1000`}>
        <SideBar />
      </div>
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <a href="#top">
        <div className="nav-btn w-[3rem] h-[3rem] cursor-pointer z-[5] rounded-full fixed bottom-5 right-5 grid place-content-center">
          <KeyboardArrowUpIcon sx={{ fontSize: "2rem", color: "white" }} />
        </div>
      </a>
    </body>
  );
};

export default SharedRoute;
