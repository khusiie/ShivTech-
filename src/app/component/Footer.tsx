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
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>Works</li>
              <li>Why us</li>
              <li>Process</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <ul className="space-y-1 text-sm">
              <li>hello@shivaitech.com</li>
              <li>(1234) 567-890</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
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
