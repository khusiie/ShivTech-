import Image from "next/image";
import Shivlogo from "../../../public/assets/LogoFooter.svg";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-6 py-10 flex justify-center items-center">
  <div className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] overflow-hidden">
  {/* Blur overlay with gradient */}
  <div className="absolute bottom-0 left-0 w-full h-1/2 
                  bg-gradient-to-t from-black/50 to-transparent 
                  backdrop-blur-lg z-0"></div>

  <Image
    src={Shivlogo}
    alt="ShivAi Logo"
    className="w-full h-auto object-contain relative z-10"
    priority
  />
</div>
    </footer>
  );
};

export default Footer;
