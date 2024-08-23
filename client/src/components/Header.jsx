import "../styles/header.css";
import { useState } from "react";
import { FaMoon, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div>
      <Link to="/" className="self-center whitespace-nowrap logo-2">
        <span className="logo-1">TECHBLOG</span>VIBES
      </Link>
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="search-box">
        <input type="text" name="search" placeholder="Search..." /> <FaSearch />
      </div>

      <div className="sign-in">
        <Link to="/sign-in">Sign In</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}
