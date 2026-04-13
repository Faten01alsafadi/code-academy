import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Students from "./components/Students";
import Footer from "./components/Footer";



import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Verify from "./components/Verify";

function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <Instructors />
      <Students />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* الصفحة الرئيسية */}
        <Route path="/" element={<Home />} />

        {/* صفحة التحقق */}
        <Route path="/verify/:id" element={<Verify />} />
      </Routes>

      <Footer />

      {/* زر الواتس */}
      <a
        href="https://wa.me/963935184673"
        target="_blank"
        className="btn whatsapp"
      >
        Contact on WhatsApp
      </a>
    </BrowserRouter>
  );
}

export default App;