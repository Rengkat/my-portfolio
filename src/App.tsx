import { Route, Routes } from "react-router-dom";
import Home from "./Home/Index";
import Blogs from "./Blogs/Index";
import SharedRoute from "./SharedRoute";
import Projects from "./Projects/Index";
import Blog from "./Blogs/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedRoute />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog/:slug" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
