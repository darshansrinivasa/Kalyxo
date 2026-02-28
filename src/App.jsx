import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import ScrollToHash from "@/components/ScrollToHash";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import PortfolioPage from "@/pages/Portfolio";
import ContactPage from "@/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;