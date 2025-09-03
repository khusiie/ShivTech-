// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white px-6 py-10 overflow-hidden">
      {/* Upper Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 z-10 relative">
        <div>
          <p className="mb-4">
            From Idea to Impact — in 30 Days. We design,<br /> build, and launch AI-first MVPs with fixed <br/> pricing and post-launch support.</p>
            Architected in the US. Built by a handpicked global team.
          
          {/* Socials Placeholder */}
          <div className="flex space-x-4 mt-2">
            {/* Replace with actual icons */}
            <span className="w-8 h-8 bg-gray-700 rounded-full" />
            <span className="w-8 h-8 bg-gray-700 rounded-full" />
            <span className="w-8 h-8 bg-gray-700 rounded-full" />
            <span className="w-8 h-8 bg-gray-700 rounded-full" />
            
          </div>
        </div>
 <div className="grid grid-cols-2 gap-6 sm:gap-8">           
  <div>             
    <h4 className="font-bold mb-2 text-sm sm:text-base">Quick Links</h4>             
    <ul className="space-y-1 text-xs sm:text-sm lg:text-base">               
      <li className="hover:text-gray-300 transition-colors cursor-pointer">Works</li>               
      <li className="hover:text-gray-300 transition-colors cursor-pointer">Why us</li>               
      <li className="hover:text-gray-300 transition-colors cursor-pointer">Process</li>             
    </ul>           
  </div>           
  
  <div>             
    <h4 className="font-bold mb-2 text-sm sm:text-base">Contact</h4>             
    <ul className="space-y-1 text-xs sm:text-sm lg:text-base">               
      <li className="hover:text-gray-300 transition-colors break-all">hello@shivaitech.com</li>               
      <li className="hover:text-gray-300 transition-colors">(1234) 567-890</li>             
    </ul>           
  </div>           
  
  <div className="col-span-2">             
    <h4 className="font-bold mb-2 text-sm sm:text-base">Legal</h4>             
    <ul className="space-y-1 text-xs sm:text-sm lg:text-base">               
      <li className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</li>               
      <li className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</li>               
      <li className="hover:text-gray-300 transition-colors cursor-pointer">Careers</li>             
    </ul>           
  </div>         
</div>
      </div>
   
      {/* Footer Bar */}
      <div className="relative z-10 mt-8 text-xs text-gray-400 text-center">
        © 2025 ShivAi Tech. All rights reserved.
      </div>

     
    </footer>
  );
};

export default Footer;
