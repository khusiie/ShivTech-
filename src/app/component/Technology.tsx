"use client";
import { useState, useEffect } from "react";

const techStack = [
  { 
    name: "PostgreSQL", 
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M17.128 0C15.737.021 14.434.231 13.292.564c-.705.205-.934.44-.934.99v1.268h4.262v.546h-5.862c-.791 0-1.483.475-1.703 1.377-.252 1.035-.263 1.683-.263 2.495s.011 1.46.263 2.495c.22.902.912 1.377 1.703 1.377h1.101V8.828c0-.967.827-1.822 1.795-1.822h4.26c.756 0 1.378-.635 1.378-1.392V1.554c0-.757-.585-1.325-1.32-1.491-.479-.108-.975-.163-1.472-.163zm-1.706 1.268c.268 0 .485.221.485.494s-.217.494-.485.494-.485-.221-.485-.494.217-.494.485-.494z"/>
        <path d="M18.864 3.846v1.377c0 .967-.827 1.822-1.795 1.822h-4.26c-.756 0-1.378.635-1.378 1.392v4.06c0 .757.622 1.201 1.378 1.377.904.211 1.578.25 4.26 0 .756-.063 1.378-.386 1.378-1.377V9.651h-4.26v-.546h5.638c.791 0 1.086-.552 1.378-1.377.301-.851.288-1.673 0-2.495-.208-.593-.587-1.377-1.378-1.377h-1.961zm-2.554 7.384c.268 0 .485.221.485.494s-.217.494-.485.494-.485-.221-.485-.494.217-.494.485-.494z"/>
      </svg>
    )
  },
  { 
    name: "Stripe", 
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.797 0 13.976 0c-5.301 0-9.124 3.134-9.124 7.768 0 3.848 2.568 6.503 6.696 7.676 2.906 1.26 4.296 1.963 4.296 3.096 0 .973-.841 1.46-2.513 1.46-3.151 0-6.523-1.426-8.57-2.864l-.949 5.613C5.021 23.21 8.362 24 11.976 24c5.815 0 9.962-2.797 9.962-8.365 0-3.746-2.665-6.346-7.962-8.485z"/>
      </svg>
    )
  },
  { 
    name: "Next.JS", 
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.146 4.25 16.06 2.185 12.044.346a19.76 19.76 0 00-.364-.033C11.632.001 11.648 0 11.572 0z"/>
        <path d="M21.038 4.909a.983.983 0 00-.442.1c-.823.334-.823 1.532 0 1.867.328.133.69.071.94-.162a.74.74 0 00.3-.6c0-.247-.1-.471-.3-.6a.983.983 0 00-.498-.133z"/>
      </svg>
    )
  },
  { 
    name: "Python", 
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    )
  },
  { 
    name: "GitHub", 
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  },
  { 
    name: "AWS", 
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.191 0 .78.024.16-.08.24l-.265.176c-.04.023-.087.04-.127.04-.048 0-.096-.024-.144-.055-.112-.12-.208-.248-.28-.383a3.456 3.456 0 01-.232-.535c-.584.687-1.327 1.023-2.23 1.023-.64 0-1.15-.183-1.534-.558-.383-.375-.574-.88-.574-1.511 0-.67.24-1.215.726-1.646.487-.43 1.134-.646 1.942-.646.27 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.031-.375-1.271-.255-.24-.686-.36-1.295-.36-.28 0-.568.032-.863.104-.296.064-.583.16-.862.28-.127.055-.224.088-.279.104-.056.016-.096.024-.128.024-.112 0-.168-.08-.168-.248v-.391c0-.127.016-.224.056-.279.04-.056.112-.112.207-.16.28-.144.615-.264 1.015-.36.399-.104.83-.152 1.286-.152.98 0 1.698.224 2.174.67.47.447.710 1.128.710 2.047v2.691zm-3.08 1.159c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.506.048-.184.08-.399.08-.646v-.311a6.788 6.788 0 00-.734-.144 6.01 6.01 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.216-.394.518-.394.926 0 .384.104.67.32.862.207.2.518.296.918.296zm5.754 1.423c-.143 0-.24-.024-.29-.08-.048-.055-.087-.183-.103-.391L7.74 6.147c-.016-.208-.024-.343-.024-.399 0-.16.08-.248.232-.248h.95c.15 0 .255.024.303.08.056.055.095.183.111.391l1.255 4.942 1.167-4.942c.016-.208.056-.336.111-.391.056-.056.16-.08.311-.08h.774c.151 0 .255.024.31.08.057.055.096.183.112.391L14.64 10.86l1.295-4.942c.016-.208.064-.336.112-.391.055-.056.159-.08.302-.08h.903c.151 0 .23.08.23.248 0 .048-.007.104-.015.167a1.637 1.637 0 01-.04.23l-1.831 5.89c-.016.208-.056.336-.111.391-.056.056-.16.08-.304.08h-.83c-.152 0-.256-.024-.312-.08-.055-.055-.095-.183-.111-.391L12.7 7.218 11.46 11.25c-.016.208-.055.336-.11.391-.056.056-.16.08-.312.08H9.437zm9.302.24c-.406 0-.822-.048-1.23-.144-.407-.096-.72-.2-.918-.32-.128-.08-.215-.168-.247-.256-.032-.087-.048-.18-.048-.27v-.407c0-.168.064-.248.175-.248.048 0 .096.008.15.024.056.016.127.048.2.08.271.12.566.216.878.278.32.064.63.096.942.096.502 0 .894-.088 1.17-.264a.85.85 0 00.416-.758.707.707 0 00-.215-.518c-.144-.144-.415-.279-.798-.415L18.14 9.05c-.598-.192-1.038-.48-1.32-.862-.28-.384-.423-.808-.423-1.271 0-.368.08-.694.24-.99.159-.294.375-.543.646-.734.271-.2.59-.34.958-.432.367-.096.767-.136 1.198-.136.176 0 .359.008.535.032.18.024.35.056.518.088.168.04.328.08.479.127.151.048.27.096.36.152.127.08.22.16.27.24.056.08.08.18.08.31v.38c0 .168-.064.256-.175.256-.064 0-.167-.032-.31-.088-.455-.2-.966-.296-1.534-.296-.454 0-.8.072-1.04.224-.24.151-.36.375-.36.67 0 .2.08.378.24.534.159.16.454.32.878.479l1.208.383c.598.192 1.022.463 1.279.83.255.368.383.786.383 1.271 0 .375-.08.718-.24 1.023-.159.32-.383.59-.67.83-.288.24-.63.423-1.048.55-.398.13-.854.19-1.36.19z"/>
      </svg>
    )
  },
  { 
    name: "Twilio", 
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.75 6.75c1.035 0 1.875.84 1.875 1.875s-.84 1.875-1.875 1.875S7.875 8.66 7.875 7.625s.84-1.875 1.875-1.875zm4.5 0c1.035 0 1.875.84 1.875 1.875s-.84 1.875-1.875 1.875-1.875-.84-1.875-1.875.84-1.875 1.875-1.875zM9.75 13.5c1.035 0 1.875.84 1.875 1.875s-.84 1.875-1.875 1.875-1.875-.84-1.875-1.875.84-1.875 1.875-1.875zm4.5 0c1.035 0 1.875.84 1.875 1.875s-.84 1.875-1.875 1.875-1.875-.84-1.875-1.875.84-1.875 1.875-1.875z"/>
      </svg>
    )
  },
];

export default function Technologies() {
  const [active, setActive] = useState<number>(2);       
  const [hovered, setHovered] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying || hovered !== null) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % techStack.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, hovered]);

  // Pause autoplay when user interacts
  const handleUserInteraction = (idx: number) => {
    setIsAutoPlaying(false);
    setActive(idx);
    
    // Resume autoplay after 5 seconds of no interaction
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const handleMouseEnter = (idx: number) => {
    setHovered(idx);
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    // Resume autoplay after a short delay
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 1000);
  }; 

  // Calculate sizes and positions optimized for mobile
  const getCardStyle = (idx: number) => {
    const displayActive = hovered !== null ? hovered : active;
    const isActive = idx === displayActive;
    const distance = Math.abs(idx - displayActive);
    
    // Mobile-first responsive sizing
    if (isActive) {
      return {
        size: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20",
        padding: "p-3 sm:p-4 md:p-6",
        zIndex: "z-50",
        scale: "scale-110",
        opacity: "opacity-100"
      };
    } else if (distance === 1) {
      return {
        size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16",
        padding: "p-2 sm:p-3 md:p-4", 
        zIndex: "z-30",
        scale: "scale-100",
        opacity: "opacity-90"
      };
    } else if (distance === 2) {
      return {
        size: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
        padding: "p-2 sm:p-2 md:p-3",
        zIndex: "z-20", 
        scale: "scale-90",
        opacity: "opacity-75"
      };
    } else {
      return {
        size: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10",
        padding: "p-1 sm:p-2 md:p-2",
        zIndex: "z-10",
        scale: "scale-80", 
        opacity: "opacity-60"
      };
    }
  };

  return (
    <section className="w-full bg-black text-white py-8 sm:py-12 md:py-16 flex flex-col items-center px-4 overflow-hidden">
      {/* Small Badge */}
      <span className="text-xs md:text-sm px-3 py-1 rounded-full text-gray-400 mb-3 sm:mb-4">
        Our Stack
      </span>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 text-center px-2">
        Technologies We Used
      </h2>

      {/* Tech Icons Container - Mobile responsive */}
      <div className="relative w-full max-w-5xl h-20 sm:h-24 md:h-32 mb-8 sm:mb-10 md:mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Mobile: Show only 5 cards at once with horizontal scroll effect */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 overflow-x-auto w-full"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {techStack.map((tech, idx) => {
              const { size, padding, scale, opacity, zIndex } = getCardStyle(idx);
              const displayActive = hovered !== null ? hovered : active;
              const isActive = idx === displayActive;
              
              return (
                <button
                  key={idx}
                  onClick={() => handleUserInteraction(idx)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative transition-all duration-500 ease-out transform flex-shrink-0 ${isActive
                      ? "text-white"
                      : "bg-gray-800/50 hover:bg-gray-700/60 text-gray-300 hover:text-white border border-gray-700/50"
                  } ${padding} ${scale} ${opacity} ${zIndex}`}
                  style={{
                    borderRadius: isActive ? '12px' : '12px',
                    background: isActive 
                      ? 'linear-gradient(90deg, #01AAFF 0%, rgba(1, 170, 255, 0.40) 100%)'
                      : undefined,
                    transform: isActive 
                      ? 'scale(1.1) translateY(-4px) sm:scale(1.2) sm:translateY(-8px)' 
                      : hovered === idx 
                        ? 'scale(1.05) translateY(-2px) sm:scale(1.1) sm:translateY(-4px)' 
                        : 'scale(1)',
                    boxShadow: isActive 
                      ? '0 0 40px 0 rgba(153, 221, 255, 0.50) sm:0 0 78.85px 0 rgba(153, 221, 255, 0.50)' 
                      : hovered === idx 
                        ? '0 8px 20px -5px rgba(0, 0, 0, 0.3) sm:0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                        : 'none',
                  }}
                >
                  <div className={`transition-all duration-300 ${size}`}>
                    {tech.svg}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Technology Name with smooth transition */}
      <div className="text-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px] flex flex-col items-center justify-center px-4">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          {techStack[hovered !== null ? hovered : active].name}
        </p>
      </div>

      {/* Navigation dots - Mobile optimized */}
      <div className="flex space-x-2 mt-4 sm:mt-6 overflow-x-auto px-4"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex space-x-2">
          {techStack.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleUserInteraction(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                (hovered !== null ? hovered : active) === idx
                  ? "bg-cyan-400 w-4 sm:w-6 shadow-lg shadow-cyan-400/50"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}