"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ChartAreaInteractive from "../component/ChartAreaInteractive";
import Card1 from "../../../public/assets/promises/card1.svg";
import Card2 from "../../../public/assets/promises/card2.svg";
import Card3 from "../../../public/assets/promises/card3.svg";
export default function DeliveryPromise() {
  const cards = [
    {
      title: "60 Days MVPs",
      subtitle: "Discover → Design → Build → Release.",
      image: Card1,
      gradient: "from-blue-500/20 to-cyan-500/10",
    },
    {
      title: "Fixed Price",
      subtitle: "Scoped Upfront; No Surprises.",
      image: Card2,
      gradient: "from-green-500/20 to-emerald-500/10",
    },
    {
      title: "You Received",
      subtitle: "You Receive — Source Code, CI/CD, Analytics, Essential Docs, 30-Day Hypercare.",
      image: Card3,
      gradient: "from-purple-500/20 to-pink-500/10",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 font-sora">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
      <span className="px-4 py-1 rounded-full border border-gray-700 text-sm text-gray-300 mb-4">
          Promises
        </span>
<h2 className="text-7xl pt-4 md:text-[64px] font-bold bg-[linear-gradient(180deg,#FFF_30%,#A5C7D4_100%)] bg-clip-text text-transparent">
  Delivery Promise
</h2>

<p className="mt-3 text-4xl font-bold bg-[linear-gradient(180deg,#FFF_30%,#A5C7D4_100%)] bg-clip-text text-transparent">
  60 Days, Fixed Price
</p>

      </motion.div>

      {/* 3 Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="group relative"
          >
            {/* Card Background with Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-cyan-500/20 p-[1px]">
              <div className="h-full w-full rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-sm" />
            </div>

            {/* Card Content */}
            <div className="relative rounded-2xl h-full backdrop-blur-sm border border-gray-800/50 hover:border-sky-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-sky-500/20">
              {/* Icon/Image Container */}
              <div className="mb-6 mt-4  rounded-2xl    flex justify-center align-item-center">


                <Image
                  src={card.image}
                  alt={card.title}
                 w-full h-65 object-cover 
                />
              </div>
              <div className="px-8 py-4">
                    {/* Text Content */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-sky-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {card.subtitle}
              </p>

              </div>
          
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-sky-500/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* After Launch Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative group ">
          {/* Border gradient effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-cyan-500/20 p-[1px]">
            <div className="h-full w-full rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/90" />
          </div>

          {/* Content */}
          <div className="relative rounded-2xl  border border-gray-800/50 hover:border-sky-500/50 transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Chart Section */}
              <div className=" w-full lg:w-[60%] min-h-[100px] flex items-center justify-center">
                <ChartAreaInteractive />
              </div>

              {/* Text Section */}
              <div className=" w-full lg:w-[40%] text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                  After <span className="">launch</span>
                </h3>
                <p className="text-gray-400 text-lg pb-4 lg:pb-0 leading-relaxed">
                  Optional Monthly Growth Sprints.
                </p>


              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}