"use client";

import { motion } from "framer-motion";

export default function DeliveryPromise() {
  const cards = [
    {
      title: "60 Days MVPs",
      subtitle: "Discover → Design → Build → Release.",
      image: "/assets/mvp-icons.png", // replace with actual
    },
    {
      title: "Fixed Price",
      subtitle: "Scoped Upfront; No Surprises.",
      image: "/assets/fixed-price.png", // replace with actual
    },
    {
      title: "You Received",
      subtitle:
        "You Receive — Source Code, CI/CD, Analytics, Essential Docs, 30-Day Hypercare.",
      image: "/assets/code-snippet.png", // replace with actual
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 text-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">
          Promises
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Delivery <span className="text-sky-400">Promise</span>
        </h2>
        <p className="mt-3 text-gray-400 text-lg">60 Days, Fixed Price</p>
      </motion.div>

      {/* 3 Top Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="rounded-2xl bg-gradient-to-b from-[#0b0b0b] to-[#101010] p-6 shadow-lg hover:shadow-sky-500/30 transition-all text-left"
          >
            <div className="mb-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-14 h-14 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-400 mt-2">{card.subtitle}</p>
          </motion.div>
        ))}
      </div>

      {/* After Launch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 max-w-6xl mx-auto"
      >
        <div className="rounded-2xl bg-gradient-to-b from-[#0b0b0b] to-[#101010] p-6 shadow-lg text-left">
          {/* Placeholder chart */}
          <div className="h-40 w-full bg-gradient-to-r from-sky-500/20 to-sky-400/10 rounded-lg mb-6 flex items-center justify-center text-gray-500 text-sm">
            [ Growth Chart Placeholder ]
          </div>
          <h3 className="text-2xl font-bold">
            After <span className="text-white">launch</span>
          </h3>
          <p className="text-gray-400 mt-2">
            Optional Monthly Growth Sprints.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
