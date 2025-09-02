"use client";

import Image from "next/image";

const features = [
  "Led by US-based solution architects. Built by a handpicked global team.",
  "We’ve shipped AI-first products across health, retail, finance, and creators.",
  "Small by design. Senior-heavy. Outcome-obsessed.",
];

const avatars = [
  "/team/1.jpg",
  "/team/2.jpg",
  "/team/3.jpg",
  "/team/4.jpg",
  "/team/5.jpg",
  "/team/6.jpg",
  "/team/7.jpg",
  "/team/8.jpg",
];

export default function TeamCred() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* LEFT SIDE */}
      <div className="flex-1 max-w-xl">
        {/* Badge */}
        <span className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-400 mb-4 inline-block">
          Team
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Team & Cred
        </h2>

        {/* Bullet Points */}
        <ul className="space-y-6 mb-10">
          {features.map((text, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-7 h-7 flex items-center justify-center bg-sky-500 rounded-full text-white text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-300 text-lg">{text}</p>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="bg-sky-500 hover:bg-sky-400 px-6 py-3 rounded-full font-medium transition text-black">
          Meet The Team
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-80 h-80 bg-gray-900 rounded-2xl flex items-center justify-center">
          {/* Central Circle */}
          <div className="w-24 h-24 bg-sky-500 rounded-full flex items-center justify-center text-lg font-bold text-black shadow-lg shadow-sky-400/40">
            ShivAi
          </div>

          {/* Circular Avatars */}
          {avatars.map((src, idx) => {
            const angle = (idx / avatars.length) * 2 * Math.PI;
            const x = 120 * Math.cos(angle);
            const y = 120 * Math.sin(angle);
            return (
              <div
                key={idx}
                className="absolute w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <Image
                  src={src}
                  alt={`team-${idx}`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
