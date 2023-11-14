import { Route, Routes } from "react-router-dom";
import Home from "./Home/Index";
import Blogs from "./Blogs/Index";
import SharedRoute from "./SharedRoute";
import DetailProject from "./DetailProject/Index";
import SharedProjectRoute from "./Projects/SharedRoute";
import Projects from "./Projects/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedRoute />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<SharedProjectRoute />}>
          <Route index element={<Projects />} />
          <Route path=":slug" element={<DetailProject />} />
        </Route>
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  );
}

export default App;
