"use client";

import { motion } from "framer-motion";

export default function WorkSnapshots() {
  const snapshots = [
    {
      title: "Voice AI for Clinics",
      subtitle: "24/7 intake & scheduling",
      days: "31 days to pilot",
      image: "/assets/voice-ai.png", // Replace with your asset
    },
    {
      title: "Marketplace MVP",
      subtitle: "Payments, profiles, bookings.",
      days: "38 days.",
      image: "/assets/marketplace.png", // Replace with your asset
    },
    {
      title: "Retail Analytics Copilot",
      subtitle: "90% faster weekly reporting",
      days: "38 days",
      highlight: "98% Faster Report Weekly",
      image: "/assets/analytics.png", // Replace with your asset
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">
          Proof
        </p>
        <h2 className="text-4xl md:text-6xl font-bold">
          Work <span className="text-sky-400">Snapshots</span>
        </h2>
        <p className="mt-3 text-gray-400">
          Proof In Days, Not Months.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {snapshots.map((snap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="rounded-2xl bg-gradient-to-b from-[#0b0b0b] to-[#101010] p-6 shadow-lg hover:shadow-sky-500/30 transition-all"
          >
            {snap.highlight ? (
              <p className="text-4xl font-bold text-sky-400 mb-4">
                {snap.highlight}
              </p>
            ) : (
              <img
                src={snap.image}
                alt={snap.title}
                className="w-16 h-16 mx-auto mb-4"
              />
            )}
            <h3 className="text-xl font-semibold">{snap.title}</h3>
            <p className="text-gray-400 mt-2">{snap.subtitle}</p>
            <p className="text-sky-400 mt-3">{snap.days}</p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-10"
      >
        <button className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 transition-all text-black font-medium shadow-lg">
          View Build Notes
        </button>
      </motion.div>
    </section>
  );
}
