import React, { useState } from 'react';
import { navLinks } from '../../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center px-4 py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-2 text-white font-bold text-lg">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center text-sm">
              N
            </span>
            <span className="hidden sm:inline">Noorullah Raza</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map(({ id, name, href }) => (
              <a
                key={id}
                href={href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {name}
              </a>
            ))}
          </div>

          {/* Right side: Theme toggle + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-white"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden mt-3 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-4">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ id, name, href }) => (
                <a
                  key={id}
                  href={href}
                  className="block py-3 px-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;