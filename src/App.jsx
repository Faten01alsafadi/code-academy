import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Students from "./components/Students";
import Footer from "./components/Footer";

import Navbar from "./components/Nav";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
    <Navbar/>
      <Hero />
      <Courses />
      <Instructors />
      <Students />
      <Footer />
            <a
  href="https://wa.me/9639XXXXXXX"
  target="_blank"
  className="btn whatsapp"
>
  Contact on WhatsApp
</a>
    </>
  );
}

export default App;