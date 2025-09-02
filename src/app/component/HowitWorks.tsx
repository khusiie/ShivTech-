'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, User, HelpCircle, Rocket, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import first from "../../../public/assets/howitworks/first.svg";
import second from "../../../public/assets/howitworks/second.svg";
import third  from "../../../public/assets/howitworks/third.svg";
import Shivlogo from "../../../public/assets/howitworks/sivai.png";
interface Step {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    isActive?: boolean;
}

const HowitWorks = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(1);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const steps: Step[] = [
        {
            id: 1,
         icon: (
  <Image 
    src={first} 
    alt="Tell Us Your Idea Icon" 
    width={24} 
    height={24} 
    className="w-6 h-6 " 
  />
),

            title: "Tell Us Your Idea",
            description: "In Your Own Words, Right In The Phone! But...",
            isActive: activeStep === 1
        },
        {
            id: 2,
                icon: (
  <Image 
    src={second} 
    alt="Tell Us Your Idea Icon" 
    width={24} 
    height={24} 
    className="w-6 h-6 " 
  />
),
            title: "Answer Any Quick Questions",
            description: "Our ShivAI Clarifies Scope Instantly.",
            isActive: activeStep === 2
        },
        {
            id: 3,
                  icon: (
  <Image 
    src={third} 
    alt="Tell Us Your Idea Icon" 
    width={24} 
    height={24} 
    className="w-6 h-6 " 
  />
),
            title: "Launch",
            description: "Get A Working MVP In 30—45 Days, Fixed-Price.",
            isActive: activeStep === 3
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto-cycle through steps (pause when hovering)
    useEffect(() => {
        if (hoveredStep !== null) return; 
        
        const interval = setInterval(() => {
            setActiveStep(prev => prev === 3 ? 1 : prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [hoveredStep]);

    const renderLeftCard = () => {
        const currentStep = hoveredStep || activeStep;
        
        switch (currentStep) {
            case 1:
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full max-w-md mx-auto">
                            <img 
                                src="/assets/howitworks/card1.svg"
                                alt="Tell Us Your Idea"
                                className="w-full h-auto object-contain transition-all duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                );
            
            case 2:
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full max-w-md mx-auto">
                            <img 
                                src="/assets/howitworks/Card2.svg"
                                alt="Answer Quick Questions"
                                className="w-full h-auto object-contain transition-all duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                );
            
            case 3:
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full max-w-md mx-auto">
                            <img 
                                src="/assets/howitworks/Card3.svg"
                                alt="Launch"
                                className="w-full h-auto object-contain transition-all duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                );
            
            default:
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-20 bg-black relative overflow-hidden font-sora"
        >
            <div className="relative z-10 container mx-auto px-4">
                {/* Section Header */}
         <div className="text-center mb-8 md:mb-10 font-sora">
    <div className="inline-flex items-center gap-2 bg-[rgba(244,245,246,0.10)] rounded-full backdrop-blur-sm border border-gray-600/80 px-2 py-2 mb-4 hover:bg-gray-800/80 hover:border-gray-500/90 transition-all duration-200 cursor-pointer group">
        <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-br from-blue-400/50 to-blue-600/30 backdrop-blur-sm rounded-full shadow-inner">
            <img
                src="/assets/3pillor/star.svg"
                alt="Star"
                width="16"
                height="16"
                className="object-contain"
            />
        </div>
        <span className="text-white text-xs font-regular tracking-wide">
            How it Works
        </span>
        <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-200" />
    </div>
     
    <h2 className="text-3xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold font-sora leading-tight"
        style={{
            background: 'linear-gradient(180deg, #FFF 30%, #A5C7D4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }}>
        How ShivAI Works
    </h2>
</div>

{/* Main Content */}
<div className="max-w-5xl mx-auto font-sora pt-12">
    <div className="grid lg:grid-cols-2  gap-6 lg:gap-2 items-center">
   {/* Left Side - Dynamic Card Images */}
        <div className="relative min-h-[350px] flex items-center  justify-center">
            {/* ShivAI Logo - positioned at top center, half outside */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
  <div className="w-18 h-18 md:w-24 md:h-24 bg-black/20 rounded-full flex items-center justify-center shadow-lg  border-1 border-black/40  overflow-hidden">
    <Image
      src={Shivlogo}   // using imported image
      alt="ShivAI Logo"
      className="object-contain w-15 h-15"
      priority
    />
  </div>
</div>

            
            <div className="w-full transition-all duration-500 ease-in-out transform relative">
                {renderLeftCard()}
            </div>
        </div>

{/* Right Side - Steps */}
<div className="space-y-6 w-full max-w-[400px] md:max-w-[450px]">
  {steps.map((step) => {
    const isCurrentlyActive =
      hoveredStep === step.id ||
      (hoveredStep === null && activeStep === step.id);

    return (
      <div
        key={step.id}
        className={`
          relative p-4 md:p-5 transition-all duration-500 cursor-pointer 
          ${isCurrentlyActive
            ? 'bg-blue-600/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20'
            : 'bg-[rgba(0,102,153,0.20)] border border-gray-800 hover:bg-gray-900/50'
          }
        `}
        style={{
          borderRadius: '16px',
          flexShrink: 0,
        }}
        onMouseEnter={() => setHoveredStep(step.id)}
        onMouseLeave={() => setHoveredStep(null)}
        onClick={() => setActiveStep(step.id)}
      >
        {/* Step Icon */}
        <div className="flex items-start gap-3">
          <div
            className={`
              flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300
              ${isCurrentlyActive
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400'
              }
            `}
          >
            <div className="scale-75 md:scale-90">
              {step.icon}
            </div>
          </div>
           
          <div className="flex-1 text-left">
            <h3
              className={`
                text-base md:text-lg font-bold font-sora mb-1 transition-colors duration-300
                ${isCurrentlyActive ? 'text-white' : 'text-white'}
              `}
              style={{
                fontFamily: 'sora',
                letterSpacing: '-0.4px',
                textTransform: 'capitalize',
              }}
            >
              {step.title}
            </h3>
            <p
              className={`
                text-xs md:text-sm leading-relaxed transition-colors duration-300
                ${isCurrentlyActive ? 'text-blue-200' : 'text-[#FFF]'}
              `}
              style={{
                fontFamily: 'Satoshi',
                letterSpacing: '-0.4px',
                textTransform: 'capitalize',
              }}
            >
              {step.description}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
                    </div>
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default HowitWorks;