import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
  /*  { label: 'Portfolio', path: '/portfolio' }, */
    { label: 'Code', path: '/code' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-50 py-3 border-b border-dark-lighter">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-secondary" />
          ) : (
            <Menu className="w-6 h-6 text-secondary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark border-t border-dark-lighter">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block py-2 text-secondary hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;