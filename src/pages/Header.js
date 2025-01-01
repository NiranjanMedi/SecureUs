import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-[70px] lg:h-[70px] bg-black text-white z-10 items-center">
      <div className="px-5 py-3.5 flex items-center justify-between">
        <a href="/home" className="text-3xl text-white hover:text-gray-400">
          SecureUs
        </a>
        <div className="lg:flex hidden">
          <nav className="ml-5">
            <ul className="flex items-center">
              <li className="mx-3 text-xl text-white hover:text-gray-400">
                <a href="/home">Home</a>
              </li>
              <li className="mx-3 text-xl text-white hover:text-gray-400">
                <a href="/crimeMap">Crime Data</a>
              </li>
              <li className="mx-3 text-xl text-white hover:text-gray-400">
                <a href="/aboutUs">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white text-xl focus:outline-none"
            onClick={toggleMenu}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-12 w-12 bg-white ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <path
            fillRule="evenodd"
            d="M5.293 4.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
            clipRule="evenodd"
            />
          </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-12 w-12 ${isMenuOpen ? 'hidden' : 'block'}`}
              >
                <path
                  fillRule="evenodd"
                  d="M4 6h12v1H4V6zm0 4h12v1H4v-1zm0 4h12v1H4v-1z"
                  clipRule="evenodd"
                />
              </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-black text-white w-4/5 h-screen absolute top-0 right-0 transform transition-transform duration-300"
        >
          <nav className="flex flex-col items-center my-48">
            <a href="/home" className="text-3xl text-white hover:text-gray-400 my-5">
              Home
            </a>
            <a href="/crimeMap" className="text-3xl text-white hover:text-gray-400 my-5">
              Crime Data
            </a>
            <a href="/aboutUs" className="text-3xl text-white hover:text-gray-400 my-5">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


/**
 * 
 * import React, {useState, useEffect, useRef} from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] lg:h-[80px] bg-black text-white z-10">
      <div className="px-5 py-3.5 justify-between flex items-center">
        <a href="/home" className="text-xl text-white hover:text-gray-400">
          SafeUs
        </a>
        <div className="lg:flex hidden items-center">
          <nav className="ml-5">
            <ul className="flex">
              <li className="mx-3 text-xl text-white hover:text-gray-400">
                <a href="/home">Home</a>
              </li>
              <li className="mx-3 text-xl text-white hover:text-gray-400">
                <a href="/crimeMap">Crime Data</a>
              </li>
              <li className="mx-3 text-xl text-white hover:text-gray-400">
                <a href="/aboutUs">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white text-xl focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
            >
              <path
                fillRule="evenodd"
                d="M4 6h12v1H4V6zm0 4h12v1H4v-1zm0 4h12v1H4v-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <path
                fillRule="evenodd"
                d="M5.293 4.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-black text-white w-4/5 h-screen absolute top-0 right-0 transform transition-transform duration-300"
        >
          <nav className="flex flex-col items-center pt-20">
            <a href="/home" className="text-xl text-white hover:text-gray-400">
              Home
            </a>
            <a href="/crimeMap" className="text-xl text-white hover:text-gray-400">
              Crime Data
            </a>
            <a href="/aboutUs" className="text-xl text-white hover:text-gray-400">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

 */
