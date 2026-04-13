import { useState } from "react";
import logo from "../assets/firefox_99EKrLT3v7-removebg-preview.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
        
      </div>

      {/* 🔗 Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#courses">Courses</a>
        <a href="#instructors">Instructors</a>
        <a href="#students">Students</a>
      </div>

      {/* 🍔 Mobile Button */}
      <div className="menu" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;