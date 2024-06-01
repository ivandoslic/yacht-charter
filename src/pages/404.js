import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm">
        <img src={logo} alt="Logo" className="w-24 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-700 mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="bg-[#121212] text-white px-4 py-2 rounded ring-1 ring-inset ring-gray-300 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:leading-6 hover:opacity-[96%] transition duration-200">
          Go to Home
        </Link>
      </div>
    </div>
  );
}