'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import icon from "../../../public/assets/3pillor/icon.svg";
import star from "../../../public/assets/3pillor/star.svg";

const CompactThreePillars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      number: '01',
      title: 'AI-First Velocity',
      subtitle: 'Senior architects + AI co-pilots for speed and reliability.',
    },
    {
      number: '02',
      title: 'Fixed-Price MVPs',
      subtitle: '30-60 day builds with crystal-clear scope and a predictable budget.',
    },
    {
      number: '03',
      title: 'Handholding, Not Just Handover',
      subtitle: 'We stay post-launch to iterate, integrate, and scale.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setIsVisible(true)),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-6 sm:py-16 lg:py-20 bg-black relative font-sora">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-2 mb-4 sm:mb-6 hover:bg-gray-800/80 transition-all cursor-pointer group">
            <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-400/50 to-blue-600/30 rounded-full">
              <Image src={star} alt="Star" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-white text-xs sm:text-sm">3 Pillars</span>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
          </div>
          
   <h2
  className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2 md:px-4 sm:px-0"
  style={{
    background: `var(--Shiv-Blue, linear-gradient(79deg, #FFF -4.08%, #3DCAFF 82.24%))`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  Our 3 Core Pillars
</h2>

        </div>

        {/* Pillars */}
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {pillars.map((pillar, index) => {
            const isSecondPillar = index === 1; // Second pillar (index 1)
            
            return (
              <div
                key={pillar.number}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="py-4 px-4 sm:py-5 sm:px-6 lg:py-6 lg:px-8 rounded-lg"
                  style={isSecondPillar ? {
                    background: 'linear-gradient(90deg, #01AAFF 0%, #000 62.5%)'
                  } : undefined}
                >
                  {/* Mobile Layout - Single Line */}
                  <div className="flex sm:hidden items-center gap-2">
                    {/* Number */}
                    <div className={`text-xl font-bold flex-shrink-0 ${
                      isSecondPillar ? 'text-white' : 'text-gray-300'
                    }`}>
                      {pillar.number}
                    </div>
                    
                    {/* Content - Centered and flexible */}
                    <div className="flex-1 text-start px-1">
                      <h3 className={`text-xs font-bold mb-1 ${
                        isSecondPillar ? 'text-white' : 'text-white'
                      }`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-xs leading-tight ${
                        isSecondPillar ? 'text-gray-200' : 'text-gray-400'
                      }`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                    
                    {/* Icon */}
                    <Image 
                      src={icon} 
                      alt="AI Icon" 
                      width={20} 
                      height={24}
                      className="w-5 h-6 flex-shrink-0"
                    />
                  </div>

                  {/* Tablet & Desktop Layout - Horizontal */}
                  <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
                    {/* Number */}
                    <div className={`text-3xl md:text-5xl lg:text-6xl font-bold flex-shrink-0 ${
                      isSecondPillar ? 'text-white' : 'text-gray-300'
                    }`}>
                      {pillar.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 ${
                        isSecondPillar ? 'text-white' : 'text-white'
                      }`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${
                        isSecondPillar ? 'text-gray-200' : 'text-gray-400'
                      }`}>
                        {pillar.subtitle}
                      </p>
                    </div>

                    {/* Icon */}
                    <Image 
                      src={icon} 
                      alt="AI Icon" 
                      width={36} 
                      height={45}
                      className="w-8 h-10 md:w-9 md:h-11 lg:w-12 lg:h-15 flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompactThreePillars;