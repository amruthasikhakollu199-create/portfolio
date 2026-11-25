import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SceneTransitionOverlayProps {
  isTransitioning: boolean;
  targetSceneName?: string;
  reducedMotion?: boolean;
}

export const SceneTransitionOverlay: React.FC<SceneTransitionOverlayProps> = ({
  isTransitioning,
  targetSceneName,
  reducedMotion = false,
}) => {
  if (reducedMotion) {
    return (
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#F5F0E8] pointer-events-none"
          />
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="cinematic-curtain"
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{
            duration: 0.42,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="fixed inset-0 z-50 bg-[#F5F0E8] border-y border-[#D8CFC2] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* Subtle paper grain & warm ambient gradient */}
          <div className="absolute inset-0 paper-grain opacity-40 mix-blend-multiply" />
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(201, 181, 150, 0.3) 0%, rgba(245, 240, 232, 0) 70%)'
            }}
          />

          <div className="relative text-center px-6 max-w-lg mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl text-[#25221E] font-normal tracking-tight"
            >
              {targetSceneName?.toUpperCase() || ''}
            </motion.h3>

            {targetSceneName?.toUpperCase() === 'WORK' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.22 }}
                className="font-serif italic text-base sm:text-lg text-[#756D63] mt-2 font-light"
              >
                Questions that turned into code. Code that turned into working products.
              </motion.p>
            )}

            {targetSceneName?.toUpperCase() === 'ABOUT' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.22 }}
                className="font-serif italic text-base sm:text-lg text-[#756D63] mt-2 font-light"
              >
                Not an expert. Just obsessed with learning.
              </motion.p>
            )}

            {targetSceneName?.toUpperCase() === 'CONTACT' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.22 }}
                className="font-serif italic text-base sm:text-lg text-[#756D63] mt-2 font-light"
              >
                Let's build something thoughtful together.
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
