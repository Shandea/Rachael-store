import { useState } from 'react';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const navLinks = [
  { name: "About", href: "#hero" },
  { name: "Product", href: "#features" },
  { name: "Contact", href: "#footer" },
];

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Main Navigation"
      >
        {/* Logo/Brand */}
        <a href="/" className="focus:outline-none !no-underline cursor-pointer">
          <Heading level={1} text="ShoeStyle" className="text-2xl font-bold text-gray-900" />
        </a>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-lg text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#footer">
              <Button
                variant="link"
                className="text-teal-600 hover:text-teal-800 focus:text-teal-800 focus:outline-none transition-colors !no-underline cursor-pointer"
                size="lg"
              >
                Sign In
              </Button>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-base text-gray-700 hover:text-gray-900 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#footer" onClick={() => setMenuOpen(false)}>
              <Button
                variant="link"
                className="text-teal-600 hover:text-teal-800 focus:text-teal-800 focus:outline-none transition-colors !no-underline cursor-pointer w-full text-left"
                size="lg"
              >
                Sign In
              </Button>
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default HeaderNav;

