import { Route, Routes } from "react-router-dom";
import Home from "./Home/Index";
import Portfolios from "./Portfolios/Index";
import Blogs from "./Blogs/Index";
import Resume from "./Context/Resume/Index";
import Contact from "./Context/Contact/Index";
import SharedRoute from "./SharedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedRoute />}>
        <Route index element={<Home />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
