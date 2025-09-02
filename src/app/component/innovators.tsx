"use client";
import Image from "next/image";
import Logobg from "../../../public/assets/innovators/logobg.svg";

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
    text: "They shipped in weeks what others scoped in quarters.",
    name: "Jessica Miller",
    role: "Founder, HealthTech",
    avatar: "/avatars/1.jpg",
  },
  {
    text: "Clarity, speed, and quality—rare combo.",
    name: "Stephen Rai",
    role: "CEO, Creator App",
    avatar: "/avatars/2.jpg",
  },
  {
    text: "They didn't hand over; they handheld us to PMF.",
    name: "Joshua Jones",
    role: "CPO, SaaS",
    avatar: "/avatars/3.jpg",
  },
  {
    text: "Built a senior-heavy team that executes outcomes, not tasks.",
    name: "Amelia Brown",
    role: "CTO, Fintech",
    avatar: "/avatars/4.jpg",
  },
  {
    text: "Innovation at its finest with exceptional delivery.",
    name: "Michael Chen",
    role: "VP Engineering, EdTech",
    avatar: "/avatars/5.jpg",
  },
  {
    text: "Transformed our vision into reality seamlessly.",
    name: "Sarah Davis",
    role: "Product Manager, E-commerce",
    avatar: "/avatars/6.jpg",
  },
  {
    text: "Best development partner we've ever worked with.",
    name: "David Wilson",
    role: "CTO, AI Startup",
    avatar: "/avatars/7.jpg",
  },
  {
    text: "Speed and quality that exceeds all expectations.",
    name: "Emily Taylor",
    role: "Founder, MedTech",
    avatar: "/avatars/8.jpg",
  },
  {
    text: "They understand business needs beyond just code.",
    name: "Robert Johnson",
    role: "CEO, Logistics",
    avatar: "/avatars/9.jpg",
  },
  {
    text: "Exceptional team that delivers on every promise.",
    name: "Lisa Anderson",
    role: "Head of Product, Retail",
    avatar: "/avatars/10.jpg",
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500 transition-colors duration-300 min-w-[320px] flex-shrink-0">
    <p className="text-gray-300 mb-4 italic text-left">"{testimonial.text}"</p>
    <div className="flex items-center gap-3 mt-auto">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="text-left">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-400">{testimonial.role}</p>
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

      <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center overflow-hidden">
        {/* Top Logos Arc */}
        <div className="relative w-full flex justify-center mb-12">
          <div className="relative flex gap-12 flex-wrap justify-center">
            <Image
              src={Logobg}
              alt="brand"
              className="w-full h-full object-contain"
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-400 bg-black/50 backdrop-blur-sm">
              Testimonials
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-bold mb-12">
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