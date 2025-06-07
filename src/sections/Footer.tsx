import React from "react";
import Heading from "../components/ui/Heading";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="w-full bg-[#F8FAFC] text-[#64748B] font-inter px-4 md:px-8 py-8 text-sm md:text-base border-t border-gray-300"
style={{ boxShadow: "0 -4px 12px -3px rgba(0, 0, 0, 0.15)" }}    >
      <div className="w-[95%] mx-auto flex flex-col gap-4">
        {/* Top Section: Logo and Nav */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <Heading level="h3" className="text-[#1E293B] text-lg font-semibold">
            ShoeStyle
          </Heading>

          {/* Nav Links */}
          <nav className="flex flex-col md:flex-row gap-2 md:gap-6">
            <a href="#hero" className="hover:text-[#0D9488]">
              About
            </a>
            <a href="#features" className="hover:text-[#0D9488]">
              Products
            </a>
            <a href="#footer" className="hover:text-[#0D9488]">
              Contact
            </a>
            <a href="#support" className="hover:text-[#0D9488]">
              Support
            </a>
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200" />

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <p className="text-xs md:text-sm text-[#94A3B8]">
            &copy; {currentYear} ShoeStyle. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs md:text-sm">
            <a href="#privacy" className="hover:text-[#0D9488]">
              Privacy
            </a>
            <a href="#terms" className="hover:text-[#0D9488]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;