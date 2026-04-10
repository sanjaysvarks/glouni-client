import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <header className="flex justify-between p-4 shadow-md">
      <h1 className="text-xl font-bold">Glouni Exports</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/why">Why Us</Link>
        <Link to="/export">Export</Link>
        {/* <Link to="/contact">Enquiry</Link> */}
      </nav>
    </header>
  );
};

export default Header;