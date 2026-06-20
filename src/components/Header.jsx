import React from "react";
import "./Header.css";
import { FaSearch, FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      {/* Left Logo */}
      <div className="logo">
        <Link to="/"><img src={Logo} alt="logo" /></Link>

      </div>

      {/* Center Menu */}
      <nav className="nav">
        <Link to="/products">PRODUCTS</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/why">WHY WE ARE</Link>
        <Link to="/export">EXPORT</Link>
      </nav>
    </header>
  );
};

export default Header;