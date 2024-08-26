import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";

import "aos/dist/aos.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Foods from "./pages/Foods";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Food from "./pages/Food";

AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/foods/:id" element={<Food />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
