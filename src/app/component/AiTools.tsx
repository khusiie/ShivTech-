"use client";

import Image from "next/image";

const steps = [
  { name: "Discover", icon: "/icons/discover.svg" },
  { name: "Design", icon: "/icons/design.svg" },
  { name: "Build", icon: "/icons/build.svg" },
  { name: "Validate", icon: "/icons/validate.svg" },
  { name: "Launch", icon: "/icons/launch.svg" },
  { name: "Grow", icon: "/icons/grow.svg" },
];

export default function BuildProcess() {
  return (
    <section className="w-full bg-black text-white py-16 flex flex-col items-center">
      {/* Small Badge */}
      <span className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-400 mb-4">
        Tooling & Outputs
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        AI-First Build Process
      </h2>

      {/* Process Container */}
      <div className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 border border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 items-center">
          {/* First 3 steps */}
          {steps.slice(0, 3).map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gray-800 rounded-full border border-gray-600">
                <Image src={step.icon} alt={step.name} width={24} height={24} />
              </div>
              <p className="mt-2 text-sm text-gray-300 text-center">
                {step.name}
              </p>
            </div>
          ))}

          {/* Center ShivAi Circle */}
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-lg shadow-blue-500/40 border border-blue-400">
              <p className="text-base md:text-lg font-bold">ShivAi</p>
            </div>
          </div>

          {/* Last 3 steps */}
          {steps.slice(3).map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gray-800 rounded-full border border-gray-600">
                <Image src={step.icon} alt={step.name} width={24} height={24} />
              </div>
              <p className="mt-2 text-sm text-gray-300 text-center">
                {step.name}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Connecting Line (hidden on mobile) */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-gray-600 via-blue-500 to-gray-600 -z-10"></div>
      </div>
    </section>
  );
}
