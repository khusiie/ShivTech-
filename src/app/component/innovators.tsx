"use client";
import Image from "next/image";
import Logobg from "../../../public/assets/innovators/logobg.svg";
import a1 from "../../../public/assets/innovators/a1.svg";
import a2 from "../../../public/assets/innovators/a2.svg";
import a3 from "../../../public/assets/innovators/a3.svg";
import a4 from "../../../public/assets/innovators/a4.svg";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

interface AnimatedRowProps {
  testimonials: Testimonial[];
  direction: 'left' | 'right';
  speed?: number;
}

const testimonials: Testimonial[] = [
  {
    text: "They didn't hand over; they handheld us to PMF.",
    name: "Jessica Miller",
    role: "Founder, HealthTech",
    avatar: a1,
  },
  {
    text: "They shipped in weeks what others scoped in quarters",
    name: "Stephen Rai",
    role: "CEO, Creator App",
    avatar: a2,
  },
  {
    text: "Clarity, speed, and quality—rare combo",
    name: "Joshua Jones",
    role: "CPO, SaaS",
    avatar: a3,
  },
  {
    text: "Built a senior-heavy team that executes outcomes, not tasks.",
    name: "Amelia Brown",
    role: "CTO, Fintech",
    avatar: a4,
  },
  {
    text: "Innovation at its finest with exceptional delivery.",
    name: "Michael Chen",
    role: "VP Engineering, EdTech",
    avatar: a1,
  },
  {
    text: "Transformed our vision into reality seamlessly.",
    name: "Sarah Davis",
    role: "Product Manager, E-commerce",
    avatar: a2,
  },
  {
    text: "Best development partner we've ever worked with.",
    name: "David Wilson",
    role: "CTO, AI Startup",
    avatar: a3,
  },
  {
    text: "Speed and quality that exceeds all expectations.",
    name: "Emily Taylor",
    role: "Founder, MedTech",
    avatar: a4,
  },
  {
    text: "They understand business needs beyond just code.",
    name: "Robert Johnson",
    role: "CEO, Logistics",
    avatar: a1,
  },
  {
    text: "Exceptional team that delivers on every promise.",
    name: "Lisa Anderson",
    role: "Head of Product, Retail",
    avatar: a2,
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
 <div className="bg-gray-900/20 bg-[linear-gradient(180deg,rgba(1,170,255,0.05)_0%,rgba(1,170,255,0.02)_50%,rgba(1,170,255,0.03)_100%)] border border-gray-700 rounded-md p-6 flex flex-col justify-between hover:border-blue-500 transition-colors duration-300 w-80 h-64 flex-shrink-0">
  {/* Text section - takes available space */}
  <div className="border border-white/20 rounded-md pt-4 px-4 flex-1 flex items-start">
    <p className="text-gray-300 italic text-left leading-relaxed break-words hyphens-auto">
      {testimonial.text}
    </p>
  </div>
  
  {/* Author section - fixed at bottom */}
  <div className="border border-white/10 rounded-md p-3 mt-4">
    <div className="flex items-center gap-3">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={40}
        height={40}
        className="rounded-full flex-shrink-0"
      />
      <div className="text-left min-w-0">
        <p className="font-semibold text-white truncate">{testimonial.name}</p>
        <p className="text-sm text-gray-400 truncate">{testimonial.role}</p>
      </div>
    </div>
  </div>
</div>
);

const AnimatedRow: React.FC<AnimatedRowProps> = ({ testimonials, direction, speed = 40 }) => {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className="overflow-hidden relative mb-8 w-full">
      <div
        className={`flex gap-6 ${animationClass}`}
        style={{
          animationDuration: `${speed}s`,
          width: 'fit-content',
        }}
      >
        {/* Original set */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`original-${index}`} testimonial={testimonial} index={index} />
        ))}
        {/* Duplicate set for seamless loop */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} index={index} />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default function Testimonials(): React.ReactElement {
  // Split testimonials into two rows of 5 each
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5, 10);

  return (
    <>
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="w-full bg-black text-white   py-6  md:py-12  md:px-12 lg:px-20 text-center overflow-hidden">
        {/* Top Logos Arc */}
        <div className="relative w-full flex justify-center mb-12">
          <div className="relative flex gap-12 flex-wrap justify-center">
            <Image
              src={Logobg}
              alt="brand"
              className="object-contain w-[150%] pb-12 md:pb-0 lg:pb-0 md:w-full h-auto"
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-400 bg-black/50 backdrop-blur-sm">
              Testimonials
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:pb-8 pb-4  px-1 md:px-4 sm:px-0 gradient-text">
          Trusted by innovators
        </h2>

        {/* Animated Testimonials Rows */}
        <div className="w-full">
          {/* First Row - Moving Left */}
          <AnimatedRow testimonials={firstRow} direction="left" speed={25} />

          {/* Second Row - Moving Right */}
          <AnimatedRow testimonials={secondRow} direction="right" speed={30} />
        </div>
      </section>
    </>
  );
}