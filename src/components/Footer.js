import React from 'react';
import { Link } from 'gatsby';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left mb-4 lg:mb-0 w-full lg:w-1/3">
          <h4 className="text-lg lg:text-xl font-bold mb-2">About Us</h4>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, nulla nec viverra vulputate, libero nisl lobortis magna.
          </p>
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0 w-full lg:w-1/3">
          <h4 className="text-lg lg:text-xl font-bold mb-2">Quick Links</h4>
          <ul className="text-base lg:text-lg">
            <li className="mb-2"><Link to="/" className="hover:underline">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="hover:underline">About</Link></li>
            <li className="mb-2"><Link to="/yachts" className="hover:underline">Yachts</Link></li>
            <li className="mb-2"><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="text-center lg:text-left w-full lg:w-1/3">
          <h4 className="text-lg lg:text-xl font-bold mb-2">Contact Us</h4>
          <p className="text-base lg:text-lg flex items-center justify-center lg:justify-start">
            <MapPinIcon className="h-5 w-5 mr-2" /> Put Čarijića 64, Seget Vranjica
          </p>
          <p className="text-base lg:text-lg flex items-center justify-center lg:justify-start">
            <EnvelopeIcon className="h-5 w-5 mr-2" /> info@planyourjourney.hr
          </p>
          <p className="text-base lg:text-lg flex items-center justify-center lg:justify-start">
            <PhoneIcon className="h-5 w-5 mr-2" /> (+385) 91 333 3831
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a href="https://www.facebook.com/LetTheHolidayBegin/" className="text-white mx-2" aria-label="Facebook">
          <FaFacebook className="h-6 w-6 hover:text-gray-400" />
        </a>
        <a href="https://www.instagram.com/planyour_journey/" className="text-white mx-2" aria-label="Instagram">
          <FaInstagram className="h-6 w-6 hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/company/plan-your-journey" className="text-white mx-2" aria-label="Twitter">
          <FaLinkedin className="h-6 w-6 hover:text-gray-400" />
        </a>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm lg:text-base">© {new Date().getFullYear()} Yacht Croatia. All rights reserved.</p>
      </div>
    </footer>
  );
}