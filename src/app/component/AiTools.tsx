"use client";
import React from "react";
import Image from "next/image";
import group from "../../../public/assets/Group.svg";

export default function BuildProcess() {
  return (
    <section className="w-full bg-black text-white  py-2 md:py-16 px-6 flex flex-col items-center">
      {/* Top Heading */}
      <div className="flex flex-col items-center  mb:6 lg:mb-12  text-center">
        <span className="px-4 py-1 rounded-full border border-gray-700 text-sm text-gray-300 mb-4">
          Tooling & Outputs
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          AI-First Build Process
        </h2>
      </div>

      {/* Flowchart Image */}
      <div className="relative w-full max-w-6xl h-[200px] sm:h-[300px] md:h-[500px]">
        <Image
          src={group}
          alt="AI-First Build Process flowchart"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
          priority
        />
      </div>
    </section>
  );
}
