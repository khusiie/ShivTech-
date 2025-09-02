import React from "react";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 456 581"
        fill="none"
        className="w-full h-full"
      >
        <path
          d="M-2.78808 791.493V-113.68M92.0146 791.493V-113.68M186.817 791.493V-113.68M281.62 791.493V-113.68M376.422 791.493V-113.68M471.225 791.493V-113.68M566.028 791.493V-113.68M660.83 791.493V-113.68M566.028 836.751V-68.4211M850.436 791.493V-113.68M945.238 791.493V-113.68M1040.04 791.493V-113.68M1134.84 791.493V-113.68M1229.65 791.493V-113.68M1332.03 648.174H-101.383M1332.03 553.885H-101.383M1332.03 459.596H-101.383M1332.03 365.307H-101.383M1332.03 271.019H-101.383M1332.03 176.73H-101.383M1332.03 82.441H-101.383M1332.03 -11.8478H-101.383M1332.03 -106.137L-101.383 -106.137"
          stroke="rgba(181, 211, 253, 0.15)"
          strokeWidth="3.792"
          strokeDasharray="3.75 3.75"
        />
      </svg>
    </div>
  );
};

const cardData = [
  { title: "AI Apps & Agents", image: "/assets/ai.svg" },
  { title: "SaaS Platforms", image: "/assets/graph.svg" },
  { title: "Web3 DApps", image: "/assets/transaction.svg" },
  { title: "Mobile Apps", image: "/assets/phone.svg" },
  { title: "Enterprise Integrations", image: "/assets/shivi.svg" },
  { title: "Data & DevOps", image: "/assets/data.svg" },
];

const Test = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-black">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0A0F1C] to-[#101826] text-white"
        >
          <div className="relative flex items-center justify-center p-6 overflow-hidden">
            <GridBackground />

            {/* Blur */}
            <div className="absolute -top-[220px] -left-[220px] w-[483px] h-[439.558px] rounded-[483px] bg-[#0084FF] blur-[217.55px] pointer-events-none z-[1]" />

            {/* ✅ Plain <img> */}
            <img
              src={card.image}
              alt={card.title}
              className="relative z-10 w-[261px] h-[261px] object-contain shrink-0"
            />
          </div>

          {/* Text Section */}
          <div className="relative flex p-5 flex-col items-start gap-2 shrink-0 bg-[rgba(255,255,255,0.10)] rounded-xl overflow-hidden">
            <h2 className="font-sora text-[30px] font-bold leading-[42px] capitalize">
              {card.title}
            </h2>
            <p className="font-satoshi text-[24px] font-normal text-white/80">
              Gen-AI products, voice bots, RAG apps, and analytics copilots built to scale.
            </p>

            <div className="absolute left-1/2 -translate-x-1/2 w-[438px] h-[438px] rounded-full bg-[rgba(43,167,255,0.60)] blur-[75px] pointer-events-none" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
