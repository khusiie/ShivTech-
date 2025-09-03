"use client";

import React, { useState } from 'react';
import Idealogo from "../../../public/assets/idealogo.svg";
import Image from "next/image";
import Star from "../../../public/assets/3pillor/star.svg";

import ideabg from "../../../public/assets/ideabg.svg"
import icon from "../../../public/assets/navbar/navbuttonicon.svg";

const IdeaSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

    const redirectToHeroSection = () => {
    // Scroll to hero section smoothly
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If hero section is on a different page, you can use router
      // router.push('/#hero-section');
      console.log('Redirecting to hero section...');
    }
  };

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
    // Handle search logic here - could trigger search functionality, API calls, etc.
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Mic icon SVG component
  const MicIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 1a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z"/>
      <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  );

  return (
    <div className="min-h-screen pb-12 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ideabg}
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-5">
        {/* Main gradient orb */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        {/* Secondary gradient */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Icon */}
        <div className="mb-2 mt-25">
            
         <Image src={ Idealogo } alt="search icon" className="w-24 h-24" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Your idea. Our tech.
        </h1>
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Sixty days. It's Live
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-md mb-12 max-w-md">
          Your idea deserves momentum. Start here.
        </p>

        {/* Search Box section - Responsive width */}
        <div className="max-w-3xl w-full mx-auto mb-8 p-3 rounded-full relative">
          {/* Always-visible Glow */}
          <div className="absolute inset-0 rounded-[25.875px] bg-[#01ACFF66] blur-2xl animate-pulse"></div>
          <div className="relative rounded-[25.875px] p-[1px] bg-gradient-to-b from-white/80 to-white/20">
            {/* Search Input */}
            <input
              type="search"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="ask anything..."
              className="w-full 
                         rounded-[23px]
                         border-none
                         bg-black/90 
                         pl-12 pr-16 sm:pr-32 md:pr-40 py-4 
                         text-lg 
                         text-white
                         placeholder-gray-400
                         focus:outline-none
                         relative z-10"
              autoComplete="off"
            />
            {/* Left Search Icon */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
               <Image src={Star} alt="search icon" className="w-5 h-5" />
            </div>
            
            {/* Desktop Button - "Do the magic" */}
            <button
              onClick={redirectToHeroSection}
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 
                         text-white rounded-[12px] px-3 py-2 transition-colors duration-300 
                         items-center gap-2 z-10"
            >
              <Image src={Star} alt="search icon" className="w-5 h-5" />
              <span className="text-sm font-medium">Do the magic</span>
            </button>

            {/* Mobile Button - Mic Icon */}
            <button
              onClick={redirectToHeroSection}
              className="sm:hidden absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 
                         text-white rounded-full p-2.5 transition-colors duration-300 
                         flex items-center justify-center z-10"
              aria-label="Voice search"
            >
              <MicIcon />
            </button>
          </div>
        </div>
        
        {/* Final CTA Button */}
        <div className="flex justify-center">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40"
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Book a 15-min consult
            </span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center ml-1">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <Image src={icon} alt="icon" className="w-3 h-3" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default IdeaSection;