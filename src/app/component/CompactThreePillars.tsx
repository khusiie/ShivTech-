'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import icon from "../../../public/assets/3pillor/icon.svg";
import star from "../../../public/assets/3pillor/star.svg";

const CompactThreePillars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} className="py-16 bg-black relative font-sora">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-2 mb-6 hover:bg-gray-800/80 transition-all cursor-pointer group">
            <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-blue-400/50 to-blue-600/30 rounded-full">
              <Image src={star} alt="Star" width={18} height={18} />
            </div>
            <span className="text-white text-sm">3 Pillars</span>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
          </div>
          
          <h2 
            className="text-3xl md:text-6xl font-bold leading-tight"
            style={{
              background: 'linear-gradient(180deg, #FFF 30%, #A5C7D4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Our 3 Core Pillars
          </h2>
        </div>

        {/* Pillars */}
        <div className="max-w-4xl mx-auto space-y-6">
          {pillars.map((pillar, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={pillar.number}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className="group py-4 px-4 md:py-5 md:px-8 rounded-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                  style={isHovered ? {
                    background: 'linear-gradient(90deg, #01AAFF 0%, #000 62.5%)'
                  } : undefined}
                >
                  <div className="flex items-center gap-8 md:gap-18">
                    {/* Number */}
                    <div className={`text-4xl md:text-6xl font-bold transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-gray-300'
                    }`}>
                      {pillar.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
                        isHovered ? 'text-white' : 'text-white group-hover:text-cyan-400'
                      }`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-base md:text-lg transition-colors duration-300 ${
                        isHovered ? 'text-gray-200' : 'text-gray-400'
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
                      className="w-9 h-11 md:w-12 md:h-15"
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