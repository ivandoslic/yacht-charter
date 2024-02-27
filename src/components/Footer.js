import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h4 className="text-lg lg:text-xl font-bold mb-2">About Us</h4>
          <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, nulla nec viverra vulputate, libero nisl lobortis magna.</p>
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h4 className="text-lg lg:text-xl font-bold mb-2">Quick Links</h4>
          <ul className="text-base lg:text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h4 className="text-lg lg:text-xl font-bold mb-2">Contact Us</h4>
          <p className="text-base lg:text-lg">123 Street Name, City, Country</p>
          <p className="text-base lg:text-lg">info@example.com</p>
          <p className="text-base lg:text-lg">+1 234 567 890</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm lg:text-base">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}
