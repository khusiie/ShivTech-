"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  FileText,
  Settings,
  Palette,
  Database,
  Workflow,
  BookOpen,
} from "lucide-react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}

const GridCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative w-full sm:w-96 h-auto min-h-[22rem] overflow-hidden 
        bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600 
        ${className}`}
    >
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(64, 224, 208, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 224, 208, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">{children}</div>
    </div>
  );
};

const GridCardsDemo = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 3 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  const aiInsideItems = [
    { icon: <Code className="w-4 h-4" />, text: "AI code review" },
    { icon: <FileText className="w-4 h-4" />, text: "Unit-test generation" },
    { icon: <Settings className="w-4 h-4" />, text: "QA agents" },
    {
      icon: <FileText className="w-4 h-4" />,
      text: "Doc co-writing",
      isHighlighted: true,
    },
  ];

  const artifactsItems = [
    { icon: <Palette className="w-4 h-4" />, text: "Figma designs" },
    { icon: <Database className="w-4 h-4" />, text: "Source repositories" },
    { icon: <Workflow className="w-4 h-4" />, text: "CI/CD pipelines" },
    { icon: <BookOpen className="w-4 h-4" />, text: "Technical runbooks" },
    { icon: <FileText className="w-4 h-4" />, text: "Owner handoff docs" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.twinkleSpeed}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center min-h-screen">
        {/* AI Inside */}
        <GridCard>
          <div className="text-white h-full flex flex-col">
            <h2 className="text-xl font-bold mb-6">AI Inside</h2>
            <div className="space-y-3 flex-1">
              {aiInsideItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg transition-all duration-300 ${
                    item.isHighlighted
                      ? "bg-gradient-to-r from-teal-500/15 to-teal-400/8 border border-teal-400/40"
                      : "bg-slate-800/70 hover:bg-slate-700/70"
                  }`}
                >
                  <div className="p-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-1 h-6 rounded-full ${
                          item.isHighlighted ? "bg-teal-400" : "bg-slate-500"
                        }`}
                      ></div>
                      <div className="bg-slate-900/40 px-3 py-2 rounded-md flex-1">
                        <span className="text-sm font-medium">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GridCard>

        {/* Artifacts */}
        <GridCard>
          <div className="text-white h-full flex flex-col">
            <h2 className="text-xl font-bold mb-6">Artifacts</h2>
            <div className="space-y-3">
              {artifactsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                >
                  <div className="text-teal-400">{item.icon}</div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </GridCard>
      </div>
    </div>
  );
};

export default GridCardsDemo;
