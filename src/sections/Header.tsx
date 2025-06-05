import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Product", href: "#product" },
  { name: "Contact", href: "#contact" },
];

const HeaderNav = () => (
  <header className="w-full bg-white shadow-sm">
    <nav
      className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4"
      aria-label="Main Navigation"
    >
      {/* Logo/Brand */}
      <Heading level={1} text="ShoeStyle" className="text-2xl font-bold text-gray-900" />

      {/* Navigation Links */}
      <ul className="flex items-center space-x-8">
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
          <Button
  variant="link"
  className="text-teal-600 hover:text-teal-800 focus:text-teal-800 focus:outline-none transition-colors !no-underline cursor-pointer"
  size="lg"
>
  Sign In
</Button>

        </li>
      </ul>
    </nav>
  </header>
);

export default HeaderNav;
