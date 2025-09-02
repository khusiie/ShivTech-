import React from 'react';
import { Grid, GitBranch, Workflow, Book, FileText } from 'lucide-react';

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

const TwoCardsLayout: React.FC = () => {
  const aiInsideItems = [
    { text: "AI code review", isHighlighted: false },
    { text: "Unit-test generation", isHighlighted: true },
    { text: "QA agents", isHighlighted: false },
    { text: "Doc co-writing", isHighlighted: false }
  ];

  const artifactsItems = [
    { text: "Figma designs", icon: Grid, isHighlighted: false },
    { text: "Source repositories", icon: GitBranch, isHighlighted: false },
    { text: "CI/CD pipelines", icon: Workflow, isHighlighted: false },
    { text: "Technical runbooks", icon: Book, isHighlighted: false },
    { text: "Owner handoff documentation", icon: FileText, isHighlighted: false }
  ];

  // Generate random stars for the background
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 20; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.2
      });
    }
    return stars;
  };

  // Different tilt angles for each block
  const tiltAngles = ['-1deg', '1.5deg', '-0.8deg', '1.2deg'];

  const AIInsideCard: React.FC = () => {
    const stars = generateStars();
    
    return (
      <div className="relative p-6 overflow-hidden h-full  inset-0 pointer-events-none
    
  bg-radial-[at_1%_0%] from-white/20 via-black/60 to-transparent
    rounded-2xl border border-white/20">
                
        {/* Starry background - made more transparent */}
        <div className="absolute inset-0 overflow-hidden  ">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity * 0.3, // Made more subtle
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Decorative plus signs */}
        <div className="absolute top-8 right-12 text-white/20 text-lg">+</div>
        <div className="absolute top-16 right-6 text-white/20 text-sm ">+</div>
        <div className="absolute bottom-20 left-8 text-white/20 text-lg">+</div>

        {/* Content */}
        <div className="relative z-10 text-white h-full flex flex-col">
          <h2 className="text-xl font-bold mb-6 text-white/95">AI Inside</h2>
                <div className='w-full h-px bg-slate-600/30 mb-4'></div>
          
          <div className="space-y-6 flex-1">
            {aiInsideItems.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center gap-3">
                 
                  
                  <div
  className="flex-1 px-4 py-3 rounded-lg transition-all duration-300 
             bg-gray-800/40 hover:bg-slate-700/40 border border-slate-600/20
             flex items-center gap-4"
  style={{ transform: `rotate(${tiltAngles[index]})` }}
>
  {/* Left vertical bar */}
  <div
    className="w-1 h-8 rounded-full transition-all duration-300 bg-slate-500/80"
  />

  {/* Text */}
  <span
    className={`text-sm font-medium ${
      item.isHighlighted ? "text-white" : "text-slate-200"
    }`}
  >
    {item.text}
  </span>
</div>

                </div>

             
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ArtifactsCard: React.FC = () => {
    return (
      <div className="rounded-2xl p-6 h-full   bg-radial-[at_1%_0%] from-white/20 via-black/60 to-transparent border border-white/20">
        <div className="text-white h-full flex flex-col  ">
          <h2 className="text-xl font-bold mb-6 text-white/95">Artifacts</h2>
         <div className='w-full h-px bg-slate-600/30 mb-4'></div>
          
          <div className="space-y-5 flex-1">
            {artifactsItems.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-3">
                  <div className="flex-1 px-4 py-3 rounded-lg bg-slate-800/40 hover:bg-slate-700/40 border border-slate-600/20 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-200">
                        {item.text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Gradient Card Component
  const GradientCard: React.FC<GradientCardProps> = ({ children, className = "" }) => {
    return (
      <div className={`relative overflow-hidden rounded-md ${className}`} style={{ isolation: 'isolate' }}>
        {/* Background with gradient */}
        <div className="absolute inset-0 z-0" 
             style={{
               background: 'linear-gradient(135deg, #2c4f54 0%, #01AAFF0A 25%, #01AAFF12 50%, #01AAFF1F 100%)'
             }}>
        </div>
        
        {/* Static dot pattern overlay */}
        <div className="absolute inset-0 z-0" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                 radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                 radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
               `,
               backgroundSize: '25px 25px, 20px 20px, 30px 30px'
             }}>
        </div>
        
        <div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `
      linear-gradient(90deg, transparent 48%, rgba(255, 255, 255, 0.05) 49%, rgba(255, 255, 255, 0.05) 51%, transparent 52%),
      linear-gradient(0deg, transparent 48%, rgba(255, 255, 255, 0.05) 49%, rgba(255, 255, 255, 0.05) 51%, transparent 52%)
    `,
    backgroundSize: "30px 30px",
  }}
></div>

        
        {/* Content */}
        <div className="relative z-10 p-10">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-black min-h-screen flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-[70%] h-[100%]">
        
        <GradientCard>
          <AIInsideCard />
        </GradientCard>
        
        <GradientCard>
          <ArtifactsCard />
        </GradientCard>

      </div>
    </div>
  );
};

export default TwoCardsLayout;