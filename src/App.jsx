import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { routerBasename } from "./basename.js";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./pages/Home.jsx";
import Tjenester from "./pages/Tjenester.jsx";
import Biler from "./pages/Biler.jsx";
import OmOss from "./pages/OmOss.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <ScrollToTop />
      <Nav />
      <main id="innhold">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tjenester" element={<Tjenester />} />
          <Route path="/biler" element={<Biler />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
