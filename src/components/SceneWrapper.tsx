import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface SceneWrapperProps {
  children: React.ReactNode;
  sceneKey: string;
  reducedMotion?: boolean;
}

export const SceneWrapper: React.FC<SceneWrapperProps> = ({
  children,
  sceneKey,
  reducedMotion = false,
}) => {
  if (reducedMotion) {
    return (
      <motion.div
        key={sceneKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="w-full min-h-[calc(100vh-140px)] flex flex-col justify-between"
      >
        {children}
      </motion.div>
    );
  }

  const containerVariants: Variants = {
    initial: {
      opacity: 0,
      y: 18,
      scale: 0.99,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -14,
      scale: 0.99,
      transition: {
        duration: 0.25,
        ease: [0.65, 0, 0.35, 1] as const,
      },
    },
  };

  return (
    <motion.div
      key={sceneKey}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-[calc(100vh-140px)] flex flex-col justify-between"
    >
      {children}
    </motion.div>
  );
};
