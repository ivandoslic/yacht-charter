import React, { useState, useEffect } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from "../images/logo.svg"
import logoW from "../images/logo-w.svg"
import { Link } from 'gatsby'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header({ alwaysDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerDarkMode, setHeaderDarkMode] = useState(false);
  const scrollDirection = useScrollDirection();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Your logic to set headerDarkMode based on scroll position
    const handleResize = () => {
      setIsSmallScreen(alwaysDark || window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 0.5 * window.innerHeight;

      setHeaderDarkMode(alwaysDark || scrollPosition > triggerPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky ${scrollDirection === "down" ? "-top-24" : "top-0"} z-10 h-24 transition-all duration-500 ${headerDarkMode ? 'bg-white lg:bg-white' : 'bg-white lg:bg-transparent'}`}>
        <nav className={`flex w-full items-center justify-between p-6`} aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className={`h-12 w-auto`} src={!isSmallScreen && !headerDarkMode ? logoW : logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" color='black'/>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className={`font-semibold leading-6 ${alwaysDark || headerDarkMode ? 'text-black' : 'text-white'}`}>
            Home
          </Link>
          <Link to="/about" className={`font-semibold leading-6 ${alwaysDark || headerDarkMode ? 'text-black' : 'text-white'}`}>
            About us
          </Link>
          <Link to="/yachts" className={`font-semibold leading-6 ${alwaysDark || headerDarkMode ? 'text-black' : 'text-white'}`}>
            Yachts
          </Link>
          <Link to="/contact" className={`font-semibold leading-6 ${alwaysDark || headerDarkMode ? 'text-black' : 'text-white'}`}>
            Contact
          </Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src={logo}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${alwaysDark || headerDarkMode ? 'text-black' : 'text-gray-900'} hover:bg-gray-50`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${headerDarkMode ? 'text-black' : 'text-gray-900'} hover:bg-gray-50`}
                >
                  About us
                </Link>
                <Link
                  to="/yachts"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${headerDarkMode ? 'text-black' : 'text-gray-900'} hover:bg-gray-50`}
                >
                  Yachts
                </Link>
                <Link
                  to="/contact"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${headerDarkMode ? 'text-black' : 'text-gray-900'} hover:bg-gray-50`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.scrollY;
    
      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if(direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
            setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      }
    }, [scrollDirection]);

    return scrollDirection;
}