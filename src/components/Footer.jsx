import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Clothing Site. All rights reserved.</p>
      <nav>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;