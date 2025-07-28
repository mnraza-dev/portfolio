import React, { useState } from 'react';
import NavItems from '../NavItems';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <header className="sticky top-0  z-50 bg-black/90 shadow-xl ">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl flex justify-between items-center  mx-auto py-5 c-space">
          <a href="/" className="text-neutral-400 flex gap-0 items-center font-bold text-xl hover:text-white transition-colors">
            <img src="/logo.svg" alt="logo" className="w-16 h-auto" />
            {/* <span className="text-white text-[1.5rem] font-extralight">Raza</span> */}
          </a>
          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
            onClick={toggleMenu}>
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="Toggle Menu"
              className="w-6 h-6"
              loading="lazy"
            />
          </button>
          <nav className="hidden sm:block">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0 '} `}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
