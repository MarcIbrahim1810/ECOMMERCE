import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-main-light w-full fixed bottom-0 left-0 right-0 z-50 text-black py-4">
      <div className="mx-auto text-center">
        <div className="mb-4">
          <Link to="/" className="text-black hover:text-green-500 mx-2">Home</Link>
          <Link to="/about" className="text-black hover:text-green-500 mx-2">About</Link>
          <Link to="/cart" className="text-black hover:text-green-500 mx-2">Cart</Link>
          <Link to="/categories" className="text-black hover:text-green-500 mx-2">Categories</Link>
          <Link to="/brands" className="text-black hover:text-green-500 mx-2">Brands</Link>
          <Link to="/products" className="text-black hover:text-green-500 mx-2">Products</Link>
        </div>
        <div className="mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500 mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500 mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500 mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div>
          <p>&copy; 2025 FreshCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}