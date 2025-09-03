"use client";

import Image from "next/image";
import team from "../../../public/assets/team.svg";
import icon from "../../../public/assets/3pillor/icon.svg";

const features = [
  "Led by US-based solution architects. Built by a handpicked global team.",
  "We’ve shipped AI-first products across health, retail, finance, and creators.",
  "Small by design. Senior-heavy. Outcome-obsessed.",
];



export default function TeamCred() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12  font-Satoshi">
      {/* LEFT SIDE */}
      <div className="flex-1 max-w-xl">
        {/* Badge */}
        <span className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-400 mb-4 inline-block">
          Team
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Team & Cred
        </h2><ul className="space-y-6 mb-10">
  {features.map((text, idx) => (
    <li
      key={idx}
      className="flex items-start gap-3 "
    >
      <div className="w-9 h-9 flex items-center justify-center bg-sky-500 rounded-full text-white text-sm flex-shrink-0">
        <Image src={icon} alt="icon image" className="w-6 h-6" />
      </div>
      <p className="text-gray-300 text-base sm:text-[20px] text-start sm:text-left max-w-lg">
        {text}
      </p>
    </li>
  ))}
</ul>

 <button
  className="px-6 py-3 rounded-full font-medium transition text-white bg-[#006699]"
  style={{
    borderRadius: "34.722px",
    border: "1.042px solid #0093DD",
   
  }}
>
  Meet The Team
</button>



      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center">

          
<Image src={team} alt="Team illustration" className="h-12px w-25px"  />

      
        </div>
   
    </section>
  );
}
