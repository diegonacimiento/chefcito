import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Foods from "./pages/Foods";
import Contact from "./pages/Contact";
import FoodDetails from "./components/FoodDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/foods/:id" element={<FoodDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
