import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface HeroProps {
  onHoverAction?: (isHovering: boolean) => void;
  onNavigate?: (scene: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Main Hero Typography */}
      <div className="my-auto py-12 md:py-20 max-w-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="z-10"
        >
          {/* Primary Statement */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={lineVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal leading-[1.05] tracking-tight text-[#25221E]"
            >
              STILL LEARNING WHAT’S POSSIBLE.
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8 md:mb-10">
            <motion.h1
              variants={lineVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal italic leading-[1.05] tracking-tight text-[#25221E]/90"
            >
              ALREADY BUILDING WHAT’S NEXT.
            </motion.h1>
          </div>

          {/* Supporting Copy */}
          <motion.p
            variants={lineVariants}
            className="text-base sm:text-lg md:text-xl text-[#756D63] max-w-2xl font-light leading-relaxed mb-8 md:mb-10"
          >
            AI/ML student exploring emerging technologies, building products, and teaching machines to do more than just answer questions.
          </motion.p>

          {/* Direct Route to Work */}
          <motion.div variants={lineVariants} className="pt-2">
            <button
              onClick={() => onNavigate?.('work')}
              className="inline-flex items-center space-x-3 font-mono text-xs tracking-widest uppercase text-[#25221E] hover:text-[#B49772] transition-colors py-2 border-b border-[#25221E] hover:border-[#B49772] cursor-pointer"
            >
              <span>EXPLORE WORK</span>
              <span className="text-sm">↗</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
