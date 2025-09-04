"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Card1 from "../../../public/assets/worksnap/card1.svg";
import Card2 from "../../../public/assets/worksnap/card2.svg";
import Card3 from "../../../public/assets/worksnap/card3.svg";
export default function WorkSnapshots() {
  const snapshots = [
    {
      title: "Voice AI for Clinics",
      subtitle: "24/7 intake & scheduling",
      days: "31 days to pilot",
      image: Card1, 
    },
    {
      title: "Marketplace MVP",
      subtitle: "Payments, profiles, bookings.",
      days: "38 days.",
      image: Card2, 
    },
    {
      title: "Retail Analytics Copilot",
      subtitle: "90% faster weekly reporting",
      days: "38 days",
      image: Card3, 
    },
  ];

  return (
    <section className="bg-black text-white py-6 md:py-16 px-6 md:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
           <span className="px-3 py-1 rounded-full font-lg  border border-gray-700 text-sm text-gray-300 mb-4">
          Proof
        </span>
 <h2
  className="
    text-4xl sm:text-4xl md:text-5xl lg:text-6xl
    font-bold leading-tight md:px-4 sm:px-0
    bg-clip-text text-transparent
    bg-[linear-gradient(79deg,_#FFF_-4.08%,_#3DCAFF_82.24%)]
  "
>
  Work Snapshots
</h2>

        <p className="mt-3 text-gray-400">
          Proof In Days, Not Months.
        </p>
      </motion.div>


<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {snapshots.map((snap, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
   className="rounded-2xl bg-gradient-to-b border-l border-t border-r border-b border-l-white/20 border-t-white/20 border-r-white/10 border-b-white/10 bg-[background: linear-gradient(180deg, rgba(0, 2, 17, 0.00) 0%, #000211 100%);] shadow-lg hover:shadow-sky-500/30 transition-all overflow-hidden"
    >
      <Image
        src={snap.image}
        alt={snap.title}
        className="w-full h-65 object-cover object-center"
      />
      
      <div className="px-6 pb-6 pt-4">
        <h3 className="text-xl font-semibold">{snap.title}</h3>
        <p className="text-gray-400 mt-2">{snap.subtitle}</p>
        <p className="text-sky-400 mt-3">{snap.days}</p>
      </div>
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
        <button className="px-6 py-3 rounded-full bg-[#069]  text-white font-medium shadow-amber-50">
          View Build Notes
        </button>
      </motion.div>
    </section>
  );
}
