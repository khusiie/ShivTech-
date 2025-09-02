"use client";

import React from 'react';
import { Search, Palette, Hammer, CheckCircle, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  { name: "Discover", icon: Search },
  { name: "Design", icon: Palette },
  { name: "Build", icon: Hammer },
  { name: "Validate", icon: CheckCircle },
  { name: "Launch", icon: Rocket },
  { name: "Grow", icon: TrendingUp },
];

export default function BuildProcess() {
  return (
    <section className="w-full bg-black text-white py-16 flex flex-col items-center min-h-screen">
      {/* Process Container */}
      <div className="relative w-full max-w-5xl bg-gradient-to-br from-slate-900/40 to-slate-800/20 rounded-2xl p-8 border border-slate-700/30 backdrop-blur-sm">
        
        {/* Multiple Flowing Connection Lines from Center to Each Step */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="flowGradient1" x1="50%" y1="30%" x2="8%" y2="80%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#01ACFF" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#01ACFF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#01ACFF" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="flowGradient2" x1="50%" y1="30%" x2="25%" y2="80%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#01ACFF" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#01ACFF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#01ACFF" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="flowGradient3" x1="50%" y1="30%" x2="42%" y2="80%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#01ACFF" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#01ACFF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#01ACFF" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="flowGradient4" x1="50%" y1="30%" x2="58%" y2="80%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#01ACFF" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#01ACFF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#01ACFF" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="flowGradient5" x1="50%" y1="30%" x2="75%" y2="80%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#01ACFF" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#01ACFF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#01ACFF" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="flowGradient6" x1="50%" y1="30%" x2="92%" y2="80%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#01ACFF" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#01ACFF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#01ACFF" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          {/* Line to Discover (leftmost) */}
          <path 
            d="M500 90 Q350 120 150 180 Q100 200 80 220 V240" 
            stroke="url(#flowGradient1)" 
            strokeWidth="3" 
            fill="none"
          />
          
          {/* Line to Design */}
          <path 
            d="M500 90 Q400 130 250 180 Q220 200 220 220 V240" 
            stroke="url(#flowGradient2)" 
            strokeWidth="3" 
            fill="none"
          />
          
          {/* Line to Build */}
          <path 
            d="M500 90 Q470 140 420 180 Q400 200 400 220 V240" 
            stroke="url(#flowGradient3)" 
            strokeWidth="3" 
            fill="none"
          />
          
          {/* Line to Validate */}
          <path 
            d="M500 90 Q530 140 580 180 Q600 200 600 220 V240" 
            stroke="url(#flowGradient4)" 
            strokeWidth="3" 
            fill="none"
          />
          
          {/* Line to Launch */}
          <path 
            d="M500 90 Q600 130 750 180 Q780 200 780 220 V240" 
            stroke="url(#flowGradient5)" 
            strokeWidth="3" 
            fill="none"
          />
          
          {/* Line to Grow (rightmost) */}
          <path 
            d="M500 90 Q650 120 850 180 Q900 200 920 220 V240" 
            stroke="url(#flowGradient6)" 
            strokeWidth="3" 
            fill="none"
          />
        </svg>

        {/* Center ShivAi Circle */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl shadow-blue-500/50 border border-blue-400/40">
            <span className="text-sm font-bold text-white tracking-wide">ShivAi</span>
          </div>
        </div>

        {/* Steps Container */}
        <div className="relative z-10 flex justify-between items-center pt-24 pb-6">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center">
                {/* Step Circle */}
                <div className="w-12 h-12 flex items-center justify-center bg-slate-800/80 rounded-full border border-slate-600/50 backdrop-blur-sm hover:bg-slate-700/80 transition-all duration-300 hover:border-cyan-400/30">
                  <step.icon size={20} className="text-slate-300" />
                </div>
                {/* Step Name */}
                <p className="mt-2 text-xs text-slate-400 text-center font-medium">
                  {step.name}
                </p>
              </div>
              
              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <ArrowRight 
                  size={16} 
                  className="text-cyan-400/60 mx-1" 
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}