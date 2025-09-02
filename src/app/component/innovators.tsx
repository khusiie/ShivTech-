"use client";

import Image from "next/image";

const logos = [
  "/brands/adidas.svg",
  "/brands/meta.svg",
  "/brands/hm.svg",
  "/brands/slack.svg",
  "/brands/telegram.svg",
];

const testimonials = [
  {
    text: "They shipped in weeks what others scoped in quarters.",
    name: "Jessica Miller",
    role: "Founder, HealthTech",
    avatar: "/avatars/1.jpg",
  },
  {
    text: "Clarity, speed, and quality—rare combo.",
    name: "Stephen Rai",
    role: "CEO, Creator App",
    avatar: "/avatars/2.jpg",
  },
  {
    text: "They didn’t hand over; they handheld us to PMF.",
    name: "Joshua Jones",
    role: "CPO, SaaS",
    avatar: "/avatars/3.jpg",
  },
  {
    text: "Built a senior-heavy team that executes outcomes, not tasks.",
    name: "Amelia Brown",
    role: "CTO, Fintech",
    avatar: "/avatars/4.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
      {/* Top Logos Arc */}
      <div className="relative w-full flex justify-center mb-12">
        <div className="flex gap-12 flex-wrap justify-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full border border-gray-600 shadow-md hover:scale-110 transition"
            >
              <Image src={logo} alt="brand" width={32} height={32} />
            </div>
          ))}
        </div>
      </div>

      {/* Badge */}
      <span className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-400 mb-4 inline-block">
        Testimonials
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Trusted by innovators
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500 transition"
          >
            <p className="text-gray-300 mb-4 italic">“{t.text}”</p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
