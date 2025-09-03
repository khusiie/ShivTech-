"use client";

import React from 'react';
import Image from 'next/image';
import group from "../../../public/assets/Group.svg";



export default function BuildProcess() {
  return (
 <section className="w-full bg-black text-white py-10 px-20 flex flex-col items-center min-h-screen">
  <div className="relative w-full max-w-6xl h-auto md:h-[600px]">
    <Image
      src={group}
      alt="Team illustration"
      fill
      style={{ objectFit: "contain" }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
    />
  </div>
</section>


  );
}