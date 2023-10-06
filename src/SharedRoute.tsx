import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SideBar from "./Components/SideBar";

const SharedRoute = () => {
  return (
    <body className="relative ">
      <div className="w-full bg-[#000000cf] hidden fixed inset-0 z-10 backdrop-blur-[1px] flex justify-end">
        <SideBar />
      </div>
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <div className="nav-btn w-[3rem] h-[3rem] rounded-full fixed bottom-5 right-5 grid place-content-center">
        <KeyboardArrowUpIcon sx={{ fontSize: "2rem", color: "white" }} />
      </div>
    </body>
  );
};

export default SharedRoute;
