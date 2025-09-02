'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import Icon from "../../../public/assets/navbar/navbuttonicon.svg";
import Shivlogo from "../../../public/assets/navbar/ShivAi.svg";
interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Work', href: '/work' },
    { label: 'Why us', href: '/why-us' },
    { label: 'Process', href: '/process' },
    { label: 'FAQ', href: '/faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 pt-4 transition-all duration-300 ${isScrolled
          ? 'bg-white/10 backdrop-blur-md border-b border-white/10' // semi-transparent when scrolled
          : 'bg-transparent'
          }`}
      >
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Updated flex container with equal spacing */}
          <div className="flex items-center justify-center h-16 gap-8">


{/* Logo with equal flex basis */}
<div className="flex-1 flex justify-start">
  <Image
    src={Shivlogo}  
    alt="ShivAi Logo"
    width={120}
    height={40}
    className="h-8 w-auto transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(147,197,253,0.7)]"
    priority
  />
</div>



            {/* Desktop Navigation - centered */}
            <div className="hidden lg:flex justify-center font-satoshi">
              <div className="flex items-center justify-center w-[380px] h-[54px] rounded-[9px] bg-[#161616] border border-[#4a4a4a] px-0 gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[#9C9C9C] text-md font-regular px-3 py-2 rounded-md transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-200 hover:bg-clip-text hover:text-transparent hover:border hover:border-[#70BEFA] hover:drop-shadow-[0_0_2.566px_rgba(112,190,250,0.75)]"
                  >
                    {item.label}
                  </Link>

                ))}
              </div>
            </div>


            {/* CTA Button with equal flex basis */}
            <div className="flex-1 flex justify-end">
              <Link
                href="/brief"
                className={`hidden lg:flex items-center justify-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 font-sora`}
              >
                {/* Gradient Text */}
                <span className="text-[18px] font-semibold tracking-[-0.36px] bg-gradient-to-r from-white to-[#01ACFF] bg-clip-text text-transparent">
                  Tell us your idea
                </span>

                {/* White Circle with Icon */}
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <Image src={Icon} alt="icon" width={16} height={16} />
                </div>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Changed from xl:hidden to lg:hidden */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-300 hover:text-white text-base font-medium rounded-md transition-colors duration-300 hover:bg-white/10 text-center"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/brief"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 mt-4 px-3 py-2 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 font-sora w-fit mx-auto"
              >
                {/* Gradient Text */}
                <span className="text-[14px] font-semibold tracking-[-0.28px] bg-gradient-to-r from-white to-[#01ACFF] bg-clip-text text-transparent">
                  Tell us your brief
                </span>
                 
                {/* White Circle with Icon */}
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <Image src={Icon} alt="icon" width={12} height={12} />
                </div>
              </Link>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;