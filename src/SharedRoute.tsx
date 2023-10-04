import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const SharedRoute = () => {
  return (
    <body className="">
      {/* <Hero /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};

export default SharedRoute;
